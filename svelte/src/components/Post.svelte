<!-- src/lib/components/Card/Card.svelte -->
<script lang="ts">
	import { ENV } from '../utils/getEnv';
	import { getExtensionFromMimeType } from '../utils/mime-types';

	export let title: string | null;
	export let image: string | null;
	export let content: string | null;
	export let link: string | null;
	export let imgMimeType: string | null;
	export let slug: string | null;

	let imageUrl = '';
	function removeTrailingSlash(str: string) {
		return str.replace(/\/+$/, '');
	}

	function removeSlug(url: string, slug: string) {
		const slugWithSlash = `${slug}/`;
		return url.replace(slugWithSlash, '');
	}

	$: {
		if (!image || !slug || !imgMimeType) {
			imageUrl = '';
		} else {
			const wpSpecificUrl = removeSlug(removeTrailingSlash(image), slug);
			const extension = getExtensionFromMimeType(imgMimeType);
			imageUrl = `${ENV.WP_URL}/wp-content/uploads${wpSpecificUrl}.${extension}`;
		}
	}
</script>

<div
	class="mx-4 mb-16 mt-4 flex w-full max-w-5xl flex-col items-center gap-2 rounded border bg-blue-300 p-4 shadow-lg"
>
	<h3 class="text-3xl font-bold"><a href={link}>{title}</a></h3>

	{#if image}
		<img src={imageUrl} alt={title} />
	{/if}

	<div>{@html content}</div>
</div>
