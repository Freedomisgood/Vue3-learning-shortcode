import { createI18n }  from "vue-i18n"
// import messages from "./lang"        也可以把messages拆成多个lang


// 准备翻译的语言环境信息
const messages = {
    zn: {
      msg: {
        hello: '你好, 世界',
        age: "1"
      }
    },
  en: {
    msg: {
      hello: 'hello world',
      age: "one"
    }
  },
  ja: {
    msg: {
      hello: 'こんにちは、世界',
      age: "①"
    }
  }
}

// 根据浏览器语言设置来设定
// const [locale, fallbackLocale] = /^zh\b/.test(window.navigator.language)
//   ? [Locale.ZH, Locale.EN]
//   : [Locale.EN, Locale.ZH]

// 通过选项创建 VueI18n 实例
export default createI18n({
  locale: 'zn', // 设置地区
  // fallbackLocale,
  messages, // 设置地区信息
})
