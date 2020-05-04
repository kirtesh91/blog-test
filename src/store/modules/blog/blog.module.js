import { actions } from "./blog.actions";
import { mutations } from "./blog.mutations";
import { getters } from "./blog.getters";
import { state } from "./blog.state";

export const BlogModule = {
    namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
};
