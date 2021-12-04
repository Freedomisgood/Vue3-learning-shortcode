<template>
    <!-- <h2>Home.vue</h2> -->
    <div class="container">
<!--        <n-layout position="absolute">
            <Header class="header" />
            <n-layout has-sider position="absolute" class="content">
                <Sider />
                <n-layout content-style="padding: 24px;">
                    <n-message-provider>
                        <router-view></router-view>
                    </n-message-provider>
                </n-layout>
            </n-layout>
        </n-layout> -->
        <n-layout position="absolute">
            <Header class="header"/>
            <n-layout has-sider position="absolute" class="content">
                <Sider  />
                <n-layout content-style="padding: 24px;">
                    <n-message-provider>
                        <router-view></router-view>
                    </n-message-provider>
                </n-layout>
            </n-layout>
        </n-layout>
    </div>
</template>

<script>
    import Header from "./Header/Header.vue"
    import Sider from "./Sider/Sider.vue"
    import {
        NLayout,
        NLayoutSider,
        NSpace
    } from "naive-ui"

    export default {
        components: {
            Header,
            Sider,
            NLayout,
            NLayoutSider,
            NSpace
        },

    }
</script>

<style lang="scss">
    .container {
        position: relative;
        height: 100vh;

        .content {
            min-height: calc(2000vh - 56px);
            top: 100px;
            bottom: 56px;
        }
        
        .header {
            height: 50px;
        }
    }
    
    
</style>
