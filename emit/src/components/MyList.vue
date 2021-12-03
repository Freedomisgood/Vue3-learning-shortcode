<template>
    <!-- <template v-for="item in mlist" :key="item"></template> -->
    <!-- <div>
        <template v-for="item in mlist" :key="item.id">
           
        </template>
    </div> -->
    <ul>
        <li v-for="item in mlist" :key="item.id">
             {{ item.title}}
        </li>
    </ul>
</template>

<script>
    import { defineComponent } from "vue"
    export default defineComponent({
        props: {
            mlist: Array
        }
    })
</script>

<style>
</style>
