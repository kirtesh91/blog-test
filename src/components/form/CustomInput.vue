<template lang="pug">
    .custom-input.text--center
        span.label(v-if="labeled") {{placeholder}}
        input(
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="val"
            @input="input"
            @keypress="isValidNumber"
            :maxlength="max"
            @blur="blur"
            ref="CustomInput"
            :class="{ labeled: labeled}"
        )
        transition(name="fade" mode="out-in" appear)
            span.bottom-message.error-message.animate-lightspeed(v-if="hasError ")  Some Error Occurred!
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "text"
        },
        name: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number],
            default: null
        },
        isNumber: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 255
        },
        hasError: {
            type: Boolean,
            default: false
        },
        labeled: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            val: this.value
        };
    },
    watch: {
        value(newVal) {
            this.val = newVal;
        },
        focus(val) {
            if (val) this.focusInput();
        }
    },
    methods: {
        input(evt) {
            this.val = evt.target.value;
            this.$emit("input", this.val);
        },
        blur() {
            this.$emit("blur");
        },
        isValidNumber(evt) {
            if (this.isNumber) {
                evt = evt ? evt : window.event;
                var charCode = evt.which ? evt.which : evt.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            }
            return true;
        },
        focusInput() {
            this.$refs.CustomInput.focus();
        }
    },
    mounted() {
        if (this.focus) this.focusInput();
    },
    name: "CustomInput"
};
</script>

<style lang="scss">
.custom-input {
    position: relative;
    margin: 0 0 2rem 0;

    &:last-child {
        margin-bottom: 0;
    }

    .label {
        @include absolute(top 0.85rem left 1.2rem);
        @include font-size(10px);
        z-index: 1;
        color: #888;
    }

    input {
        padding: 1rem 1.2rem;
        border-radius: 6px;
        width: 100%;
        border: 0;
        position: relative;
        background: transparent;
        @include transition(0.15);
        box-shadow: inset 6px 6px 10px rgba($dark-shadow, 0.25),
            inset -6px -6px 10px rgba(255, 255, 255, 0.25);

        &.extended {
            padding-bottom: 2.25rem;
        }

        &.labeled {
            padding-top: 2.25rem;
        }

        &:disabled {
            background: #f5f5f5;
        }

        &:focus {
            box-shadow: 6px 6px 10px rgba($dark-shadow, 0.25),
                -6px -6px 10px rgba(255, 255, 255, 0.25);
        }
    }

    .bottom-message {
        @include absolute(bottom 0.75rem left 1.2rem);
        @include font-size(10px);
        z-index: 1;
        color: #555;

        &.error-message {
            color: $danger-color;
        }
    }
}
</style>
