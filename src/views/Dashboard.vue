<template lang="pug">
    .dashboard
        CustomButton.dash-btn(@click="Route('blog.add')")    Add Blog
        CustomButton.dash-btn(@click="Route('blog.list')")    Blogs List
        CustomButton.dash-btn(@click="logout")    Logout
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch("auth/logout");
        }
    },
    name: "Dashboard"
};
</script>

<style lang="scss" scoped>
.dashboard {
    height: 100vh;
    @include flex();
    flex-direction: column;

    .dash-btn {
        margin: 1rem;
    }
}
</style>
