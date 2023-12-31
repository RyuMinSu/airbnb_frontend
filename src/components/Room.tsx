import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";



interface IRoomProps {
	imageUrl: string
	city: string
	country: string
	price: number
	rating: number
	pk: number
	name: string
}

export default function Room({ imageUrl, city, country, price, rating, pk, name }: IRoomProps) {
	return (
		<Link to={`/rooms/${pk}`}>
			<VStack alignItems={"start"}>
				{/* image & heart */}
				<Box position={"relative"} overflow={"hidden"} rounded={"3xl"} mb={3}>
					{/* image */}				
					<Image minH={280} src={imageUrl} />
					{/* heart */}
					<Button position={"absolute"} color={"white"} variant={"unstyled"} top={0} right={0}>
						<FaHeart />
					</Button>
				</Box>

				{/* image detail */}
				<Box>
					<Grid gap={2} templateColumns={"6fr 1fr"}>
						<Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>
							{name}
						</Text>
						<HStack>
							<FaStar />
							<Text>{rating}</Text>
						</HStack>
					</Grid>
					<Text fontSize={"sm"} color="gray.600">
						{city} {country}
					</Text>
				</Box>
				<Text as={"b"} fontSize={"sm"} color="gray.600">
					{price}
				</Text> / night
			</VStack>
		</Link>

	)
}