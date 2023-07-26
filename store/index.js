// store/index.js
export const state = () => ({
  userData: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.userData = user
  },
}

export const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user)
  },
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
}
