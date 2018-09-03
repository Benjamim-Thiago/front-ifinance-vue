import Vue from 'vue'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

let getToken = function() {
    let token = localStorage['token']
    if(!token) {
        token = {}
        return token
    }
    return JSON.parse(token)

}

let login = function (router) {
    router.push('./login')
}

export default {
    check_empty_token: function(router) {
        let token = getToken()
        if(!token.access_token) {
            login(router)
        }
    },
    check_auth: function(router){
        let token = getToken()
        Vue.http.interceptors.push((request, next) => {
            request.headers.set('Authorization', 'Bearer ' + token.access_token)
            next(res => {
                if(res.status === 0 || res.status === 401){
                    login(router)
                }
            })
        })

        //Parei 6:00
    }
}