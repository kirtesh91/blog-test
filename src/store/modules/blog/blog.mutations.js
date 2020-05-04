export const mutations = {
    retrieve(state, blogs) {
        state.blogs = blogs;
    },
    store(state, blog) {
        state.blogs.unshift(blog);
    }
};
