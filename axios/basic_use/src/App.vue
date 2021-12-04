<template>
    <DailyWord />
    
</template>

<script>
    import DailyWord from "./components/DailyWord.vue"
import { provide, ref } from "vue"


export default {
  name: 'App',
  components: {
    DailyWord
  },
  setup(){
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
