import { getPhotos } from '$lib/index.js'

export async function load({params}){
	return {
		photos: await getPhotos(params.alb_id, 1),
		albid: params.alb_id,
		}
}