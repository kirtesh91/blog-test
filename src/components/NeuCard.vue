<template lang="pug">
    .nue-card
        slot
</template>

<script>
export default {
    name: "NueCard"
};
</script>

<style lang="scss">
.nue-card {
    padding: 1.5rem;
    border-radius: $default-radius;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
        -9px -9px 16px rgba(255, 255, 255, 0.5);

    .header {
        @include font-size(20px);
        font-weight: $font-bold;
        text-transform: uppercase;
    }

    .body {
        padding: 2rem 1rem 0.5rem 1rem;
    }
}
</style>
