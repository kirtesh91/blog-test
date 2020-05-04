<template lang="pug">
    button.custom-button(@click="click" :class="{light: light, danger: danger, 'loading-bitton': isLoading}" :disabled="isLoading")
        transition(name="fade" mode="out-in" appear)
            .animate-lightspeed.content(v-if="!isLoading")
                slot
            .loading(v-else)    Please Wait
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        },
        danger: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click() {
            if (!this.isLoading) {
                this.$emit("click");
            }
        }
    },
    name: "CustomButton"
};
</script>

<style lang="scss" scoped>
.custom-button {
    border: 0;
    @include flex();
    padding: 10px 24px;
    margin: 0.6rem auto;
    border-radius: $default-radius;
    @include transition();
    background: transparent;
    @include box-shadow(
        (
            5px 5px 9px rgba($dark-shadow, 0.4),
            -5px -5px 9px rgba(255, 255, 255, 0.3)
        )
    );

    &:active,
    &.loading-button {
        @include box-shadow(
            (
                inset 5px 5px 9px rgba($dark-shadow, 0.4),
                inset -5px -5px 9px rgba(255, 255, 255, 0.3)
            )
        );
    }

    &:disabled {
        pointer-events: none;
        cursor: not-allowed;
    }

    .content {
        @include font-size(13px);
    }

    &.danger {
        background: $danger-color;
    }

    &.light {
        color: $primary-color;
        background: #fff;
        border: 1px solid rgba($primary-color, 0.35);

        .loading {
            .square {
                background-color: $primary-color;
            }
        }
    }
}
</style>
