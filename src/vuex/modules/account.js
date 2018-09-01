import Vue from 'vue'

export default {
  state: {
    accountList: [],
    accountView: {}
  },
  mutations: {
    updateAccountList (state, data) {
      state.accountList = data
    },
    updateAccountView (state, data) {
      state.accountView = data
    }
  },
  actions: {
    getAccounts (context) {
      Vue.http.get('api/accounts').then(response => {
        context.commit('updateAccountList', response.data)
      })
    },
    getAccount (context, id) {
      Vue.http.get('api/accounts/' + id).then(response => {
        context.commit('updateAccountView', response.data)
      })
    },
    newAccount (context, data) {
        Vue.http.post('api/accounts', data)
    },
    updateAccount (context, params) {
      let d = {
        title: params.title,
        balance: params.balance,
        balance_initial: params.balance_initial,
        bank_id: params.bank_id,
        agency: params.agency,
        account_number: params.account_number
      }
      Vue.http.put('api/accounts/' + params.id, d)
    },
    removeAccount (context, id) {
      Vue.http.delete('api/accounts/' + id)
    }
  }
}
