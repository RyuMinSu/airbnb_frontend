import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios"; // fetch를 위한 상위 호환



const Instance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1/",
	withCredentials: true
})

export const getRooms = () => Instance.get("rooms/").then((response) => response.data)

export const getRoom = ({queryKey}: QueryFunctionContext) => {
	const [_, roomPk] = queryKey
	return Instance.get(`rooms/${roomPk}`).then((response) => response.data)
} 

export const getRoomReviews = ({queryKey}: QueryFunctionContext) => {
	const [_, roomPk] = queryKey
	return Instance.get(`rooms/${roomPk}/reviews`).then((response) => response.data)
}
	
export const getMe = () => {
	return Instance.get("users/me").then((response) => response.data)
}


// export default async function getRooms() {
// 	const response = await Instance.get('rooms/');
// 	return response.data	
// }