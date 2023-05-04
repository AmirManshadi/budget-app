import { Form } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Dashboard({ userName, /* budgets */ }) {
	return (
		<div className="Dashboard">
			<h2>welcome to your dashboard, {userName}</h2>

			<section>
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
					<button type="submit">create budget</button>
				</Form>
			</section>
		</div>
	)
}
export default Dashboard
