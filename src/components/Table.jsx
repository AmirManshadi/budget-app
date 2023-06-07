// helper functions
import {
	formatCurrency,
	formatDateToLocaleString,
} from "../utils/helperFunctions"
import Expense from "./Expense"

function Table({ expenses }) {
	return (
		<>
			<table className="expenses-table">
				<thead>
					<tr>
						{["name", "amount", "date", "budget", ""].map((item, index) => (
							<td key={index}>{item}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{expenses.map(expense => (
						<tr key={expense.id}>
							<Expense
								name={expense.name}
								amount={formatCurrency(expense.amount)}
								date={formatDateToLocaleString(expense.createdAt)}
								id={expense.id}
								budgetId={expense.budgetId}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
export default Table
