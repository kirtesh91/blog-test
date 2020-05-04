import axios from "axios";

export const AuthMutations = {
    setToken(state, details) {
        localStorage.setItem("access_token", details.token);
        state.token = details.token;
        state.profile = details.customer;
        state.meta.verified = true;

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${details.token}`;
    },
    logout(state) {
        localStorage.removeItem("access_token");
        state.meta.verified = false;
        state.token = null;
        state.profile = null;

        delete axios.defaults.headers.common["Authorization"];
    }
};
