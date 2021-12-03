## 新建vue工程

- @vue/cli-init

  > `vue init` 是vue-cli2.x的初始化方式

  - `vue init` ： 需要`npm i -g @vue/cli-init`
    - `vue init webpack [project-name]`, webpack为模板`<generate a project from a remote template>`，然后按照交互信息提示输入即可完成工程创建
    - init创建工程时，交互信息中有一个比较有意思的是选择包管理工具： npm、yarn，两者[见](#包管理工具)

- @vue/cli

  > 会让选择Vue2还是Vue3

  - `vue create router_project`: 需要`npm install -g @vue/cli`
  - `vue ui`通过UI创建： 需要`npm install -g @vue/cli`
    - `vue create [project-name]`

  注：经测试，`Vue CLI v4.5.15`会提示选择yarn还是npm；`@vue/cli 4.5.13`没提示==>后来发现貌似是平台的区别，linux上会提示选择，win上默认是yarn

  Vue CLI 的包名称由vue-cli已经改成了@vue/cli，如果通过vue-cli来构建Vue3项目则需要通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载它，然后安装@vue/cli，并且@vue/cli安装好后，如果不安装yarn，那么在vue create创建的时候报错`ERROR  Error: spawn yarn ENOENT`

- `npm init vite-app hello-vue`

  > [Vue](https://so.csdn.net/so/search?from=pc_blog_highlight&q=Vue)3刚发布不久，官方文档中推荐的创建方法之一就是通过脚手架Vite来创建一个vue3项目

>需要安装`create-vite-app`

  - ```bash
    $ npm init vite-app vue3-vite
    	Scaffolding project in F:\Documents\HBuilderProjects\vue3-vite...
    Done. Now run:
    $ cd vue3-vite
    $ npm install (or `yarn`)
    $ npm run dev (or `yarn dev`)
    ```

    可以看到，这个时需要进入项目目录后，里面没有`package-lock`或者`yarn.loca`，而是需要自己主动选择包管理工具进行安装依赖的；`vue create`和`vue init`的不需要可以直接运行

注：2既可以创建Vue2，也可以创建vue3；3只能创建vue3；在创建速度上，法3比法2快上很多