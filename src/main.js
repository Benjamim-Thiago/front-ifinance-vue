// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResouce from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResouce)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'
//import 'materialize-css'

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
    let token ='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViMTk5YjMzNWYxZDRmOTBkMWFmODNjNGVjYzg5ODZiYWYzMzU5ZDU1ZjBjZmYwZGQ3NjAxZmQ5ZDkzOTljY2ZmZjhhNjExMzgyYzQxMDY5In0.eyJhdWQiOiIyIiwianRpIjoiNWIxOTliMzM1ZjFkNGY5MGQxYWY4M2M0ZWNjODk4NmJhZjMzNTlkNTVmMGNmZjBkZDc2MDFmZDlkOTM5OWNjZmZmOGE2MTEzODJjNDEwNjkiLCJpYXQiOjE1MzU3MzU3MzYsIm5iZiI6MTUzNTczNTczNiwiZXhwIjoxNTM1NzcxNzM2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.yvn-AVbUQdzTWMbMIQvMdpf9hbu3dE38F_fB8MxAhxy1H09Jhkwv5di22s_ocXfovPJ6trQlCjZd3CCpXcDX1K6wVhtcIUAUNqpCNPchBtSDQxkWRC9gRiNpnThIfoiXxD3YrhnVEhD1_DBaJM_FHgXSxUlO5L4tKiHGmv7JQhGOEZ7LLTSgzEP5WAZHVqZi1w3doiS6In5l-S6_aSACiwcEu2GVutfdbD06GtP_jlHAc5lLZZ87XrvvEDgeItPVRCP6AFjg38uKgqgvAv-9EOE9PK8d7WWVLGsEM8xzptswQMKspxQIOgvOmGN4QNZd3YiW-usaPn7siKUZRMKxUrWlXWsawJt62PrlbRSuiLcRBl8c4awP8WhABvC9jHdYoPfXvhrR-Iz6HZE8ohwz111wZ_yQw8wDiLpV6e5wRjo0WMOa_1D5lkXS0lnBQwdT0346vr_kA3S-2gt8nzXKUa_Zj7vF8o4stWkPAUsXMCcGG88fH7DWdNc6AxjOMC0WK_LKqB_aaWGI1xbui_HgJi_AVjy_l-fa6x-o3rdpf7ihYhomq45kiZ4DiuUTERa7DlD4G39yJ5ZLpP_q13x1LJW1rE3ROYmeC-LwWpyzl3SMMlE5gxS_y-PrYHa51tloCl4SlgpPI6n1OpCWrRJi7GGue5uQ1dbwHC84U4jdrwc'
    request.headers.set('Authorization', token)
    next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
    routes
})

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */

console.log(process.env.SERVER)
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    mounted: function() {
        $("select").material_select();
    }
})



