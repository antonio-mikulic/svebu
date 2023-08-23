import { get, writable } from 'svelte/store';
import { getRandomId } from '../utils/getRandomId';
import { browser } from '$app/environment';

const getFromCache = (): BudgetItem[] => {
	const json = localStorage.getItem('budgets');

	return json ? JSON.parse(json) : [];
};

export const budgets = writable<BudgetItem[]>((browser && getFromCache()) || []);

export const addBudgetItem = (item: BudgetItem) => {
	budgets.update((items) => [...items, item]);

	setToCache();
};

export const getBudgetItem = (id: string) => {
	return get(budgets).find((i) => i.id === id);
};

export const getDefaultBudgetItem = (): BudgetItem => {
	return {
		id: getRandomId(),
		amount: 0,
		category: Categories.Commute,
		location: '',
		date: new Date().toString(),
		description: ''
	};
};

export const deleteBudgetItem = (id: string) => {
	budgets.update((items) => items.filter((i) => i.id !== id));

	setToCache();
};

const setToCache = (): void => {
	localStorage.setItem('budgets', JSON.stringify(get(budgets)));
};

export interface BudgetItem {
	id: string;
	amount: number;
	location: string;
	description: string;
	category: Category;
	date: string;
}

export const Categories = {
	Paycheck: 'Paycheck',
	Home: 'Home',
	Commute: 'Commute',
	Food: 'Food',
	EatingOut: 'EatingOut',
	Entertainment: 'Entertainment'
} as const;

export type Category = keyof typeof Categories;
