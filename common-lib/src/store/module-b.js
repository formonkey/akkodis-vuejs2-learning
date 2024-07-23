export const moduleB = {
    state: () => ({
        message: '',
    }),
    mutations: {
        setMessageB(state, message) {
            state.message = message;
        },
    },
    actions: {
        updateMessageB({ commit }, message) {
            commit('setMessage', message);
        },
    },
    getters: {
        getMessageB: (state) => state.message,
    }
}