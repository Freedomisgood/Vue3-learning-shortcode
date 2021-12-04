<template>
    <n-layout-header  bordered class="header">
      <n-space>
        <n-switch /> 主题
      </n-space>
    </n-layout-header>
</template>

<script>
    import { defineComponent } from "vue"
    import {
        NLayoutHeader,
        NSpace,
        NSwitch
    } from "naive-ui"
    export default defineComponent({
        name: "Header",
        components:{
            NLayoutHeader,
            NSpace,
            NSwitch
        }
    })
</script>

<style>
 
</style>
