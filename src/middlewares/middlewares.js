import { store } from "../store/store";

export const middleware = (to, from, next) => {
    if (to.matched.some(record => record.meta.guest)) {
        if (store.getters["auth/login"]) {
            return next({ name: "dashboard" });
        }
        return next();
    }

    if (!store.getters["auth/login"])
        return next({
            name: "auth.login",
            params: {
                redirected: to
            }
        });
    return next();
};
