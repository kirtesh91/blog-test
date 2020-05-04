export const state = {
    token: localStorage.getItem("access_token") || null,
    profile: null,
    meta: {
        verified: localStorage.getItem("access_token") ? "loading" : false
    }
};
