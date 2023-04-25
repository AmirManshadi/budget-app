// rrd imports
import { useLoaderData } from "react-router-dom"

// Components
import Navbar from "./Navbar"

// pages
import Dashboard from "./Dashboard"
import LoginForm from "./LoginForm"

// Helpers
import { fetchData } from "../utils/helperFunctions"

// Loader
export function MainLoader() {
	const userName = fetchData("userName")
	return { userName }
}

function Main() {
	const { userName } = useLoaderData()

	return (
		<>
			<Navbar userName={userName} />
			<main>{userName ? <Dashboard /> : <LoginForm />}</main>
		</>
	)
}
export default Main
