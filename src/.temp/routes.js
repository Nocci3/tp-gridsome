const c1 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\node_modules\\tp-gridsome\\src\\pages\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\node_modules\\tp-gridsome\\src\\pages\\About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\node_modules\\tp-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\node_modules\\tp-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/project/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
