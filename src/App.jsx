// rrd imports
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

// Libraries
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

// Layout
import RootLayout, { RootLayoutLoader } from "./components/RootLayout"

// Pages
import Dashboard from "./components/Dashboard"
import Error from "./components/Error"

// Actions
import { NavbarLogoutAction } from "./components/Navbar"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}
			loader={RootLayoutLoader}
			errorElement={<Error />}
		>
			<Route index element={<Dashboard />}></Route>
			<Route path="logout" action={NavbarLogoutAction}></Route>
		</Route>
	)
)

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer
				position="bottom-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	)
}

export default App
