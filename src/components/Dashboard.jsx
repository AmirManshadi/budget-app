// rrd import
import { Form } from "react-router-dom"

// library
import { CurrencyDollarIcon } from "@heroicons/react/24/outline"

// eslint-disable-next-line react/prop-types
function Dashboard({ userName /* budgets */ }) {
	return (
		<div className="dashboard">
			<h2>
				welcome to your dashboard, <span>{userName}</span>
			</h2>

			<section>
				<div className="new-budget-form">
					<h3>create budget</h3>
					<Form method="post">
						<div>
							<label htmlFor="newBudget">budget name</label>
							<input
								type="text"
								name="newBudgetName"
								id="newBudgetName"
								placeholder="e.g Groceries"
								required
							/>
						</div>
						<div>
							<label htmlFor="newBudgetAmount">budget amount</label>
							<input
								type="number"
								name="newBudgetAmount"
								id="newBudgetAmount"
								step="0.01"
								inputMode="decimal"
								placeholder="e.g 200"
								required
							/>
						</div>
						<input type="hidden" name="_action" value="newBudget" />
						<button type="submit">
							<span>create budget</span>
							<CurrencyDollarIcon width={20} />
						</button>
					</Form>
				</div>
			</section>
		</div>
	)
}
export default Dashboard
