// rrd imports
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

// layout
import RootLayout from "./layouts/RootLayout"

// pages
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />} errorElement={<h1>error</h1>}>
			<Route index element={<Dashboard />}></Route>
		</Route>
	)
)

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
