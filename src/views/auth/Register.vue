<template lang="pug">
    .form-view.register
        .container
            .row.justify-content-center
                .col-12.col-lg-6.form-container
                    NeuCard.form-card
                        h2.header Register - BlogPost
                        .body
                            form(@submit.prevent="submit")
                                CustomInput(placeholder="Enter Name" v-model="details.name")
                                CustomInput(placeholder="Enter Username" v-model="details.username")
                                CustomInput(placeholder="Enter Password" type="password" v-model="details.password")
                                CustomButton(:is-loading="state.loading") Submit
                            p.text--center.mt--2.pointer(@click="Route('auth.login')")   Already Registered? Login Here.
</template>

<script>
import { Validator } from "../../helpers/validators";

export default {
    data() {
        return {
            details: {
                name: null,
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
                required: [
                    this.details.name,
                    this.details.username,
                    this.details.password
                ]
            });

            if (!validate) return;

            this.state.loading = true;

            this.$store
                .dispatch("auth/register", this.details)
                .then(() => {
                    this.Route("auth.login");
                    this.$toasted.success(
                        "Registered Successfully! You should Login Now."
                    );
                })
                .finally(() => {
                    this.state.loading = false;
                });
        }
    },
    name: "Register"
};
</script>
