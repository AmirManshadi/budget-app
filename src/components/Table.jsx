// helper functions
import {
	formatCurrency,
	formatDateToLocaleString,
} from "../utils/helperFunctions"

function Table({ expenses }) {
	return (
		<>
			<table className="expenses-table">
				<thead>
					<tr>
						{["name", "amount", "date"].map((item, index) => (
							<td key={index}>{item}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{expenses.map(expense => (
						<tr key={expense.id}>
							<td className="expense-name">{expense.name}</td>
							<td className="expense-amount">
								{formatCurrency(expense.amount)}
							</td>
							<td className="expense-date">
								{formatDateToLocaleString(expense.createdAt)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
export default Table
