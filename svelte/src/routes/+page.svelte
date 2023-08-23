<script lang="ts">
	let name: String;

	let pokemonResponse: String;

		const getPokemon = async () => {
		console.log(name);
		const res = await fetch(`http://127.0.0.1:8081?name=${name}`);
		pokemonResponse = await res.json();
	};

</script>

<form
	class="rounded-4 w-full border-2 border-indigo-500 p-4 md:w-2/6"
	on:submit|preventDefault={getPokemon}
>
	<div class="mb-2 flex items-center justify-between">
		<label class="mb-2 font-bold" for="location">Enter your name</label>
		<input class="w-6/12 p-2" type="string" name="location" bind:value={name} />
	</div>

		<div class="mt-4 flex justify-end">
		<button type="submit" class="btn btn-primary">Submit</button>
	</div>

</form>

{#if pokemonResponse}
<div class="mt-4 flex flex-col">
	<p>{pokemonResponse}</p>
</div>
{/if}

