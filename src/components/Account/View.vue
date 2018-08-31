<template>
   <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p>Agência: {{ account.agency }} / Conta: {{ account.account_number }} </p>
    <p>Banco: {{ bank.title }} - {{ bank.code }}</p>
    <p>Valor inicial da conta: R$ {{ account.balance_initial }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <p>Saldo: <span class="btn disabled">{{account.balance}}</span></p>
  </ul>
  <div class="card-body">
    <a :href="'#/contas/' +  account.id + '/editar'" class="btn btn-primary">Editar</a>
    <a href="" class="btn btn-danger" @click.prevent="remove(account.id)">Excluir</a>
  </div>
</div>
</template>

<script>
export default {
    name: 'account-view',
    methods: {
        remove: function() {
          this.$store.dispatch('removeAccount', this.$route.params.id).then(() => {
            this.$router.push('/contas')
          })
        }
    },
    computed: {
      account () {
        return this.$store.state.account.accountView
      },
      bank () {
        return this.account.bank || {}
      }
    },
    created() {
      this.$store.dispatch('getAccount', this.$route.params.id)
    }
}
</script>

<style>

</style>
