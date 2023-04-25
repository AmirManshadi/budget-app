// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Libraries
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

// Layout
import Main, { MainAction, MainLoader } from "./components/Main"

// Pages
import Error from "./components/Error"

// Actions
import { NavbarLogoutAction } from "./components/Navbar"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		loader: MainLoader,
		errorElement: <Error />,
    action: MainAction,
		children: [
			{
				path: "logout",
				action: NavbarLogoutAction,
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
