import axios from "axios";

export const AuthActions = {
    register(context, credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("/auth/register", credentials)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    verifyOtpLogin({ commit, dispatch }, credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("auth/otp/login", credentials)
                .then(response => {
                    commit("setToken", response.data);
                    dispatch("cart/syncCart", null, { root: true });
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    login({ commit, dispatch }, credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("auth/login", credentials)
                .then(response => {
                    commit("setToken", response.data);
                    dispatch("cart/syncCart", null, { root: true });
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    resendOtp(context, customerId) {
        return new Promise((resolve, reject) => {
            axios
                .post("auth/otp/resend", {
                    customerId: customerId
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    retrieveOtp(context, mobile) {
        return new Promise((resolve, reject) => {
            axios
                .post("/auth/checkout/register", {
                    mobile: mobile
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    retrievePasswordOtp(context, mobile) {
        return new Promise((resolve, reject) => {
            axios
                .post("/auth/password/otp", {
                    mobile: mobile
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    verifyPasswordOtp(context, credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("auth/password", credentials)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    resendPasswordOtp(context, details) {
        return new Promise((resolve, reject) => {
            axios
                .post("auth/password/otp/resend", details)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    logout({ commit }) {
        commit("logout");
    }
};
