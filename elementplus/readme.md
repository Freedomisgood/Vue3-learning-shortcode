## 手动安装

1. 安装`npm install element-plus --save` or `yarn add element-plus`

2. 根据需求选择全局导入, 还是按需导入
    ①**完整引入**

    ```ts
    // main.ts
    import { createApp } from 'vue'
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    import App from './App.vue'
    
    const app = createApp(App)
    
    app.use(ElementPlus)
    app.mount('#app')
    ```
    ②**按需导入**

    - 自动按需导入

    First you need install unplugin-vue-components and unplugin-auto-import.
    `npm install -D unplugin-vue-components unplugin-auto-import`
    Then add the code below into your Vite or Webpack config file.

    ```js
    // vite.config.ts
    import AutoImport from 'unplugin-auto-import/vite'
    import Components from 'unplugin-vue-components/vite'
    import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
    
    export default {
      plugins: [
        // ...
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
    }
    ```

    - 手动导入所需要的组件

    ```vue
    <template>
      <el-button>I am ElButton</el-button>
    </template>
    <script>
      import { ElButton } from 'element-plus'
      export default {
        components: { ElButton },
      }
    </script>
    ```

    ```js
    // vite.config.ts
    import ElementPlus from 'unplugin-element-plus/vite'
    
    export default {
      plugins: [ElementPlus()],
    }
    ```

    

    

## 通过Vue-cli插件工具安装

此外，可以通过vue-cli的插件[vue-cli-plugin-element-plus](https://github.com/element-plus/vue-cli-plugin-element-plus)安装

First you need to install `@vue/cli` globally (follow the instructions [here](https://cli.vuejs.org/)).Then create a project and add the Element Plus plugin:

```
vue create my-app
cd my-app
vue add element-plus
```

`vue add element-plus`这一步会执行挺久的，然后选择**全部引入**还是**按需引入**

```
Done in 181.84s.
✔  Successfully installed plugin: vue-cli-plugin-element-plus

? How do you want to import Element Plus? 
> Fully import
  Import on demand
```

之后会选择语言包

```
? Choose the locale you want to load, the default locale is English (en) zh-cn

🚀  Invoking generator for vue-cli-plugin-element-plus...
📦  Installing additional dependencies...

yarn install v1.22.17
[1/4] Resolving packages...
⠄ lodash@^4.2.0
```

安装完后，就可以按需使用啦

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { ElButton } from 'element-plus'

const app = createApp(App)
app.use(Antd)
    .use(router)
    .use(ElButton)		// 必须挂载要使用的组件
    .mount('#app')		

// ElementPlus.Vue
<template>
    <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </el-row>
</template>

<script>
    export default{
        name: "ElementPlus"
    }
</script>
```

