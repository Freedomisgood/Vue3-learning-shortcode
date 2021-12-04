# 使用Naive-UI搭建首页导航条

记一个根据路由动态绑定菜单item的写法:
```vue
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
    const navs = filterNavs(deepClone(routes));
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
</style>
```

```js
import {
  h,
} from "vue";
import Home from '@/components/Home.vue'
import {
  NIcon
} from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "vicons/ionicons-v5";

function renderIcon(icon) {
  return () => h(NIcon, null, {
    default: () => h(icon)
  });
}

const routes = [{
    path: '/',
    name: 'Index',
    key: 'Index',
    redirect: '/dashboard/index',
    hidden: true,
    label: "首页",
    icon: renderIcon(BookIcon),
  },

  // 首页
  {
    path: '/dashboard',
    name: 'Dashboard',
    key: 'Dashboard',
    redirect: '/dashboard/index',
    component: Home,
    label: "首页",                // 这边的label和icon都是喂给之后的Naive-menu使用的
    icon: renderIcon(BookIcon),   
    meta: {
      label: "首页",
    },
    children: [{
      path: "/dashboard/index",
      name: 'DashboardIndex',
      key: 'DashboardIndex',
      component: () => import('../views/HelloWorld.vue'),
      label: "Hello",
      newb: "yes",
      icon: renderIcon(BookIcon),
      meta: {
        label: "Hello",
      }
    }, {
      path: "/dashboard/page1",
      name: 'DashboardPage1',
      key: 'DashboardPage1',
      component: () => import('../views/Page1.vue'),
      label: "第一页",
      icon: renderIcon(PersonIcon),
      meta: {
        label: "第一页",
      }
    }]
  },

  // 第二页
  {
    path: "/users",
    name: 'Users',
    key: 'Users',
    redirect: '/users/index',
    component: Home,
    label: "账户",
    icon: renderIcon(WineIcon),
    meta: {
      label: "账户",
    },
    children: [{
      path: '/users/index',
      name: 'UsersIndex',
      key: 'UsersIndex',
      component: () => import('../views/Page2.vue'),
      label: "第二页",
      icon: renderIcon(WineIcon),
      meta: {
        label: "第二页",
      },
    }],
  },
]

export default routes;
```
from: [喂给naive组件的写法](https://github.com/cshenger/vite-naive/blob/main/src/components/Sider/index.vue)