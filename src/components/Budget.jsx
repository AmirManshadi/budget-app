// helper functions
import {
	formatCurrency,
	formatPercentage,
	getExpenseOfBudget,
} from "../utils/helperFunctions"

/* eslint-disable react/prop-types */
export default function Budget({ budget }) {
	const { name, id, amount } = budget
  const spentAmount = getExpenseOfBudget(id)
	return (
		<div className="budget-card">
			<div className="budget-info">
				<span className="budget-name">{name}</span>
				<span className="budget-amount">{formatCurrency(amount)}</span>
			</div>
			<div className="budget-progress">
				<progress value={spentAmount} max={amount}>
					{formatPercentage(spentAmount / amount)}
				</progress>
			</div>
			<div>
				<small className="budget-spent">
					{formatCurrency(spentAmount)}
				</small>
				<small className="budget-total">{formatCurrency(amount)}</small>
			</div>
		</div>
	)
}
