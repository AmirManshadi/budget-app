// react import
import { useEffect, useRef } from "react"

// rrd import
import { useFetcher } from "react-router-dom"

// library
import { CurrencyDollarIcon } from "@heroicons/react/24/outline"

// eslint-disable-next-line react/prop-types
function Dashboard({ userName /* budgets */ }) {
	const fetcher = useFetcher()
	const isSubmitting = fetcher.state === "submitting"
	const formRef = useRef()
	const focusRef = useRef()

	useEffect(() => {
		if (!isSubmitting) {
			formRef.current.reset()
			focusRef.current.focus()
		}
	}, [isSubmitting])

	return (
		<div className="dashboard">
			<h2>
				welcome to your dashboard, <span>{userName}</span>
			</h2>

			<section id="expense-form">
				<div className="new-budget-form">
					<h3>create budget</h3>
					<fetcher.Form method="post" ref={formRef}>
						<div>
							<label htmlFor="newBudget">budget name</label>
							<input
								type="text"
								name="newBudgetName"
								id="newBudgetName"
								placeholder="e.g Groceries"
								ref={focusRef}
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
						<button type="submit" disabled={isSubmitting}>
							{isSubmitting ? (
								<span>submitting budget...</span>
							) : (
								<>
									<span>create budget</span>
									<CurrencyDollarIcon width={20} />
								</>
							)}
						</button>
					</fetcher.Form>
				</div>
			</section>
		</div>
	)
}
export default Dashboard
