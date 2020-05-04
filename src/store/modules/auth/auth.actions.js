import axios from "axios";
import { router } from "../../../router/router";

export const actions = {
    profile({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("/user/profile")
                .then(response => {
                    commit("profile", response.data);
                    resolve(response);
                })
                .catch(error => {
                    // commit("unauthorized");
                    router.push({ name: "auth.login" });
                    reject(error);
                });
        });
    },
    register(context, credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("/auth/signup", credentials)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    login({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("auth/login", credentials)
                .then(response => {
                    commit("setToken", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    logout({ commit }) {
        commit("logout");
        router.push({ name: "auth.login" });
    }
};
