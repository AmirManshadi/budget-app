// rrd imports
import { useLoaderData } from "react-router-dom"

// Components
import Navbar from "./Navbar"

// pages
import Dashboard from "./Dashboard"
import LoginForm from "./LoginForm"

// Helpers
import { fetchData, toaster } from "../utils/helperFunctions"

// Loader
export function MainLoader() {
	const userName = fetchData("userName")
	return { userName }
}

// action
export async function MainAction({ request }) {
	const formData = await request.formData()
	const { _action, ...data } = Object.fromEntries(formData)
	switch (_action) {
		case "newUser":
			localStorage.setItem("userName", data.userName)
			toaster("success", `Hello ${data.userName}`)
			break

		default:
			break
	}
	return null
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
