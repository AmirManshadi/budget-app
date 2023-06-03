// rrd imports
import { Outlet, useLoaderData } from "react-router-dom"

// Components
import Navbar from "./Navbar"

// Helpers
import { fetchData } from "../utils/helperFunctions"

export function MainLoader() {
	const userName = fetchData("userName")
	return { userName }
}

function Main() {
	const { userName } = useLoaderData()

	return (
		<>
			<Navbar userName={userName} />
			<main>
				<Outlet />
			</main>
		</>
	)
}
export default Main
