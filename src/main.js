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
    let type_token ='Bearer '
    let token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ3ZjQ2N2Y2MmVhZjMxYTkxOWU0ZDVmNzllNDU5MWJjNTM2NjdjNTZlNmUwZGMxOTZhMDQyNGI3Y2U4OGQwY2I2Njk3NzE4OTRjYTZiMDI2In0.eyJhdWQiOiIyIiwianRpIjoiZDdmNDY3ZjYyZWFmMzFhOTE5ZTRkNWY3OWU0NTkxYmM1MzY2N2M1NmU2ZTBkYzE5NmEwNDI0YjdjZTg4ZDBjYjY2OTc3MTg5NGNhNmIwMjYiLCJpYXQiOjE1MzU5MTY2NjksIm5iZiI6MTUzNTkxNjY2OSwiZXhwIjoxNTM1OTUyNjY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jmdXcBFWHxVqUM0-Y496CL-4MCMOfkGg1-QFDhYkfMH7qeTZaWVZ0c-4bkOMPPFKiHJNGe-E4C9burOaj7B8GnvbG6HCtJe7r67taOsQaccveL9l-nLdCWc_N5STcV9jRNvx-j8ZDRUYtr_Rnzb9ZCltd16sfgaYaBnQdKS6fcA_aIiiJau5tk8URmoQCIi3ZKFYyz9AfG40pdBYKCYHhZZdmuvfW-KMovCry6FRwaisOGZjmlx01-TFkDiuZ1nFnGygrjrgbNzty4-dl3CD2GVXefZwkBueb_4MPkmPh2GT31I6qy9AB36_S8BDcxIvSdTrcF2WRNGhCthpjimeDfG2TuZNT-pn_VuYFzEGXW1weuLzg8CBJeonJ5h1I7EZegU_KVnw2zkS7EK-GahyHUz9-0xfiWDKWlXcCxisyzQzI2z0AlDK-dzt9wFDoJ3EkseqtDFcZlpox_epD2pTBN-NBXV63arQlfp-cpPwj1ofmMan7v3JJOOYh47ui9tTzrZzMG6mN98x0NB9Zo7PD8_O1GiOX6DoXv7X2Umvn0C_e3YPvjGR5TjIO6fky5r926YpLyEkPi17s1d7fGkimmFCBCqaVMMvxgcdHz_GQBcBDXp7FoO3G3ey8CPyx0-UofFMcMmqdHfweRdc1xmEyYjOWUji-HYKFIhEroHWiY0'
    request.headers.set('Authorization', type_token + token)
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
    watch: {
        '$route' (to, from) {
          this.$store.dispatch('clearRegistries')
        }
    },
    components: { App },
    template: '<App/>'
})



