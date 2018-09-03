<template>
<div>
    <nav aria-label="..." class="row justify-content-center">
    <ul class="pagination pagination-sm">
        <li class="page-item" :class="{active: n == active}" v-for="n in parseInt(total)">
            <a class="page-link" href="#" @click.prevent="navigate(n)">{{n}}</a>
        </li>
    </ul>
    </nav>
    <p>Exibindo página {{active}} de {{total}}, total de {{totalRegistries}} registros.</p>
</div>

</template>

<script>

export default {
    name: 'pagination',
    props: [
        'totalPerPage',
        'resource'
    ],
    data: function() {
        return {
            active: 1
        }
    },
    computed: {
        registries() {
            return this.$store.state.pagination.getList
        },
        total() {
            return this.registries.last_page || 1
        },
        totalRegistries() {
            return this.registries.total || 0
        }

    },
    methods: {
        navigate: function(n) {
            this.active = n
            let config  = {
                limit: this.totalPerPage,
                resource: this.resource,
                page: n
            }
            this.$store.dispatch('getRegistries', config)
        }
    },
    created() {
        this.$store.dispatch('getRegistries', {resource: this.resource, limit: this.totalPerPage})
    }
}
</script>

<style>

</style>
