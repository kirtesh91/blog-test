import { actions } from "./auth.actions";
import { mutations } from "./auth.mutations";
import { getters } from "./auth.getters";
import { state } from "./auth.state";

export const AuthModule = {
    namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
};
