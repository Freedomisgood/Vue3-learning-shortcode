<template>
  <button @click="handleClick">点击emit-click事件</button>
  <button @click="handleOpen">点击emit-open事件</button>
</template>


<script >
import {defineComponent} from "vue";
export default defineComponent({
  // emits: {
  //   click: null,//click事件没有检验
  //   open_show: (value) => {
  //     if (typeof value === "string") {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  setup(props, {emit}) {
    const handleClick = function() {
      emit("clickx");
    };
    const handleOpen = function() {
        console.log("show")
      emit("open_show", 1);     // 1为传递的参数
    };
    return {
      handleClick,
      handleOpen,
    };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style scoped></style>