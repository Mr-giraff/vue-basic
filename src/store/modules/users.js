const state = {
    currentUser: null,
    isLogin: false,
}

const getters = {
    getCurrentUser(state) {
        return state.currentUser
    },
    getStatus(state) {
        return state.isLogin
    }
}

const mutations = {
    setUser(state, data) {
        if (data) {
            state.currentUser = data
            state.isLogin = true
        } else {
            state.currentUser = null
            state.isLogin = false
        }
    }
}

const actions = {
    setUser({commit}, data) {
        commit('setUser', data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
