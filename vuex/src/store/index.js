import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    // 全局msg
    msg: "你好啊"
  },
  mutations: {                      // 同步
    changeMsg(state, val) {         // 提供修改的函数
      state.msg = val
    },
  },
  actions: {},                      // 异步
  modules: {}                       // 以模块的形式导入
})