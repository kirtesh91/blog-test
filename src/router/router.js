import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import { store } from "../store/store";
import { middleware } from "../middlewares/middlewares";
import { routes } from "./routes";

Vue.use(VueRouter);

axios.defaults.headers.common["Content-Type"] = "application/json";
const token = store.getters["auth/token"];

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // eslint-disable-next-line no-prototype-builtins
        if (error.response.data.hasOwnProperty("message")) {
            Vue.toasted.error(error.response.data.message);
        } else {
            Vue.toasted.error("Sorry! Some Error Occurred!");
        }

        return Promise.reject(error);
    }
);

export const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    mode: "history"
});

router.beforeEach(middleware);
