<template>
    <div>
        <h1>
            App
        </h1>
        <input v-model="a"/>
    </div>
    <br />
    <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { provide, ref } from "vue"


export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup(){
      let a = ref("")
      provide("d", a)       // 叫d
      return {
          a
      }
  }
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
