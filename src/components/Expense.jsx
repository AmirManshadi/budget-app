// rrd import
import { Link, useFetcher } from "react-router-dom"

// library
import { TrashIcon } from "@heroicons/react/24/outline"

// helper functions
import { /* deleteExpense, */ toaster, waait } from "../utils/helperFunctions"

// action
export async function ExpenseAction({ request }) {
	await waait()
	const formData = await request.formData()
	const { _action, ...data } = Object.fromEntries(formData)
	switch (_action) {
		// delete expense
		case "deleteExpense":
			// deleteExpense(data.expenseId)
			toaster("success", "Expense deleted")
			break

		default:
			break
	}
	return null
}

export default function Expense({ name, amount, date, id }) {
	const fetcher = useFetcher()

	return (
		<>
			<td className="expense-name">{name}</td>
			<td className="expense-amount">{amount}</td>
			<td className="expense-date">{date}</td>
			<td className="expense-budget">
				<Link to=""></Link>
			</td>
			<td className="expense-delete">
				<fetcher.Form method="post">
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
