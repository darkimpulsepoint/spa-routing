const BASE_URL = "https://jsonplaceholder.typicode.com"
const perPage = 15;

export async function getUsers(){
	return await fetch(`${BASE_URL}/users`).then(d=>d.json())
}

export async function getAlbums(userid){
	return await fetch(`${BASE_URL}/albums?userId=${userid}`).then(d=>d.json())
}

export async function getPhotos(albid, page, per_page=perPage){
	const start_pos = per_page * (page - 1)
	return await fetch(`${BASE_URL}/photos?albumId=${albid}&_start=${start_pos}&_limit=${per_page}`).then(d=>d.json())
}