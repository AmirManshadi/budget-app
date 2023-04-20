import { Outlet } from "react-router-dom"

function RootLayout() {
	return (
		<>
			<div>RootLayout</div>
			<main>
				<Outlet />
			</main>
		</>
	)
}
export default RootLayout
