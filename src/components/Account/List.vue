<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="card col-md-8">
            <div class="card-body">
              <h5 class="card-title">Gerenciamento de Contas</h5>
              <a href="#/contas/novo" class="btn btn-primary float-right">Nova Conta</a>
              <search resource="accounts"></search>
            </div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Descrição</th>
                  <th scope="col">Agência</th>
                  <th scope="col">Conta</th>
                  <th scope="col">Cod. Banco</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="account in accounts.data" @click.prevent="goTo(account.id)">
                  <td>{{account.title}}</td>
                  <td>{{account.agency}}</td>
                  <td>{{account.account_number}}</td>
                  <td>{{account.bank.code}}</td>
                </tr>
              </tbody>
            </table>
            <pagination totalPerPage="10" resource="accounts"></pagination>
          </div>
          
        </div> 
  </div>
</template>
<script>
import Pagination from './../SharedComponents/Pagination'
import Search from './../SharedComponents/Search'
export default {
  name: 'accounts',
  components:{
      'pagination': Pagination,
      'search': Search
    },
  methods: {
    goTo: function(id) {
      this.$router.push('/contas/' + id)
    }
  },
  computed: {
    accounts() {
      return this.$store.state.pagination.getList
    }
  }
}
</script>

<style>
tbody tr {
  cursor: pointer
}
</style>
