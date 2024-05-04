import { getUsers } from '$lib/index.js';

export async function load(){
	return {
		users: await getUsers()
		}
}