// Libraries
import { toast } from "react-toastify"

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
