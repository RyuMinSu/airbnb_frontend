import { useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';
import { getRoom } from "../api";



export default function RoomDetail() {
	const { roomPk } = useParams() //url에 들어있는 값 가져오기
	const { isLoading, data } = useQuery([`rooms:${roomPk}`], getRoom)
	console.log(data)


	return (		
		<h1>hello!</h1>
	)
}