// rrd imports
import { useLoaderData } from "react-router-dom"

// Components
import Navbar from "./Navbar"

// pages
import Dashboard from "./Dashboard"

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
			<main>{userName ? <Dashboard /> : <p>login</p>}</main>
		</>
	)
}
export default RootLayout
