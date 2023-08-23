<script lang="ts">
	import { Categories } from '../../stores/budgetStore';
	import { addBudgetItem, getDefaultBudgetItem } from '../../stores/budgetStore';
	import BudgetList from './BudgetList.svelte';

	let budgetItem: import('../../stores/budgetStore').BudgetItem = getDefaultBudgetItem();

	let categories = Object.values(Categories);

	const handleSubmit = () => {
		addBudgetItem(budgetItem);
		console.log(budgetItem);

		budgetItem = getDefaultBudgetItem();
	};
</script>

<form
	class="rounded-4 w-full border-2 border-indigo-500 p-4 md:w-2/6"
	on:submit|preventDefault={handleSubmit}
>
	<div class="mb-2 flex items-center justify-between">
		<label class="mb-2 font-bold" for="amount">Amount</label>
		<input class="w-6/12 p-2" type="number" name="amount" bind:value={budgetItem.amount} />
	</div>

	<div class="mb-2 flex items-center justify-between">
		<label class="mb-2 font-bold" for="category">Category</label>
		<select class="w-6/12 p-2" name="category" bind:value={budgetItem.category}>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<div class="mb-2 flex items-center justify-between">
		<label class="mb-2 font-bold" for="location">Location</label>
		<input class="w-6/12 p-2" type="string" name="location" bind:value={budgetItem.location} />
	</div>

	<div class="mb-2 flex items-center justify-between">
		<label class="mb-2 font-bold" for="date">Date</label>
		<input class="w-6/12 p-2" type="date" name="date" bind:value={budgetItem.date} />
	</div>

	<div class="mt-2 flex flex-col">
		<label class="mb-2 font-bold" for="description">Description</label>
		<textarea name="description" bind:value={budgetItem.description} />
	</div>

	<div class="mt-4 flex justify-end">
		<button type="submit" class="btn btn-primary">Submit</button>
	</div>
</form>

<BudgetList />
