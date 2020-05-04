export const getters = {
    token(state) {
        return state.token;
    },
    login(state) {
        return state.meta.verified;
    },
    profile(state) {
        return state.profile;
    }
};
