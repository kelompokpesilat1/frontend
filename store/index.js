// store/index.js
export const state = () => ({
  userData: {},
  categories: [],
  seoData: {},
  dataCartLine: [],
})

export const mutations = {
  SET_USER(state, user) {
    state.userData = user
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_SEO(state, seoData) {
    state.seoData = seoData
  },
}

export const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user)
  },
  setCategories({ commit }, categories) {
    commit('SET_CATEGORIES', categories)
  },
  setSeo({ commit }, seoData) {
    commit('SET_SEO', seoData)
  },
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  getUserRole(state) {
    if (state.userData) {
      switch (state.userData.id_roles) {
        case 1:
          return 'admin'
        case 2:
          return 'author'
        default:
          return 'user'
      }
    }
    return 'anonymous'
  },
}
