<script>
export default {
  name: 'account-edit', 
  data () {
    return {
      flag:1,
      sub_title: 'Editando conta',
      account: {
        balance: 0
      }
    }
  },
  template: require('./form.html'),

  methods:{
    save() {
      this.$store.dispatch('updateAccount', this.account).then(() => {
        this.$router.push('/contas')
      })
      //console.log(this.account)
    }
  },
  computed: {
    accountFind () {
      this.account = this.$store.state.account.accountView
    },
    banks() {
      return this.$store.state.bank.bankList
    },
    bank () {
      return this.account.bank || {}
    }
  },
  created(){
    this.$store.dispatch('getBanks')
    this.$store.dispatch('getAccount', this.$route.params.id)
  }
}
</script>

