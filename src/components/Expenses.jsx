// rrd imports
import { useLoaderData } from "react-router-dom"

// helper functions
import { fetchData } from "../utils/helperFunctions"

// component imports
import Table from "./Table"

export function ExpensesLoader() {
	const expenses = fetchData("expenses")
	return { expenses }
}

export default function Expenses() {
	const { expenses } = useLoaderData()
	return (
		<div>
			<h2>
				Your Expenses <small>({expenses.length} total)</small>
			</h2>
			<Table expenses={expenses} />
		</div>
	)
}
