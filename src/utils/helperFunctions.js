// Libraries
import { toast } from "react-toastify"

export function fetchData(key) {
	const result = localStorage.getItem(key)
	return result
}

export function deleteData(key) {
	if (confirm("Do you want to Log out?")) {
		localStorage.removeItem(key)
	}
	return toast.success("You have successfully logged out.", {
		position: "bottom-left",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	})
}
