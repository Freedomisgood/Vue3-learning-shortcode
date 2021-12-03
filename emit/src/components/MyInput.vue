<template>
    <input v-model="iput"/>
    <button type="button" @click="alter">发送emit</button>
</template>

<script>
    import { defineComponent, ref } from "vue"
    export default defineComponent({
        emits: {
            add: null
        },
        setup(props, {emit}){
            let iput = ref("No")
            
            function alter(){
                console.log("子组件发送了")
                emit("add", iput)
            }
            
            return {
                iput,
                alter
            }
        }
    })
</script>

<style lang="scss">
    $h: 20px;
    @mixin f {
        height: $h;
        align-items: center;
        justify-content: center;
    }
    
    input{
        @include f;
    }
    
    
    button {
        @include f;
        &:hover{
            border-radius: 1px;
        }
    }
</style>
