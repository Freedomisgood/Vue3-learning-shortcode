<template>

    <ul>
        <li v-for="(l, i) in allLocales" :key="l" @click="changeLocale(i)" class="showLi">
            {{ l }}
        </li>
    </ul>

    <div>
        {{ $t(`msg.hello`) }}
        {{ $t(`msg.age`) }}
        <button type="button" @click="toggle">修改为en</button>
    </div>

</template>

<script>
    import {
        useI18n
    } from 'vue-i18n' //要在js中使用国际化
    import {
        reactive,
        ref,
        Vue
    } from "vue"

    export default {
        setup() {
            let i18n = useI18n()
            let allLocales = reactive(i18n.availableLocales)
            // 不要封装成相应对象, 直接在html中使用{{ $t() }}进行渲染即可
            // let data = ref(i18n.t("msg.age"))

            function toggle() {
                console.log(i18n)
                // locale是个ComputedRefImpl, 需要通过.value取值
                i18n.locale.value = "en"
            }

            // 实现点击切换的功能
            function changeLocale(idx) {
                i18n.locale.value = i18n.availableLocales[idx]
            }

            return {
                toggle,
                allLocales,
                changeLocale
            }
        }
    }
</script>

<style>
    .showLi:hover
    {
        background-color: lightblue;
    }
</style>
