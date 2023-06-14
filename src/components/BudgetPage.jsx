import { useLoaderData } from "react-router-dom"
import { findBudget, getExpensesOfBudget } from "../utils/helperFunctions"
import Budget from "./Budget"
import ExpenseForm from "./ExpenseForm"
import Table from "./Table"

export function BudgetPageLoader({ params }) {
	const budget = findBudget(params.id)
	const expenses = getExpensesOfBudget(params.id)
	return { budget, budgetId: params.id, expenses }
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
