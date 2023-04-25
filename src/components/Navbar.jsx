// rrd imports
import { Form, NavLink, redirect } from "react-router-dom"

// library
import { HomeIcon } from "@heroicons/react/24/outline"

// Components
import Button from "./Button"

// Helpers
import { deleteData, toaster } from "../utils/helperFunctions"

// Action
export async function NavbarLogoutAction() {
	if (confirm("Do you want to Log out?")) {
		try {
			deleteData("userName")
			toaster("success", "Successfully logged out")
		} catch (e) {
			toaster("error", "Failed to log out")
			throw new Error("Failed to delete user")
		}
	}
	return redirect("/")
}

// eslint-disable-next-line react/prop-types
function Navbar({ userName }) {
	return (
		<nav id="navbar">
			<NavLink to="/">
				<h1 className="website-title">
					<HomeIcon width={40} />
					<span>BudgetApp</span>
				</h1>
			</NavLink>
			{userName && (
				<Form method="delete" action="/logout" className="logout-form">
					<Button style="danger">Logout</Button>
				</Form>
			)}
		</nav>
	)
}
export default Navbar
