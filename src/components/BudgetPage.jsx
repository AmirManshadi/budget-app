import { useLoaderData } from "react-router-dom"
import { createExpense, findBudget, getExpensesOfBudget, toaster, waait } from "../utils/helperFunctions"
import Budget from "./Budget"
import ExpenseForm from "./ExpenseForm"
import Table from "./Table"

export function BudgetPageLoader({ params }) {
	const budget = findBudget(params.id)
	const expenses = getExpensesOfBudget(params.id)
	return { budget, budgetId: params.id, expenses }
}

export async function BudgetPageAction({ request }) {
	await waait()
	const formData = await request.formData()
	const { _action, ...data } = Object.fromEntries(formData)
	switch (_action) {
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


function BudgetPage() {
	const { budget, budgetId, expenses } = useLoaderData()
	return (
		<>
			<Budget budget={budget} />
			<ExpenseForm budgets={[budget]} key={budgetId} />
			{expenses && expenses.length > 0 && (
				<div>
					<h2 style={{margin: "1rem 0"}}>List of Expenses</h2>
					<Table expenses={expenses} showBudget={false} />
				</div>
			)}
		</>
	)
}
export default BudgetPage
