<template>
    <h1>选择每日一句的日期</h1>
    <div class="iput">
        <input type="date" v-model="date"/>
        <button type="button" @click="show"></button>
    </div>
    <div class="content">
        {{ data.content.content }}
    </div>
    <button class="newWordbtn" type="button" @click="query">获得新的一句</button>
</template>

<script>
    import request from "axios"
    
    import {
        onMounted,
        defineComponent,
        reactive,
        ref
    } from "vue"
    export default defineComponent({
        setup() {
            let date = ref("")
            let data = reactive({
                content: {}
            })

            var show = () => {
                console.log(date)
            }


            var query = () => {
                console.log(date)
                if (date.value !== "") {
                    request({
                        url: "/api/getword?date=" + date.value,
                        method: "GET"
                    }).then(res => {
                        console.log("query", res.data)
                        console.log("query", res.data.content)
                        data.content = res.data
                    })
                } else {
                    alert("没有选择日期")
                }
            }

            onMounted(() => {
                // console.log(date.value)
                request({
                    url: "/api/getword?date=2020-04-01",
                    method: "GET"
                }).then(res => {
                    console.log("onMounted", res.data)
                    console.log("res.data.content", res.data.content)
                    data.content = res.data
                }).catch((err)=>{
                    console.log("err", err)
                })
            })
            return {
                data,
                date,
                show,
                query
            }
        }
    })
</script>

<style>
    .iput{
        height: 50px;
        display: flex;	
        flex-direction: row;		
        justify-content:center;
    }
    .iput button {
        height: 100%;
        align-self: center;
        /* 外边距全部设置为5 */
        margin: 5px;    
    }

    .iput input{
            height: 100%;
        }

    .newWordbtn {
        height: 20px;
    }

    .content {
        margin: 5px 5px 5px;
        padding: 20px;
    }
</style>
