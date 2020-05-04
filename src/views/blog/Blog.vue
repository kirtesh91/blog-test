<template lang="pug">
    .blog-list
        .container(v-if="blog")
            .route-header
                BackButton
                h2.title
                    |   {{blog.title.substr(0,72)}}
            .neu-card.border.blog-card
                .like-btn
                    i.fas.fa-heart(:class="{active: liked}" @click="like")
                    span    {{blog.LikesCount}}
                h6.author {{blog.author}}
                h3.title  {{blog.title}}
                p.description   {{blog.description}}
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            blog: null
        };
    },
    methods: {
        like() {
            this.$store.dispatch("blog/like", this.blogId).then(response => {
                this.blog.LikesCount++;
                this.blog.likes = [response.data];
            });
        }
    },
    computed: {
        blogId() {
            return this.$route.params.blogId;
        },
        liked() {
            return !!this.blog.likes.length;
        }
    },
    created() {
        axios.get(`/blog/${this.blogId}`).then(response => {
            this.blog = response.data;
        });
    },
    name: "Blog"
};
</script>

<style lang="scss" scoped>
.blog-card {
    position: relative;
    margin: 3rem 1rem 1rem 1rem;
    padding: 1.5rem;
    min-height: 156px;

    .title {
        @include font-size(17px);
        margin-bottom: 0.8rem;
    }

    .author {
        margin-bottom: 0.4rem;
        font-weight: 500;
        @include font-size(12px);

        i {
            margin-right: 0.3rem;
            color: #aaa;
        }
    }

    .like-btn {
        @include flex(flex-right);
        @include absolute(top 1.5rem right 1.5rem);

        i {
            @include transition();
            @include font-size(22px);
            color: rgba($font-color, 0.8);
            cursor: pointer;
            margin-right: 0.7rem;

            &.active {
                color: #e74b6e;
            }
        }
    }
}
</style>
