// react import
// import { useEffect, useRef } from "react"

// rrd import
// import { useFetcher } from "react-router-dom"

// components
import BudgetForm from "./BudgetForm"

// eslint-disable-next-line react/prop-types
function Dashboard({ userName /* budgets */ }) {
	

	return (
		<div className="dashboard">
			<h2>
				welcome to your dashboard, <span>{userName}</span>
			</h2>

			<section id="dashboard-forms">
				<BudgetForm />
			</section>
		</div>
	)
}
export default Dashboard
