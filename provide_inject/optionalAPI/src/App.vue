<template>
    <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  provide: {
      "a": "hello"      // 静态写法
  },
  /**
   * 写法二, 返回data数据
   provide(){
       return {
           this.data
       }
   },
   data(){
       return {
           a: "hello"
       }
   }
   */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
