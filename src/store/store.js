import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { AuthModule } from "./modules/auth/auth.module";
import { BlogModule } from "./modules/blog/blog.module";

axios.defaults.baseURL = "http://localhost:8800/";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth: AuthModule,
        blog: BlogModule
    }
});
