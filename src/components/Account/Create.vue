<script>
export default { 
  name: 'account-create',
  data () {
    return {
      flag:0,
      sub_title: 'Criando conta',
      account: {
        balance: 0
      }
    }
  },
  template: require('./form.html'),
  methods:{
    save() {
      this.$store.dispatch('newAccount', this.account).then(() => {
        this.$router.push('/contas')
      })
      //console.log(this.account)
    }
  },
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

