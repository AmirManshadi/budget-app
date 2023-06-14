// helper functions
import {
	formatCurrency,
	formatDateToLocaleString,
} from "../utils/helperFunctions"
import Expense from "./Expense"

function Table({ expenses, showBudget = true }) {
	return (
		<>
			<table className="expenses-table">
				<thead>
					<tr>
						{["name", "amount", "date", showBudget ? "budget" : null, " "].map(
							(item, index) => (item ? <td key={index}>{item}</td> : null)
						)}
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
								showBudget={showBudget}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
export default Table
