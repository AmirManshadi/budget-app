import { useLoaderData } from "react-router-dom"
import {
	createBudget,
	createExpense,
	// deleteExpense,
	fetchData,
	toaster,
	waait,
} from "../utils/helperFunctions"
import Intro from "./Intro"
import LoginForm from "./LoginForm"

// Loader
export function DashboardLoader() {
	const userName = fetchData("userName")
	const budgets = fetchData("budgets")
	const expenses = fetchData("expenses")
	return { userName, budgets, expenses }
}

// action
export async function DashboardAction({ request }) {
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

		// delete expense
		case "deleteExpense":
			// deleteExpense(data.expenseId)
			// toaster("success", "Expense deleted")
			break

		default:
			break
	}
	return null
}

function Dashboard() {
	const { userName, budgets, expenses } = useLoaderData()

	return (
		<>
			{userName ? (
				<Intro
					userName={userName}
					budgets={JSON.parse(budgets)}
					expenses={JSON.parse(expenses)}
				/>
			) : (
				<LoginForm />
			)}
		</>
	)
}
export default Dashboard
