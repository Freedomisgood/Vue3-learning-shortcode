<template>
    <n-loading-bar-provider />
     <content />
    <!-- </n-loading-bar-provider> -->
     
    <n-button @click="handleStart"> 开始 </n-button>
</template>

<script>
    import {
        defineComponent,
        ref
    } from 'vue'
    import {
        NLoadingBarProvider,
        useLoadingBar,
        NButton
    } from "naive-ui"


    export default defineComponent({
        components: {
            NLoadingBarProvider,
            NButton
        },
        setup() {
            const loadingBar = useLoadingBar()
            const disabledRef = ref(true)
            return {
                disabled: disabledRef,
                handleStart() {
                    loadingBar.start()
                    disabledRef.value = false
                },
            }
        }
    })
</script>
