const c1 = () => import(/* webpackChunkName: "page--src-templates-projet-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\tp-gridsome\\src\\templates\\Projet.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\tp-gridsome\\src\\pages\\Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\tp-gridsome\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\tp-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\nicol\\Documents\\MMI 2\\Intégration\\tp-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/projets/test/",
    component: c1
  },
  {
    path: "/projets/autretest/",
    component: c1
  },
  {
    path: "/project/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
