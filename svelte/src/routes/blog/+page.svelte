<script lang="ts">
	import Post from '../../components/Post.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;
</script>

<h2 class="text-4xl font-bold">Hello World</h2>

{#await data.Posts.fetch()}
	<p>Loaded page</p>
{:then Posts}
	{#if Posts.fetching}
		<p>Fetching posts...</p>
	{:else if Posts.errors}
		{JSON.stringify(Posts.errors)}
	{:else if Posts.data?.posts?.nodes.length === undefined}
		<p>No posts found.</p>
	{:else if Posts.data?.posts?.nodes.length === 0}
		<p>No posts found.</p>
	{:else}
		<ul>
			{#each Posts.data?.posts?.nodes as post (post.title)}
				<li>
					<Post
						link={post.link}
						slug={post.slug}
						content={post.content}
						image={post.featuredImage?.node.uri ?? null}
						imgMimeType={post.featuredImage?.node.mimeType ?? null}
						title={post.title}
					/>
				</li>
			{/each}
		</ul>
	{/if}
{:catch error}
	<p>{error.message}</p>
{/await}
