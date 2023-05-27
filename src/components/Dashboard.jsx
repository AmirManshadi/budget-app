/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// react import
// import { useEffect, useRef } from "react"

// rrd import
// import { useFetcher } from "react-router-dom"

// components
import Budget from "./Budget"
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
				{budgets?.length > 0 && <ExpenseForm budgets={budgets} />}
			</section>
			<section id="budgets-section">
				{budgets
					? budgets.map(budget => {
							return <Budget key={budget.id} budget={{ ...budget }} />
					  })
					: null}
			</section>
		</div>
	)
}
export default Dashboard
