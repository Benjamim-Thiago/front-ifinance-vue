<template>
  <div>
    <div class="row justify-content-center">
        <div class="card col-md-12">
          <div class="card-body">
            <strong class="card-title">Gerenciamento de Bancos</strong>
            <p class="card-text">Seus Bancos</p>
          </div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Banco</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bank in banks.data">
                <td>{{bank.code}}</td>
                <td>{{bank.title}}</td>
              </tr>
            </tbody>
          </table>
          <pagination totalPerPage="5" resource="banks"></pagination>
        </div>
      </div>      
  </div>
</template>
<script>
  import Pagination from './../SharedComponents/Pagination'
  export default {
    name: 'banks',
    components:{
      'pagination': Pagination
    },
    computed: {
      banks() {
        return this.$store.state.pagination.getList
      }
    }
}
</script>

<style>

</style>
