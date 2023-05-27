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
				<span className="budget-spent">
					<small>{formatCurrency(spentAmount)}</small> spent
				</span>
				<span className="budget-total">
					<small>{formatCurrency(amount)}</small>
				</span>
			</div>
		</div>
	)
}
