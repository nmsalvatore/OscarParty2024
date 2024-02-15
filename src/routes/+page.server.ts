import type { PageServerLoad } from './$types'
import categories from '$lib/nominees'

export const load = (async () => {
    return { categories }
}) satisfies PageServerLoad