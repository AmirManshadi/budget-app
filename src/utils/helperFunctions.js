// Libraries
import { toast } from "react-toastify"

// development functions
export function waait() {
	return new Promise(res => setTimeout(res, Math.random() * 1000))
}

// add to local storage
export function fetchData(key) {
	return localStorage.getItem(key)
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
	const existingBudgets = fetchData("budgets") ?? "[]"
	return localStorage.setItem(
		"budgets",
		JSON.stringify([...JSON.parse(existingBudgets), newBudget])
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
	const existingExpenses = fetchData("Expenses") ?? "[]"
	return localStorage.setItem(
		"Expenses",
		JSON.stringify([...JSON.parse(existingExpenses), newExpense])
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
