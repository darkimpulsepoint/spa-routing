import { getAlbums } from '$lib/index.js'

export async function load({params}){
	return {
		albs: getAlbums(params.userid)
	}
}