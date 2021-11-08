import { devices } from '../const'

export default {

  namespaced: true,
  state: () => ({
    message: {},
    config: {},
    devicesName: devices
  }),
  mutations: {
    SET_MESSAGE (state, value) {
      state.message = value;
    },
    SET_CONFIG (state, value) {
      state.config = value;
    },
  },
  actions: {
    "socket_message" ({ commit, state: { message } }, value) {
      commit('SET_MESSAGE', { ...message, ...value })
    },
    "socket_config" ({ commit }, value) {
      commit('SET_CONFIG', { ...value })
    },
  },
  getters: {
    getMessage: ({ message }) => id => message[id] || {},
    getInfo: ({ devicesName }) => platform => devicesName[platform] || {},
    getState: ({ message }) => id => message[id]?.state || {},
    getDevices: ({ config }) => config?.devices || [],
    getToken: ({ config }) => config?.token || '',
  },
};
