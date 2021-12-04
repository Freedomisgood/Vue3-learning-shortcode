> 安装`yarn add axios --dev`

# 基础使用

# 跨域调用后端接口
1. 配置vue.config.js
```js
// Vue3中是在vue.config.js配置
module.exports = {
    devServer:{
        host: 'localhost',
        // open: true, 			// vue项目启动时自动打开浏览器
        port: 8080,             // 本地代理服务器使用的端口
        proxy: {  				//配置跨域
          '/api': {				// `/api`是代理标识，用于告诉node，url前面是`/api`的就是使用代理的
            target: 'http://localhost:5000/',  // 目标地址，应该写提供接口的后台服务器的真实地址
            changOrigin: true,  	// 是否跨域
            pathRewrite: {
              '^/api': '' 			// 把实际request URL中的`/api`用``来代替
             /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时, 实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo */
            }
          },
        }
    }
}
```

## 后端配置
```python

@app.route("/api/getword")
def getWord():
    url = "http://sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title={}"
    print("enter")
    # 如果有date参数则返回date参数, 否则默认2021-04-01
    res = requests.get(url.format(request.args.get("date") if request.args.get("date") else "2020-04-01"))
    if res.status_code == 200:
        return res.json()
    else:
        return {"msg": "failed", "code": 404}

```


---
layout: p
title: Vue中使用axios
date: 2021-11-30 10:31:27
tags:
- 前端

---

# axios请求

> [官网网址](https://www.axios-http.cn/docs/example)

- 从浏览器中创建 XMLHttpRequest
- 从 node.js 发出 http 请求
- 支持promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF

## 直接每次从axios库中调用axios函数

```js
<template>
  <div>
    <div>mmmm</div>
  </div>
</template>
 
<script>
import axios from 'axios'
 
export default {
  name: "post",
  created() {
    /*
        post常用的请求数据（data）格式有两种：
        （1）applicition/json
        （2）form-data 表单提交（图片上传，文件上传）
     */
    //第一种写法叫做post别名请求方法
    // http://localhost:8080/static/data.json?id=1
    // applicition/json 请求
    let data = {
      id: 1
    }
    axios.post('../../static/data.json', data)
      .then((res) => {
        console.log('数据：', res);
      })
    //第二种写法
    axios({
      method: 'post',
      url: '../../static/data.json',
      data: data,
    }).then((res) => {
      console.log('数据：', res)
    })
    // form-data 请求
    let formData = new FormData()
    for (let key in data) {
      formData.append(key, data[key])
    }
    axios.post('../../static/data.json', formData)
      .then((res) => {
        console.log('数据：', res);
      })
  }
}
</script>
 
<style scoped>
</style>
```

## 结合 vue使用vue-axios

`npm install --save axios vue-axios`
vue-axios是按照vue插件的方式去写的。那么结合vue-axios，就可以去使用vue.use方法了

```
// 首先在主入口文件main.js中引用

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
```

之后就可以使用了，在组件文件中的methods里去使用了

```js
    getNewsList(){
      this.axios.get('api/getNewsList').then((response)=>{
        this.newsList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })


    },
```

## axios 改写为 Vue 的原型属性

首先在主入口文件main.js中引用，之后挂在vue的原型链上

```js
    import axios from 'axios'
    Vue.prototype.$axios= axios
```

在组件中使用

```js
    this.$axios.get('api/getNewsList').then((response)=>{
            this.newsList=response.data.data;
          }).catch((response)=>{
            console.log(response);
          })
```

## 创建axios实例，并封装成工具类

```js
    // utils/requests.js
    import axios from 'axios'

    // 创建axios实例
    const service = axios.create({
      baseURL: process.env.BASE_API, // api的base_url
      timeout: 5000 // 请求超时时间
    })

    export default service
```

组件中直接import

```js
    <script>
    import maxios import "./utils/requests.js"
    maxios.get('api/getNewsList').then((response)=>{
            this.newsList=response.data.data;
          }).catch((response)=>{
            console.log(response);
          })
    
    </script>
```

注： 封装的request指定了baseURL，针对的是没有协议头的相对URL，比如`/api`；如果使用时加上了http协议头，则还是会走具体的链接，如`http://127.0.0.1:5000/api/getword&date=2020-04-01`

## axios进阶用法: 结合vuex再封装一层

```
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
```

# demo示例

```js
/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */
import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.withCredentials = true
// 允许携带cookie
axios.defaults.withCredentials = true
// 请求头信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// 默认使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios

```