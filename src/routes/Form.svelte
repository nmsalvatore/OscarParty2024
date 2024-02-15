<script lang="ts" >
    import FormHeading from './FormHeading.svelte'
    import FormBody from './FormBody.svelte'
    import type { AwardCategories } from '$lib/types'

    export let categories: AwardCategories
</script>

<div class="form-container">
    <FormHeading />
    <FormBody { categories } />
</div>