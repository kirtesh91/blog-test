<template lang="pug">
    .blog-list
        .container
            .route-header
                BackButton
                h2.title
                    |   Blog List
            .list
                .blog-list-card-group
                    .blog-list-card-container(v-for="(blog, index) in blogs" :key="`ListCard${index}`")
                        NeuCard(border @click="routeBlog(blog)").blog-list-card.pointer
                            h6.author {{blog.author}}
                            h3.title  {{blog.title}}
                            p.description   {{blog.description.substr(0, 78)}}...
</template>

<script>
export default {
    computed: {
        blogs() {
            return this.$store.getters["blog/blogs"];
        }
    },
    methods: {
        routeBlog(blog) {
            this.Route("blog.details", {
                blogId: blog.blogId,
                title: this.$kebab(blog.title)
            });
        }
    },
    created() {
        if (!this.blogs.length) {
            this.$store.dispatch("blog/retrieve");
        }
    },
    name: "BlogList"
};
</script>

<style lang="scss" scoped>
.blog-list {
    .list {
        padding: 2rem 0;
    }
}
.blog-list-card-group {
    @include flex();

    .blog-list-card-container {
        margin: 1rem;
        flex: 1;
        min-width: 30%;
    }

    @media only screen and (max-width: 600px) {
        .blog-list-card-container {
            min-width: 100%;
            width: 100%;
        }
    }

    .blog-list-card {
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
    }
}
</style>
