<template>
<div>
  <div class="row justify-content-center">
      <div class="card col-md-6">
        <div class="row">
          <div class="col-md-12">
             <div class="card-body">
                <h5 class="card-title">{{ account.title }}</h5>
                <p>Agência: {{ account.agency }} / Conta: {{ account.account_number }} </p>
                <p>Banco: {{ bank.title }} - {{ bank.code }}</p>
                <p>Valor inicial da conta: R$ {{ account.balance_initial }}</p>
                <p>Saldo: <span class="btn disabled">{{account.balance}}</span></p>
                <div class="card-body">
                  <a :href="'#/contas/' +  account.id + '/editar'" class="btn btn-primary">Editar</a>
                  <a href="" class="btn btn-danger" @click.prevent="remove(account.id)">Excluir</a>
                </div>
          </div>
          </div>
        </div>
      </div>
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
