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
    let token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmOTM3OThkMzdjOTMxNmZmMjE3N2Y4NDZkODI1YjIzY2I4YmZhOGRiMWY4NDZiN2Y4ODM0YmVmNjYxY2U5ZmVkYTY0OWQ3NGQ5NTczZDQ3In0.eyJhdWQiOiIyIiwianRpIjoiNGY5Mzc5OGQzN2M5MzE2ZmYyMTc3Zjg0NmQ4MjViMjNjYjhiZmE4ZGIxZjg0NmI3Zjg4MzRiZWY2NjFjZTlmZWRhNjQ5ZDc0ZDk1NzNkNDciLCJpYXQiOjE1MzU4NTQ2NTQsIm5iZiI6MTUzNTg1NDY1NCwiZXhwIjoxNTM1ODkwNjUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jTCSyh8QdL_dlXIvMR6qOion6_-Tvu1KnPOhyLyXdLfjSfoQY98es3oRAvqB58IPf9tJhJaeuLQZCO4efcbL5VXUXtu1ABn1HtaExmUld2drAv5KuzRcQngzefF7ITW8ptaGZZ0hV3R9OvrCfYB0F19PWK4wGZ0oG9MhsoAgMJBQG6YgC-Q7apRc-fDEj3yyrmu7Lgp9PhNi6Z0o24rR4dGxF1dM_BNqHB26E5zAm57n6jDtI0LLyGV69p6Xv4y1BrwXiHtEC4Lt_bJ4B6_7XUZF6ufUO6H9jMvfxzYaCgtttsS05zmD__vhxDbK5AcxlO8TP_U6sMR0Jd8YzGibJsCOmad41A7vx1ydhzlvsHPeWlXP-UjhRnTQRr-ati3IeHeW9gYdQl_YtbDbu9D9HVskaHGUc6TeGy2nPHN3GPQiGEQp8Y6zVXx8efqLgAmLKmJjw7Ag4qpRkcvNRFatr28xAOJRNIfuoaaoBq59rbTQRIXEL8NVgdOidrxrkJQ2o-03aFx0QOk7z8t7NFMtVEhpUnUI2BE503f0mLqLLeNWgW0UbnTgciFXnW5BvZG1Pp6iuV3POyxhcJ2JFVGu0n_w447pRB3Dl6c5DlKKMk30xI_D3LG4onFGcEWSTh11WSIY6I8DsiQUkN5Tf2ilqDYW2sLRyL8xBxGJv17Pes8'
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



