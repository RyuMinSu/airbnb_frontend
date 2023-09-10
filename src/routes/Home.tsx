import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query"
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { getRooms } from "../api";






interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  id: number;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}


export default function Home() {
	// api.ts에서 fetching한 데이터 받아오기
	// useQuery사용(받아올 데이터는 IROOM, 받아올 데이터의 키값은 rooms)
	const { isLoading, data } = useQuery<IRoom[]>(["rooms"], getRooms)

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

			{data?.map((room) => (
        <Room
					key={room.id}
					pk={room.id}
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