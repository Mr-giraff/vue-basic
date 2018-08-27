const state = {
    menuItems: [],
}

const getters = {
    getMenuItems(state) {
        return state.menuItems
    },
}

const mutations = {
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
    },
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions,
}
