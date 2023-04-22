export function fetchData(key) {
	const result = localStorage.getItem(key)
	return result
}

export function deleteData(key) {
	const result = localStorage.removeItem(key)
	return result
}
