import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 设置属性
        menuItems: [],
    },
    getters: {
        // 获取属性的状态

    },
    mutations: {
        // 改变属性的状态
        setMenuItems(state, data) {
            Object.keys(data).forEach(item => {
                const value = data[item]
                value.id = item
                value.options && value.options.forEach(option => {
                    option.price = option.price ? option.price * 1 : 0
                })
            })
            state.menuItems = Object.values(data)
        },
        removeMenuItem(state, data) {
            state.menuItems.splice(state.menuItems.indexOf(data), 1)
        },
        addMenuItem(state, data) {
            state.menuItems.push(data)
        }
    },
    actions: {
        // 应用mutation
    },
})
