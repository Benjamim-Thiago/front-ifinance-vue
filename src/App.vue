<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary navbar-laravel">
        <div class="container">
            <a class="navbar-brand" href="#/">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#/">Financeiro</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#/contas">Conta</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="py-4">
        <div class="container">
          <router-view></router-view>
        </div>
    </main>
  </div>
</template>

<script>
import 'bootstrap'
export default {
  name: 'App',
  styles: [
    require('bootstrap/dist/css/bootstrap.min.css'),
    require('ionicons/dist/css/ionicons.min.css')
  ]
}

</script>

<style>

</style>
