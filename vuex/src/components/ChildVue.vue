<template>
    <input type="text" v-model="data"/>
    <button type="button" @click="changeMsg"></button>
</template>

<script>
    import {defineComponent} from 'vue'
    import store from "../store/index.js"
    
    
    export default defineComponent({
        components: {
        
        },
        setup(){
            let data = ref("")
            let changeMsg = ()=>{
                store.commit("changeMsg", data.value)       // 函数名， 待修改的value
            }
            return {
                data,
                changeMsg
            }
        }
    })
    
    
</script>

<style>
</style>
