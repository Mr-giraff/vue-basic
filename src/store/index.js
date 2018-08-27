import Vue from 'vue'
import Vuex from 'vuex'

// 方式2
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// 方式3
import menu from './modules/menu'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    // 方式1.直接设置store
    // state: {
    //     // 设置属性
    //     menuItems: [],
    //     currentUser: null,
    //     isLogin: false,
    // },
    // getters: {
    //     // 获取属性的状态
    //
    // },
    // mutations: {
    //     // 改变属性的状态
    //     setMenuItems(state, data) {
    //         Object.keys(data).forEach(item => {
    //             const value = data[item]
    //             value.id = item
    //             value.options && value.options.forEach(option => {
    //                 option.price = option.price ? option.price * 1 : 0
    //             })
    //         })
    //         state.menuItems = Object.values(data)
    //     },
    //     removeMenuItem(state, data) {
    //         state.menuItems.splice(state.menuItems.indexOf(data), 1)
    //     },
    //     addMenuItem(state, data) {
    //         state.menuItems.push(data)
    //     },
    //     setUser(state, data) {
    //         if (data) {
    //             state.currentUser = data
    //             state.isLogin = true
    //         } else {
    //             state.currentUser = null
    //             state.isLogin = false
    //         }
    //     }
    // },
    // actions: {
    //     // 应用mutation
    //     setUser({commit}, data) {
    //         commit('setUser', data)
    //     }
    // },

    // 方式2.引入actions/getters/mutations
    // state: {
    //     // 设置属性
    //     menuItems: [],
    //     currentUser: null,
    //     isLogin: false,
    // },
    // getters,
    // mutations,
    // actions,

    // 方式3.引入modules
    modules: {
        menu,
        users,
    }
})
