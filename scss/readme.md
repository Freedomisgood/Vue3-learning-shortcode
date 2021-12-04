1. 安装依赖: `yarn add node-sass sass-loader@8.0.2 sass --dev`, 貌似8.0.2以上的会出问题, 使用不了，并且通过vue-cli创建带scss的sass-loader版本也是8.0.2
> 注: vite中使用必须安装到dev下
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



