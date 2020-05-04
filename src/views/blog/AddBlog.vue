<template lang="pug">
    .form-view.add-blog
        .container
            .route-header
                BackButton
                h2.title
                    |   Add Blog
            .row.justify-content-center
                .col-12.col-lg-6.form-container
                    NeuCard.form-card
                        h2.header Add Blog - BlogPost
                        .body
                            form(@submit.prevent="submit")
                                CustomInput(placeholder="Author Name" v-model="details.author")
                                CustomInput(placeholder="Enter Title" v-model="details.title")
                                textarea(placeholder="Enter Description" v-model="details.description")
                                CustomButton(:is-loading="state.loading") Submit
</template>

<script>
import { Validator } from "../../helpers/validators";

export default {
    data() {
        return {
            details: {
                author: null,
                title: null,
                description: null
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
                    this.details.author,
                    this.details.title,
                    this.details.description
                ]
            });

            if (!validate) return;

            this.state.loading = true;

            this.$store
                .dispatch("blog/store", this.details)
                .then(() => {
                    this.Route("dashboard");
                })
                .finally(() => {
                    this.state.loading = false;
                });
        }
    },
    name: "AddBlog"
};
</script>

<style lang="scss" scoped>
.form-container {
    min-height: unset;

    .form-card {
        margin: 3rem 0;
    }
}
</style>
