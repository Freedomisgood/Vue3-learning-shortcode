<template>
    <n-layout-sider class="height" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240" :native-scrollbar="false" >
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    :collapsed-width="64" :collapsed-icon-size="22" 
    accordion
  />
  </n-layout-sider>
</template>

<script>
import { defineComponent, h } from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import { RouterLink } from "vue-router" 
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Logs',
          }
        },
        { default: () => '鱼' }
      ),
    key: 'fish',
    icon: renderIcon(FishIcon),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy'
          }
        ]
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion'
          }
        ]
      }
    ]
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals'
      }
    ]
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not'
      }
    ]
  }
]

export default defineComponent({
    components:{
        NMenu
    },
  setup () {
    return {
      menuOptions,
      defaultExpandedKeys: ['fish', 'braise']
    }
  }
})
</script>


<style >
</style>