import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* 
state相当于vue中的data，保存共享数据
mutations操作state数据的方法集中写在mutations中 由其他方法调用 集中管理 方便溯错
getters相当于计算属性

*/
export default new Vuex.Store({
  state: {
    msg:'test msg'
  },
  mutations: {
  },
  getters:{
    test(state){
      return state.msg+".com"
    }
  },
  actions: {
  },
  modules: {
  }
})
