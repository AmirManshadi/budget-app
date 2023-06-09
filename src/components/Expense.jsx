// rrd import
import { Link, useFetcher } from "react-router-dom"

// library
import { TrashIcon } from "@heroicons/react/24/outline"

// helper functions
import {
	deleteExpense,
	findBudget,
	toaster,
	waait,
} from "../utils/helperFunctions"

// action
export async function ExpenseAction({ request }) {
	await waait()
	const formData = await request.formData()
	const { _action, ...data } = Object.fromEntries(formData)
	switch (_action) {
		// delete expense
		case "deleteExpense":
			deleteExpense(data.expenseId)
			toaster("success", "Expense deleted")
			break

		default:
			break
	}
	return null
}

export default function Expense({
	name,
	amount,
	date,
	id,
	budgetId,
	showBudget = true,
}) {
	const fetcher = useFetcher()
	const budget = findBudget(budgetId)
	console.log(`🚀 ~ budget:`, budget)
	return (
		<>
			<td className="expense-name">{name}</td>
			<td className="expense-amount">{amount}</td>
			<td className="expense-date">{date}</td>
			{showBudget && (
				<td className="expense-budget">
					<Link to={"/budget/" + budgetId}>{budget.name}</Link>
				</td>
			)}
			<td className="expense-delete">
				<fetcher.Form method="post" action="/expenses">
					<input type="hidden" name="_action" value="deleteExpense" />
					<input type="hidden" name="expenseId" value={id} />
					<button>
						<TrashIcon width={20} />
					</button>
				</fetcher.Form>
			</td>
		</>
	)
}
