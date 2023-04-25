import { Link } from "react-router-dom"

function Error404() {
	return (
		<>
			<div>Error 404</div>
			<p>
				return to <Link to="/">Homepage</Link>
			</p>
		</>
	)
}
export default Error404
