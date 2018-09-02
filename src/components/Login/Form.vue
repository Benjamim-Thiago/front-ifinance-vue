<template>
  <div class="container" id="login">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header" style="background-color:#424345; color: #FFFF">Login do Sistema</div>

                <div class="card-body">
                    <form aria-label="" @submit.prevent="login">
                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input v-model="user.username" id="email" type="email" class="form-control" placeholder="email@dominio" required autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>

                            <div class="col-md-6">
                                <input v-model="user.password" id="password" type="password" class="form-control" name="password" placeholder="senha" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Entrar
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Vue from 'vue'
    import { CONFIG } from './../../config'
    export default {
    name: 'login',
    data: function() {
        return {
            user: {}
        }
    },
    methods: {
        login: function() {
            let data = {
                grant_type: 'password',
                client_id: CONFIG.client_id,
                client_secret: CONFIG.client_secret,
                username: this.user.username,
                password: this.user.password,
                scope: ''
            }
                
            Vue.http.post('oauth/token', data).then(res => {
                localStorage['token'] = JSON.stringify(res.body)
                this.$router.push('/contas')
            })
        }
    }
}
</script>

<style>

</style>
