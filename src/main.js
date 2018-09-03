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
import LoginInterceptors from './components/Login/interceptors'


Vue.http.options.root = process.env.SERVER

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
    routes
})

LoginInterceptors.check_empty_token(router)
LoginInterceptors.check_auth(router)

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */

console.log(process.env.SERVER)
new Vue({
    el: '#app',
    router,
    store,
    watch: {
        '$route' (to, from) {
          this.$store.dispatch('clearRegistries')
        }
    },
    components: { App },
    template: '<App/>'
})



