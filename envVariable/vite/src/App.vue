<template>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        mounted(){
            console.log("env", import.meta.env)
            console.log("env.NAME", import.meta.env.NAME)
        }
    }
</script>
