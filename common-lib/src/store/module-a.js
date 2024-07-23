export const moduleA = {
    state: () => ({
        message: '',
    }),
    mutations: {
        setMessageA(state, message) {
            state.message = message;
        },
    },
    actions: {
        updateMessageA({ commit }, message) {
            commit('setMessage', message);
        },
    },
    getters: {
        getMessageA: (state) => state.message,
    }
}