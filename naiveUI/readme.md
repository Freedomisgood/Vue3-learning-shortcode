# Naive-UI
> [官方文档](https://www.naiveui.com/zh-CN/light)
>
> [【全网首发】尤雨溪强推的 NaiveUI 极速上手体验，大家来看看这前端开源组件香不香](https://www.bilibili.com/video/BV1rK4y1u7mA/?spm_id_from=autoNext)
1. 由于naiveUI只支持 Vue 3（>3.0.5）, 因此需要先查看项目中vue的版本，`npm list vue` or `yarn list vue`
2. 安装npm i -D naive-ui
3. 按需引入
    - SCF中单独直接引用, 有个特点是需要用到的标签, 不仅得import导入, 还需要在`components: {}`中明确指出
        ```vue
        <script>
          import { defineComponent } from 'vue'
          import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui'
          // theme
          import { createTheme, inputDark, datePickerDark } from 'naive-ui'
          // locale & dateLocale
          import { zhCN, dateZhCN } from 'naive-ui'
        
          export default defineComponent({
            components: {
              NConfigProvider,
              NInput,
              NDatePicker,
              NSpace
            },
            setup() {
              return {
                darkTheme: createTheme([inputDark, datePickerDark]),
                zhCN,
                dateZhCN
              }
            }
          })
        </script>
        
        <template>
          <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
            <n-space vertical>
              <n-input />
              <n-date-picker />
            </n-space>
          </n-config-provider>
        </template>
        
        <style>
          body {
            background: black;
          }
        </style>
        ```
    - 按需在全局引入组件
        ```vue
        import { createApp } from 'vue'
        import {
          // create naive ui
          create,
          // component
          NButton
        } from 'naive-ui'
        
        const naive = create({
          components: [NButton]
        })
        
        const app = createApp()
        app.use(naive)
        ```
        全局引入后就可以这样在 SFC 中直接使用安装的组件，不需要再单独引入了。
        ```vue
        <template>
          <n-button>naive-ui</n-button>
        </template>
        ```
        
## 使用图标图

需要导入@vicons/ionicons5, `yarn add @vicons/ionicons5`
## 使用信息 Message：

>（一般是）从浏览器顶部降下来的神谕。
如果你想使用信息，你需要把调用其方法的组件放在 n-message-provider 内部并且使用 useMessage 去获取 API。

## 菜单 Menu 使用

```js
<template>
  <n-layout-sider class="height" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240" :native-scrollbar="false" :inverted="inverted">
    <n-menu :inverted="inverted" :collapsed-width="64" :collapsed-icon-size="22" @update:value="handleUpdateValue" :options="navs" :value="active" />
  </n-layout-sider>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import routes from "@/router/routes";
import { deepClone } from "@/utils/index";
function filterNavs(ary) {
  ary.forEach((item, index) => {
    if (item.children) {
      filterNavs(item.children);
    } else {
      if (item.hidden) {
        ary.splice(index, 1);
      }
    }
  });
  return ary;
}
export default defineComponent({
  name: "Sidebar",
  props: {
    inverted: {
      type: Boolean,
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const navs = filterNavs(deepClone(routes));     // routes列表中是符合规则的{key: "xxx", children: { ? }}
    let active = ref("");
    
    const handleUpdateValue = (key, item) => {
      active.value = key;
      router.push({ path: item.path });
    };
    
    watch(
      () => route.path,
      () => {
        if (!route.children) {
          active.value = route.name;
        }
      },
      { immediate: true, deep: true }
    );
    return {
      navs,
      active,
      handleUpdateValue,
    };
  },
});
</script>

<style>
```
