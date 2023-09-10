<script lang="ts">
	import type { PokemonData } from '../interfaces/pokemon.interface';

	let name: String;
	let isLoading = false;

	let pokemonResponse: PokemonData[];

	$: message = () => {
		console.log('getting msg', pokemonResponse);
		switch (pokemonResponse?.length) {
			case undefined:
				return '';
			case 5:
				return `Found ${pokemonResponse.length} recommended Pokemons`;
			default:
				return `Found only ${pokemonResponse.length} recommended pokemons, others hid during our search`;
		}
	};

	const getPokemon = async () => {
		isLoading = true;
		try {
			const res = await fetch(`http://127.0.0.1:8081?name=${name}`);
			pokemonResponse = await res.json();
			console.log(pokemonResponse);
		} catch (error) {
			pokemonResponse = [];
		} finally {
			isLoading = false;
		}
	};

	const goToPokemonDetails = (pokemon: PokemonData) => {
		window.open(`https://www.pokemon.com/us/pokedex/${pokemon.name}`, '_blank');
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
		<button type="submit" class="btn btn-primary" disabled={isLoading || !name}>
			Submit
			{#if isLoading}
				<div
					class="text-primary inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
					role="status"
				>
					<span
						class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
						>Loading...</span
					>
				</div>
			{/if}
		</button>
	</div>
</form>

{#if pokemonResponse}
	<h3 class="text-2xl text-indigo-700">Hello {name}!</h3>
	<p>This pokemons might be fun for you to try:</p>

	<p>{message()}</p>
	<div class="mt-4 flex">
		{#each pokemonResponse as pokemon}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="m-4 flex-col items-center justify-center rounded-full border-4 bg-gradient-to-b from-white to-red-500 p-4"
				role="button"
				tabindex="0"
				on:click={() => goToPokemonDetails(pokemon)}
			>
				<p class="flex justify-center capitalize">{pokemon.name}</p>
				<img src={pokemon.sprites.front_default} alt="{pokemon.name} from the front" />
			</div>
		{/each}
	</div>
{/if}
