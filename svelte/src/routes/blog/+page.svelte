<script lang="ts">
	import Post from '../../components/Post.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ Posts } = data);
	$: posts = $Posts.data?.posts?.nodes ?? [];

	export const load = async () => {
		data.Posts.fetch();
	};
</script>

<h2 class="text-4xl font-bold">Hello World</h2>

{#if $Posts.fetching}
	<p>Fetching posts...</p>
{:else if $Posts.errors}
	{JSON.stringify($Posts.errors)}
{:else if posts.length === 0}
	<p>No posts found.</p>
{:else}
	<ul>
		{#each posts as post}
			<li>
				<Post
					url={post.link}
					slug={post.slug}
					description={post.content}
					image={post.featuredImage?.node.uri ?? null}
					imgMimeType={post.featuredImage?.node.mimeType ?? null}
					title={post.title}
				/>
			</li>
		{/each}
	</ul>
{/if}
