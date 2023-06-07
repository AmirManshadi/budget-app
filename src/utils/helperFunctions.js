// Libraries
import { toast } from "react-toastify"

// development functions
export function waait() {
	return new Promise(res => setTimeout(res, Math.random() * 1000))
}

// fetch from local storage
export function fetchData(key) {
	return JSON.parse(localStorage.getItem(key))
}

// remove from local storage
export function deleteData(key) {
	return localStorage.removeItem(key)
}

// add new budget to existing budgets in local storage
export function createBudget({ name, amount }) {
	const newBudget = {
		id: crypto.randomUUID(),
		name: name,
		amount: +amount,
		createdAt: Date.now(),
	}
	const existingBudgets = fetchData("budgets") ?? []
	return localStorage.setItem(
		"budgets",
		JSON.stringify([...existingBudgets, newBudget])
	)
}

// add new budget to existing budgets in local storage
export function createExpense({ name, amount, budgetID }) {
	const newExpense = {
		id: crypto.randomUUID(),
		name: name,
		amount: +amount,
		createdAt: Date.now(),
		budgetID: budgetID,
	}
	const existingExpenses = fetchData("expenses") ?? []
	return localStorage.setItem(
		"expenses",
		JSON.stringify([...existingExpenses, newExpense])
	)
}

// toast api
export function toaster(type, message) {
	return toast[type](message, {
		position: "bottom-left",
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	})
}

// formatting
export function formatCurrency(amount) {
	return amount.toLocaleString(undefined, {
		style: "currency",
		currency: "USD",
	})
}

export function formatPercentage(number) {
	return number.toLocaleString(undefined, {
		style: "percent",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
}

export function formatDateToLocaleString(epoch) {
	return new Date(epoch).toLocaleDateString()
}

// getting total spent
export function getExpenseOfBudget(id) {
	const expenses = ("expenses" in localStorage ? fetchData("expenses") : [])
		.filter(exp => exp.budgetID === id)
		.map(exp => exp.amount)
	return expenses.length > 0
		? expenses.reduce((acc, amount) => acc + amount, 0)
		: 0
}
