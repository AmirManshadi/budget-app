// rrd imports
import { Form, NavLink, redirect } from "react-router-dom"

// libraries
import { HomeIcon } from "@heroicons/react/24/outline"

// Components
import Button from "./Button"

// Helpers
import { deleteData } from "../utils/helperFunctions"

// Action
export async function NavbarLogoutAction() {
	deleteData("userName")
	return redirect("/")
}

// eslint-disable-next-line react/prop-types
function Navbar({ userName }) {
	return (
		<nav>
			<NavLink to="/" className="website-title">
				<h1>
					<HomeIcon width={40} />
					BudgetApp
				</h1>
			</NavLink>
			{userName && (
				<Form method="delete" action="/logout">
					<Button style="danger">Logout</Button>
				</Form>
			)}
		</nav>
	)
}
export default Navbar
