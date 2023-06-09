function Button({ type = "submit", style = "", children = "submit" }) {
	return (
		<button type={type} className={style}>
			{children}
		</button>
	)
}

export default Button
