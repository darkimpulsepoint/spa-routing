export function load({params, url}) {
	const currPath = url.pathname
	const route = []
	const parts = currPath.split("/").filter(el => el !== '')

	let currUrl = "/"

	parts.forEach((el) => {
		currUrl += el + "/"
		const pathname = paths.filter(el=> el.reg.test(currUrl))
		if (pathname.length) {
			route.push({name: pathname[0].name, path: currUrl})
		}
	})
	return { route: route }
}

const paths = [
	{
		name: "albums",
		reg: /^\/users\/\d+\/albums\/$/,
	},
	{
		name: "photos",
		reg: /^\/users\/\d+\/albums\/\d+\/?$/,
	},
]