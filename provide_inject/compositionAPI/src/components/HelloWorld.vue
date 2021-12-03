<template>
    <div class="hello">
        <input v-model="a"/>
        <button type="button" @click="change"></button>
    </div>
</template>

<script>
    import { inject, ref } from "vue"
    export default {
        name: 'HelloWorld',
          setup(){
              let a = inject("d")           // 获得祖辈传下来的d
              let change = ()=>{
                  a.value = "ww"            // 这边由于传的是响应式对象，因此改变值的时候改变的是地址的值，祖辈的值也会发生修改
              }
              return {
                  a,
                  change
              }
          }
     
     /**
      * 如果祖辈传下来的d不是ref或者reactive的响应式对象，而是具体值的话
      * 需要自己再封装成响应式对象
      setup(){
            let a = inject("a")     // 这边直接拿的是值, 而不是响应式对象
            // 所以要使用的话，最好再封装一层, 或者父组件传下来的时候就是响应式对象
            // 此时v-model中应该写b
            let b = ref(a)
            let change = ()=>{
                console.log(b, typeof(b))
                b.value = "ww"
            }
            return {
                b,
                change
            }
        }
      */
    }
</script>
