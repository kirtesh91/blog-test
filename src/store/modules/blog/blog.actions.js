import axios from "axios";

export const actions = {
    retrieve({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("/blog/", {
                    params: {
                        offset: 0,
                        limit: 30
                    }
                })
                .then(response => {
                    commit("retrieve", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    store({ commit }, details) {
        return new Promise((resolve, reject) => {
            axios
                .post("/blog/", details)
                .then(response => {
                    commit("retrieve", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    like(context, blogId) {
        return new Promise((resolve, reject) => {
            axios
                .post("/blog/like", {
                    blogId: blogId
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
