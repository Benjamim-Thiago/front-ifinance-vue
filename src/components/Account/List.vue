<template>
  <div>
    <div class="col-md-12">
      <div class="row justify-content-center">
        <div class="row">
          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gerenciamento de Contas</h5>
              <p class="card-text">Contas</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="account in accounts.data" @click.prevent="goTo(account.id)">
                <a href="" >
                  {{ account.title }} &nbsp;
                  <small> - agência: {{ account.agency }} / conta: {{ account.account_number }}  / código do banco: {{ account.bank.code }} </small>
                </a>
              </li>
            </ul>
            <div class="card-body">
              <a href="#/contas/novo" class="btn btn-primary">Nova Conta</a>
            </div>
          </div>
          
        </div>
      </div>
    </div> 
  </div>
</template>




<script>
export default {
  name: 'accounts',
  methods: {
    goTo: function(id) {
      this.$router.push('/contas/' + id)
    }
  },
  computed: {
    accounts() {
      return this.$store.state.account.accountList
    }
  },
  created () {
    this.$store.dispatch('getAccounts')
  }
}
</script>

<style>
tbody tr {
  cursor: pointer
}
</style>
