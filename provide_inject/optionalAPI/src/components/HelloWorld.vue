<template>
    <div class="hello">
        <!-- <h1>{{ a }}</h1> -->
        <input v-model="b"/>
        <button type="button" @click="change"></button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        /* optionalAPI写法 */
        inject: ['b'], 
        methods:{
            change(){
                console.log(this.b)
                this.b = "v"
            }
        },
    }
</script>
