// store/index.js
export const state = () => ({
  title: 'cms-artikel',
  description: '',
})

export const mutations = {
  SET_TITLE(state, title) {
    state.title = title
  },
  SET_DESCRIPTION(state, description) {
    state.description = description
  },
}

export const actions = {
  setTitle({ commit }, title) {
    commit('SET_TITLE', title)
  },
  setDescription({ commit }, description) {
    commit('SET_DESCRIPTION', description)
    console.log(description)
  },
}
