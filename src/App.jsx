// rrd imports
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

// Layout
import RootLayout, { RootLayoutLoader } from "./layouts/RootLayout"

// Pages
import Dashboard from "./pages/Dashboard"

// Actions
import { NavbarLogoutAction } from "./components/Navbar"
import Error404 from "./pages/Error404"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />} loader={RootLayoutLoader}>
			<Route index element={<Dashboard />}></Route>
			<Route path="logout" action={NavbarLogoutAction}></Route>
      <Route path="*" element={<Error404 />}/>
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
