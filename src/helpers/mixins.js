import Vue from "vue";
import { router } from "../router/router";

export const mixins = {
    methods: {
        $kebab(val) {
            return val
                .replace(/([a-z])([A-Z])/g, "$1-$2")
                .replace(/[\s_]+/g, "-")
                .toLowerCase();
        },
        Route(name, params = null) {
            if (!params) {
                router.push({ name: name });
                return;
            }
            router.push({ name: name, params: params });
        }
    }
};

Vue.mixin(mixins);
