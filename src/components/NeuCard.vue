<template lang="pug">
    .neu-card(:class="{border: border}" @click="$emit('click')")
        slot
</template>

<script>
export default {
    props: {
        border: {
            type: Boolean,
            default: false
        }
    },
    name: "NeuCard"
};
</script>

<style lang="scss">
$border-width: 3px;
.neu-card {
    position: relative;
    padding: 1.5rem;
    border-radius: $default-radius;
    box-shadow: 9px 9px 16px rgba($dark-shadow, 0.45),
        -9px -9px 16px rgba(255, 255, 255, 0.35);

    &.border {
        box-shadow: 6px 6px 11px rgba($dark-shadow, 0.35),
            -6px -6px 11px rgba(255, 255, 255, 0.25);

        &::before {
            content: "";
            @include absolute(
                top $border-width left $border-width right $border-width bottom
                    $border-width
            );
            border-radius: $default-radius;
            box-shadow: inset 2px 2px 3px rgba($dark-shadow, 0.15),
                inset -2px -2px 3px rgba(255, 255, 255, 0.25);
        }
    }

    .header {
        @include font-size(18px);
        font-weight: $font-bold;
        text-transform: uppercase;
    }

    .body {
        padding: 2rem 1rem 0.5rem 1rem;
    }
}
</style>
