// react import
import { useState } from "react"

// rrd import
import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/outline"

// assets
import illustration from "../assets/landing_page_illustration.svg"

function LoginForm() {
	const [isButtonDisabled, setIsButtonDisabled] = useState(true)

	function checkInputLength(e) {
		if (e.target.value.length > 0) {
			setIsButtonDisabled(false)
		} else {
			setIsButtonDisabled(true)
		}
	}

	return (
		<div className="login-form">
			<section>
				<h2>
					Take Control of <span>Your Money</span>
				</h2>
				<p>
					Personal budgeting is the secret to financial freedom. Start your
					journey today.
				</p>
				<Form method="post">
					<input
						type="text"
						name="userName"
						placeholder="what is your name?"
						aria-label="Your Name"
						autoComplete="given-name"
						onChange={checkInputLength}
					/>
					<input type="hidden" name="_action" value="newUser" />
					<button type="submit" disabled={isButtonDisabled}>
						<span>Create Account</span>
						<UserPlusIcon width={20} />
					</button>
				</Form>
			</section>
			<figure>
				<img src={illustration} alt="A man and a woman with shopping bags" />
			</figure>
		</div>
	)
}
export default LoginForm
