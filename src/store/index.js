import Vue from 'vue'
import Vuex from 'vuex'
// import modules vuex
import carrousel from './module-carrousel'
import question from './module-question'
import member from './module-member'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    carrousel,
    question,
    member,
  },
})
