import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { useEffect, useState } from "react";




interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}


export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [rooms, setRooms] = useState<IRoom[]>([]);
	const fetchRooms = async() => {
		const response = await fetch("http://127.0.0.1:8000/api/v1/rooms/");
		const json = await response.json();
		setRooms(json);
		setIsLoading(true);
	}

	useEffect(() => {
		fetchRooms();
	},[])

	return (
		<Grid rowGap={2} columnGap={4} templateColumns={{sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)", "2xl": "repeat(5, 1fr)"}} mt={10} px={{base: 10, lg: 40}}>

			{isLoading ? (
				<>
					<RoomSkeleton />
					<RoomSkeleton />
					<RoomSkeleton />
					<RoomSkeleton />
					<RoomSkeleton />
				</>				
			) : null}

			{rooms.map((room) => (
        <Room
          imageUrl={room.photos[0].file}          
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
			

		</Grid>
	)
}