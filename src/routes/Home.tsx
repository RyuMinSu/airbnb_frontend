import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";




export default function Home() {
	return (
		<Grid rowGap={2} columnGap={4} templateColumns={{sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)", "2xl": "repeat(5, 1fr)"}} mt={10} px={{base: 10, lg: 40}}>

			<Room />

			<RoomSkeleton />
		</Grid>
	)
}