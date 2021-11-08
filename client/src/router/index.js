import Vue from "vue";
import VueRouter from "vue-router";
import auth from '../middleware/auth';
import log from '../middleware/log';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/login',
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      middleware: [log],
    },
  },
  {
    path: '/player/:id',
    name: "Player",
    component: () => import("../views/Player.vue"),
    meta: {
      middleware: [auth, log],
    },
  },
];

function nextFactory (context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;
  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

export default router;