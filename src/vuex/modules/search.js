import Vue from 'vue'

export default {
    state: {
        getListSearch: []
    },
    mutations: {
        updateList (state, data) {
            state.getListSearch = data
        }
    },
    actions: {
        clearRegistries (context, config) {
            context.commit('updateList', [])
        },
        getRegistries (context, config) {
            if(!config.page) {
                config.page  = 1
            }

            if(!config.limit) {
                config.limit  = 200
            }

            Vue.http.get('api/' + config.resource + '/' + config.search).then(response => {
                console.log(config.search)
                context.commit('updateList', response.data)
            })
        }
    }
}