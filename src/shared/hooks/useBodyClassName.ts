export const useBodyClassName = () => {
	return ({
		className,
		type,
	}: {
		className: string
		type: 'remove' | 'add'
	}) => {
		if (typeof window !== 'undefined') {
			if (type === 'add') document.body.classList.add(className)
			if (type === 'remove') document.body.classList.remove(className)
		}
	}
}
