// 改变属性的状态
export const setMenuItems = (state, data) => {
    Object.keys(data).forEach(item => {
        const value = data[item]
        value.id = item
        value.options && value.options.forEach(option => {
            option.price = option.price ? option.price * 1 : 0
        })
    })
    state.menuItems = Object.values(data)
}
export const removeMenuItem = (state, data) => {
    state.menuItems.splice(state.menuItems.indexOf(data), 1)
}
export const addMenuItem = (state, data) => {
    state.menuItems.push(data)
}
export const setUser = (state, data) => {
    if (data) {
        state.currentUser = data
        state.isLogin = true
    } else {
        state.currentUser = null
        state.isLogin = false
    }
}
