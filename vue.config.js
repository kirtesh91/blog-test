module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/scss/vue.config.scss";`
            }
        }
    }
};
