import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import { store } from "./store/store";

Vue.config.productionTip = false;

import Toasted from "vue-toasted";
import { mixins } from "./helpers/mixins";

Vue.use(Toasted, {
    position: "top-right",
    theme: "bubble",
    duration: 5000,
    fullWidth: false
});

Vue.toasted.register("error", "Sorry, Some Error Occurred!", {
    type: "error"
});

require("./components/components");

new Vue({
    router,
    store,
    mixins: mixins,
    render: h => h(App)
}).$mount("#app");
