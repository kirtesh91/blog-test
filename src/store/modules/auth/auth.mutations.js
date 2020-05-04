import axios from "axios";

export const mutations = {
    setToken(state, details) {
        localStorage.setItem("access_token", details.accesstoken);
        state.token = details.accesstoken;
        state.profile = details.user;

        state.meta.verified = true;

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${details.accesstoken}`;
    },
    logout(state) {
        localStorage.removeItem("access_token");

        state.meta.verified = false;
        state.token = null;
        state.profile = null;

        delete axios.defaults.headers.common["Authorization"];
    },
    profile(state, user) {
        state.profile = user;
        state.meta.verified = true;
    },
    unauthorized(state) {
        state.token = null;
        state.meta.verified = false;

        localStorage.removeItem("access_token");
    }
};
