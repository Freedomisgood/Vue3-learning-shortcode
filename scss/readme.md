1. 安装依赖: `yarn add node-sass sass-loader@8.0.2 sass`

2. vue.config.js中的配置(可选)

   ```js
   module.exports = {
       css: {
           loaderOptions: {
               sass: {
                   prependData: `@import "@/assets/style.scss";`
               }
           }
       },
   }
   
   ```

   作用是向全局暴露style.scss的内容，方便使用



