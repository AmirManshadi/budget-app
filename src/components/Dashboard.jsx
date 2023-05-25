// react import
// import { useEffect, useRef } from "react"

// rrd import
// import { useFetcher } from "react-router-dom"

// components
import BudgetForm from "./BudgetForm"
import ExpenseForm from "./ExpenseForm"

// eslint-disable-next-line react/prop-types
function Dashboard({ userName, budgets }) {
	return (
		<div className="dashboard">
			<h2>
				welcome to your dashboard, <span>{userName}</span>
			</h2>

			<section id="dashboard-forms">
				<BudgetForm />
				<ExpenseForm budgets={budgets} />
			</section>
		</div>
	)
}
export default Dashboard
