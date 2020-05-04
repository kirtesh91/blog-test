<template lang="pug">
    .form-view.login
        .container
            .row.justify-content-center
                .col-12.col-lg-6.form-container
                    NeuCard.form-card
                        h2.header Login - BlogPost
                        .body
                            form(@submit.prevent="submit")
                                CustomInput(placeholder="Enter Username" v-model="details.username")
                                CustomInput(placeholder="Enter Password" type="password" v-model="details.password")
                                CustomButton(:is-loading="state.loading") Submit
                            p.text--center.mt--2.pointer(@click="Route('auth.register')")   New User? Register Here.
</template>

<script>
import { Validator } from "../../helpers/validators";

export default {
    data() {
        return {
            details: {
                username: null,
                password: null
            },
            state: {
                loading: false
            }
        };
    },
    methods: {
        submit() {
            const validate = Validator.validate({
                required: [this.details.username, this.details.password]
            });

            if (!validate) return;

            this.state.loading = true;

            this.$store
                .dispatch("auth/login", this.details)
                .then(() => {
                    this.Route("dashboard");
                })
                .finally(() => {
                    this.state.loading = false;
                });
        }
    },
    name: "Login"
};
</script>

<style lang="scss">
.form-view {
    .form-container {
        min-height: 100vh;
        @include flex();

        .form-card {
            margin: 1.5rem 0;
            width: 100%;
        }
    }
}
</style>
