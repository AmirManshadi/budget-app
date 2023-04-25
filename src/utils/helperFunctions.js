// Libraries
import { toast } from "react-toastify"

// add to local storage
export function fetchData(key) {
	return localStorage.getItem(key)
}

// remove from local storage
export function deleteData(key) {
	return localStorage.removeItem(key)
}

// toast api
export function toaster(type, message) {
	return toast[type](message, {
		position: "bottom-left",
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	})
}
