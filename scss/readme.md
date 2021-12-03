vue.config.js中的配置

```
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