// rrd imports
import { useLoaderData } from "react-router-dom"

// Components
import Navbar from "./Navbar"

// pages
import Dashboard from "./Dashboard"
import LoginForm from "./LoginForm"

// Helpers
import {
	createBudget,
	createExpense,
	fetchData,
	toaster,
	waait,
} from "../utils/helperFunctions"

// Loader
export function MainLoader() {
	const userName = fetchData("userName")
	const budgets = fetchData("budgets")
	const expenses = fetchData("expenses")
	return { userName, budgets, expenses }
}

// action
export async function MainAction({ request }) {
	await waait()
	const formData = await request.formData()
	const { _action, ...data } = Object.fromEntries(formData)
	switch (_action) {
		// create user
		case "newUser":
			localStorage.setItem("userName", data.userName)
			toaster("success", `Hello ${data.userName}`)
			break

		// create new budget
		case "newBudget":
			createBudget({
				name: data.newBudgetName,
				amount: data.newBudgetAmount,
			})
			toaster("success", "budget created")
			break

		// create new expense
		case "newExpense":
			createExpense({
				name: data.newExpenseName,
				amount: data.newExpenseAmount,
				budgetID: data.budget,
			})
			toaster("success", "Expense created")
			break
		default:
			break
	}
	return null
}

function Main() {
	const { userName, budgets, expenses } = useLoaderData()

	return (
		<>
			<Navbar userName={userName} />
			<main>
				{userName ? (
					<Dashboard
						userName={userName}
						budgets={JSON.parse(budgets)}
						expenses={JSON.parse(expenses)}
					/>
				) : (
					<LoginForm />
				)}
			</main>
		</>
	)
}
export default Main
