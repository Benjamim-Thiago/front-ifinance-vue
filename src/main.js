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
    let token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA3M2ZiMWU4ZjAxNjkyMWY2OWVkNjI5ZTk2MDdhOTRlNzdhNGJmYTMyZDIzNTAyMTRjMjY5OWE0ODVlNzQyODRkMzU1M2E0MmFmM2VlODA1In0.eyJhdWQiOiIyIiwianRpIjoiMDczZmIxZThmMDE2OTIxZjY5ZWQ2MjllOTYwN2E5NGU3N2E0YmZhMzJkMjM1MDIxNGMyNjk5YTQ4NWU3NDI4NGQzNTUzYTQyYWYzZWU4MDUiLCJpYXQiOjE1MzU4MDkwMjQsIm5iZiI6MTUzNTgwOTAyNCwiZXhwIjoxNTM1ODQ1MDI0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Rj23YU8wcElry7eUyJvn2lRWI4qKXYSuvk07S0u8a7HsmQ6ULr9gmYT9WuAyTdHPuVdWE9h_fLW9eHTOVRuXo0k2Uge0dtim81yPEnlA51JXYRdpzHz41sl-AWi96T--lX6JXbkSH7AGOuHYhKBQcRfzUiHIsq660EZqXj43GyZ255zFmYZ4WpaNyZ0iwoDO89M3sDzxASAuYiCV7gf4vIpp8CY4iGNRPIaf_FEIJzHtppWH4zddSMP5ZQbxkT59Z3AVNasc0fRAwBVVePw2SocPazGcIct1RqEXpUSwaguLYDMXJz8YivUn7aozrauPJMqLrFPs-GfXhdrturav-VY2gyfNMyBa-AsQPn5fuRsRvrU6-fi7uC3K7ZflmPjS3N0qcDGqiyPeR8vjR9wkuaLOZG_cdrWsgO6ukHsY7jOBXwCHBNgCLLhQxEV991V60iDS9wKAcPDfytFXfO2PDrQR9p7L701zfmQTWrmqKnbljNs7ueTnuyOJPLssb36BgdXUtxUEWP7XhbIPbZpIIdr2s9AYiWoYb0a995ZSWXWWnIWFC3zdN9UWHfaPIMXbqMT-_FvsDpNmfNy9KQJlAIfT8AaBeA0oYA0LmPrDylyNRW1oB63NtyR16vJ5SAy1U2_IqUIzsBAdnSEiih_ocETqX8VYrTDNocvwmZYtFE4'
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
    components: { App },
    template: '<App/>'
})



