<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    import { onMounted } from "vue" 
    export default {
        name: 'HelloWorld',
        props: {                    // 说明是从父组件传来的
            msg: String             // 指定props变量传入的类型
        },                          
        setup(props){
            onMounted ({            // 展示如果在compositionAPI中调用
                console.log(props)
            })
        }
        // optionalAPI的话直接通过this来调用
    }
</script>