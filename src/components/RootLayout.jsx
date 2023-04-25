// rrd imports
import { Outlet, useLoaderData } from "react-router-dom"

// Components
import Navbar from "./Navbar"

// Helpers
import { fetchData } from "../utils/helperFunctions"

// Loader
export function RootLayoutLoader() {
	const userName = fetchData("userName")
	return { userName }
}

function RootLayout() {
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
export default RootLayout
