<template>
  <n-date-picker v-model:value="timestamp" type="date" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { NDatePicker } from "naive-ui"
export default defineComponent({
    components:{
        NDatePicker

    },
  setup () {
    return {
      timestamp: ref(1183135260000)
    }
  }
})
</script>