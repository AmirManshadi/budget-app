// rrd imports
import { Form, NavLink } from "react-router-dom"

// libraries
import { HomeIcon } from "@heroicons/react/24/outline"

function Navbar() {
	return (
		<nav>
			<NavLink to="/" className={"website-title"}>
				<HomeIcon width={40} />
				<h1>BudgetApp</h1>
			</NavLink>
			<Form action="/logout"></Form>
		</nav>
	)
}
export default Navbar
