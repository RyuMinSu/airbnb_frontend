import axios from "axios"; // fetch를 위한 상위 호환



const Instance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1/"
})

const getRooms = () => Instance.get("rooms/").then((response) => response.data)

export default getRooms;

// export default async function getRooms() {
// 	const response = await Instance.get('rooms/');
// 	return response.data	
// }