// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Libraries
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Main, { MainLoader } from "./components/Main"

import Error from "./components/Error"

import { NavbarLogoutAction } from "./components/Navbar"
import Dashboard, {
	DashboardAction,
	DashboardLoader,
} from "./components/Dashboard"
import Expenses, { ExpensesLoader } from "./components/Expenses"
import { ExpenseAction } from "./components/Expense"
import BudgetPage, {
	BudgetPageAction,
	BudgetPageLoader,
} from "./components/BudgetPage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		loader: MainLoader,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Dashboard />,
				action: DashboardAction,
				loader: DashboardLoader,
			},
			{
				path: "logout",
				action: NavbarLogoutAction,
			},
			{
				path: "expenses",
				element: <Expenses />,
				loader: ExpensesLoader,
				action: ExpenseAction,
			},
			{
				path: "budget/:id",
				element: <BudgetPage />,
				loader: BudgetPageLoader,
				action: BudgetPageAction,
			},
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	)
}

export default App
