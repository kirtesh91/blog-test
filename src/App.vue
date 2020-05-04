<template lang="pug">
    .blog-test-app
        transition(name="fade" mode="out-in" appear)
            router-view(el="div")
</template>

<script>
export default {
    methods: {
        retrieveProfile() {
            if (this.$store.getters["auth/token"]) {
                this.$store.dispatch("auth/profile");
            }
        }
    },
    created() {
        this.retrieveProfile();
    }
};
</script>

<style lang="scss">
@import "./scss/app";
</style>
