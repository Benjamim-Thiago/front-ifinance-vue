<template>
<div>
    <div class="form-group col-md-6">
        <label for="">Pesquisar</label>
        <input type="text" v-model="search" class="form-control">
    </div>
</div>

</template>

<script>

export default {
    name: 'pagination',
    props: [
        'resource'
    ],
    data: function() {
        return {
            search: ''
        }
    },
    computed: {
        registries() {
            
            return this.$store.state.search.getListSearch
        }

    },
    methods: {
        
    },
    created() {
        this.$store.dispatch('getRegistries', {resource: this.resource, search: this.search})
    }
}
</script>

<style>

</style>
