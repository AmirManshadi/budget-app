// helper functions
import { Form, Link } from "react-router-dom"
import {
	formatCurrency,
	formatPercentage,
	getExpenseOfBudget,
} from "../utils/helperFunctions"
import { TrashIcon } from "@heroicons/react/24/outline"

export default function Budget({ budget, func = "view" }) {
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
			<div className="delete-view-budget">
				{func === "delete" ? (
					<Form method="post">
						<input type="hidden" name="_action" value="deleteBudget" />
						<input type="hidden" name="budgetId" value={id} />
						<button>
							<span>delete budget</span>
							<TrashIcon />
						</button>
					</Form>
				) : (
					<Link to={"/budget/" + id}>{name}</Link>
				)}
			</div>
		</div>
	)
}
