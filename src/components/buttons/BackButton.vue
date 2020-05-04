<template lang="pug">
    button.back-btn(@click="back")
        i.fas.fa-chevron-left
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    name: "BackButton"
};
</script>

<style lang="scss" scoped>
.back-btn {
    @include dimension(32px);
    border-radius: 50%;
    @include flex();
    color: $font-color;
    box-shadow: 4px 4px 7px rgba(163, 177, 198, 0.25),
        -4px -4px 7px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    margin-right: 1.5rem;
    @include transition();

    &:active {
        box-shadow: inset 4px 4px 7px rgba(163, 177, 198, 0.25),
            inset -4px -4px 7px rgba(255, 255, 255, 0.25);
    }
}
</style>
