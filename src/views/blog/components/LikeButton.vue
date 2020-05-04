<template lang="pug">
</template>

<script>
export default {
    props: {
        blogId: [String, Number],
        count: Number,
        liked: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: this.liked
        };
    },
    methods: {
    },
    name: "LikeButton"
};
</script>

<style lang="scss" scoped>
.like-button {
}
</style>
