// rrd import
import { Link, useNavigate, useRouteError } from "react-router-dom"

// library
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/outline"

function Error() {
	const error = useRouteError()
	const navigate = useNavigate()
	return (
		<div className="error">
			<h1>Uh Oh! something went wrong</h1>
			<p>{error.message || error.statusText}</p>
			<div>
				<button
					type="button"
					onClick={() => navigate(-1)}
					className="home-button"
				>
					<span>Go Back</span>
					<ArrowUturnLeftIcon width={20} />
				</button>
				<Link to="/" className="back-button">
					<span>Home Page</span>
					<HomeIcon width={20} />
				</Link>
			</div>
		</div>
	)
}
export default Error
