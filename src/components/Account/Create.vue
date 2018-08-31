<script>
export default {
     name: 'account-create',
  data () {
    return {
      sub_title: 'Criando conta',
      account: {
        'balance': 0
      }
    }
  },
  template: require('./form.html'),
  computed: {
    banks() {
      return this.$store.state.bank.bankList
    }
  },
  created() {
    this.$store.dispatch('getBanks')
  }
}

</script>

