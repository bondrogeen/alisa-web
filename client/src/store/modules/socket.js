export default {
  namespaced: true,
  state: () => ({
    message: {},
  }),
  mutations: {
    SET_MESSAGE (state, value) {
      state.message = value;
    },
  },
  actions: {
    "socket_message" ({ commit }, value) {
      commit('SET_MESSAGE', { ...value })
    },
  },
  getters: {
    getMessage: ({ message }) => message,
  },
};
