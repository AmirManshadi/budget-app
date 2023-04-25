// rrd import
import { Link, useNavigate, useRouteError } from "react-router-dom"

// library
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

function Error() {
	const error = useRouteError()
	const navigate = useNavigate()
	return (
		<>
			<h1>Uh Oh! something went wrong</h1>
			<p>{error.message || error.statusText}</p>
			<div>
				<button onClick={() => navigate(-1)}>
					<span>Go Back</span>
					<ArrowUturnLeftIcon width={20} />
				</button>
				<Link to="/">Home Page</Link>
			</div>
		</>
	)
}
export default Error
