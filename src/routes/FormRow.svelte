<script lang="ts">
    import type { AwardCategory } from '$lib/types'
    import { slugify } from '$lib/utils'

    export let category: AwardCategory
    export let category_name: string
</script>

<fieldset>
    <legend>{ category.full_name }</legend>
    <div>

        {#each category.nominees as nominee}

            <div>
                <input id={ slugify(nominee) } type="radio" name={ category_name } >
                <label for={ slugify(nominee) }>{ nominee }</label>
            </div>

        {/each}

    </div>
</fieldset>

<style>
    fieldset {
        margin: 2rem 0;
        border-style: solid;
        border-radius: 4px;
        border-width: 1px;
        border-color: #ddd;
        line-height: 2;
    }

    fieldset > div {
        padding: 0.5rem 1rem 1rem 1rem;
    }
</style>