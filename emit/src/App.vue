<template>
    <MyInput @add="be"/>
    <MyList :mlist="mlist"/>
</template>

<script>
import MyInput from './components/MyInput.vue'
import MyList from './components/MyList.vue'
import { ref, provide } from "vue"
export default {
  name: 'App',
  components: {
    MyInput,
    MyList
  },
  data(){
      return {
          mlist: [
              {
                  id: 1,
                  title: "cl"
              },
              {
                  id: 2,
                  title: "mrli"
              },
          ]
      }
  },
  methods:{
      be(t){
          console.log("被点击啦, 添加")
          this.mlist.push({
              id: Math.random(),
              title: t
          })
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
