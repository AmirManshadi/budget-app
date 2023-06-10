// react import
// import { useEffect, useRef } from "react"

// rrd import
import { Link } from "react-router-dom"

// components
import Budget from "./Budget"
import BudgetForm from "./BudgetForm"
import ExpenseForm from "./ExpenseForm"
import Table from "./Table"

function Intro({ userName, budgets, expenses }) {
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
				{budgets?.length > 0
					? budgets.map(budget => {
							return <Budget key={budget.id} budget={ budget } />
					  })
					: null}
			</section>
			<section id="expenses-section">
				{expenses && expenses.length > 0 && (
					<>
						<h2>Recent Expenses</h2>
						<Table
							expenses={expenses
								.sort((a, b) => b.createdAt - a.createdAt)
								.slice(0, 8)}
						/>
					</>
				)}
				{expenses && expenses.length > 8 && (
					<Link to="expenses">Show All Expenses</Link>
				)}
			</section>
		</div>
	)
}
export default Intro
