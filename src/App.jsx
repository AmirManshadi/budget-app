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
import RootLayout, { RootLayoutLoader } from "./layouts/RootLayout"

// Pages
import Dashboard from "./pages/Dashboard"
import Error404 from "./pages/Error404"

// Actions
import { NavbarLogoutAction } from "./components/Navbar"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />} loader={RootLayoutLoader}>
			<Route index element={<Dashboard />}></Route>
			<Route path="logout" action={NavbarLogoutAction}></Route>
			<Route path="*" element={<Error404 />} />
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
