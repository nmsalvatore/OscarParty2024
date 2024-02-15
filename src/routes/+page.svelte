<script lang="ts">
    import Form from './Form.svelte'

    export let data

    const categories = data.categories
</script>

<main>
    <Form { categories } />
</main>

<style>
    main {
        padding: 1rem;
    }
</style>