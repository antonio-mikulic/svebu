<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	console.log($page);

	interface Route {
		title: string;
		path: string;
	}

	const routes: Route[] = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'About',
			path: '/about-me'
		},
		{
			title: 'Store',
			path: '/store'
		},
		{
			title: 'Budget',
			path: '/budget'
		}
	];
</script>

<div
	class="flex h-screen w-full flex-col items-center bg-gradient-to-b from-sky-300 via-blue-500 to-indigo-700 text-black"
>
	<nav class="m-2 flex space-x-4">
		{#each routes as route}
			<a class="btn btn-pure" class:active={$page.route.id == route.path} href={route.path}
				>{route.title}</a
			>
		{/each}
	</nav>

	<slot />
</div>
