<script lang="ts">
	import { budgets, deleteBudgetItem } from '../../stores/budgetStore';
</script>

<section class="m-4 w-full p-4">
	<table class="w-full">
		<thead>
			<tr class="border-b-4 border-b-indigo-500">
				<th>Id</th>
				<th>Date</th>
				<th>Amount</th>
				<th>Category</th>
				<th>Location</th>
				<th>Description</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each $budgets as budget}
				<tr class="border-b-2 border-b-indigo-500">
					<td class="text-center">{budget.id}</td>
					<td class="text-center">{budget.date}</td>
					<td class="text-center">{budget.amount}</td>
					<td class="text-center">{budget.category}</td>
					<td class="text-center">{budget.location}</td>
					<td class="text-center">{budget.description}</td>
					<td class="btn btn-pure text-center">
						<button on:click={() => deleteBudgetItem(budget.id)}>Delete</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
