import Dashboard from "../views/Dashboard";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import AddBlog from "../views/blog/AddBlog";
import BlogList from "../views/blog/BlogList";
import Blog from "../views/blog/Blog";

export const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/auth/login",
        name: "auth.login",
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: "/auth/register",
        name: "auth.register",
        component: Register,
        meta: {
            guest: true
        }
    },
    {
        path: "/blog/add",
        name: "blog.add",
        component: AddBlog
    },
    {
        path: "/blog/list",
        name: "blog.list",
        component: BlogList
    },
    {
        path: "/blog/:blogId/:title",
        name: "blog.details",
        props: true,
        component: Blog
    }
];
