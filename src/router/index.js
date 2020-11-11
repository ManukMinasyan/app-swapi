import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import People from "../views/People.vue";
import PeopleShow from "../views/PeopleShow.vue";
import auth from "../middleware/auth";
import loggedIn from "../middleware/loggedIn";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            middleware: [loggedIn]
        }
    },
    {
        path: "/people",
        name: "People",
        component: People,
        meta: {
            middleware: [auth]
        }
    },
    {
        path: "/people/:id",
        name: "PeopleShow",
        component: PeopleShow,
        meta: {
            middleware: [auth]
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function nextFactory (context, middleware, index) {
    const subsequentMiddleware = middleware[index]
    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index+1)

        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {

    if (to.meta.middleware) {
        console.log(to.meta.middleware)
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = {
            from,
            next,
            router,
            to,
        }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next()
})

export default router;