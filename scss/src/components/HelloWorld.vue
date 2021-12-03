<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<style scoped lang="scss">
    @import "@/assets/part.scss"        // 展示局部导入
    h3 {
        margin: 40px 0 0;
    }

    a {
        color: $bg;
    }
</style>
