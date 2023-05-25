// react imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react"

// rrd imports
import { useFetcher } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function ExpenseForm({ budgets }) {
	const fetcher = useFetcher()
	const isSubmitting = fetcher.state === "submitting"
	const formRef = useRef()
	const focusRef = useRef()
	const selectRef = useRef()

	useEffect(() => {
		if (!isSubmitting) {
			formRef.current.reset()
			focusRef.current.focus()
		}
	}, [isSubmitting])

	return (
		<div className="new-expense-form">
			<h3>create new expense</h3>
			<fetcher.Form method="post" ref={formRef}>
				<div>
					<label htmlFor="newExpenseName">expense name</label>
					<input
						type="text"
						name="newExpenseName"
						id="newExpenseName"
						placeholder="e.g Coffee"
						ref={focusRef}
						required
					/>
				</div>
				<div>
					<label htmlFor="newExpenseAmount">expense amount</label>
					<input
						type="number"
						name="newExpenseAmount"
						id="newExpenseAmount"
						placeholder="e.g 3.50"
						step="0.01"
						inputMode="decimal"
						ref={focusRef}
						required
					/>
				</div>
				<div>
					{budgets?.length > 0 ? (
						<div className="budget-category">
							<label htmlFor="budget">budget category</label>
							<select name="budget" id="budget" ref={selectRef}>
								{budgets.map(budget => (
									<option key={budget.id} value={budget.id}>
										{budget.name}
									</option>
								))}
							</select>
						</div>
					) : null}
					<input type="hidden" name="_action" value="newExpense" />
					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<span>submitting expense...</span>
						) : (
							<>
								<span>create expense</span>
								<CurrencyDollarIcon width={20} />
							</>
						)}
					</button>
				</div>
			</fetcher.Form>
		</div>
	)
}
