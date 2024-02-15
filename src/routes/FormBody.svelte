<script lang="ts">
    import FormRow from './FormRow.svelte'
    import type { AwardCategories } from '$lib/types'

    export let categories: AwardCategories

    const category_names = Object.keys(categories)
</script>

<form action="">

    {#each category_names as name}

        <FormRow category={ categories[name] } category_name={ name } />

    {/each}

    <button type="submit">Submit Questionaire</button>
</form>

<style>
    button {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px 16px;
    }
</style>