import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar, FaHeart } from "react-icons/fa";



export default function Room() {
	return (
		<VStack alignItems={"start"}>
			{/* image & heart */}
			<Box position={"relative"} overflow={"hidden"} rounded={"3xl"} mb={3}>
				{/* image */}
				<Image minH={280} src={"https://a0.muscache.com/im/pictures/cfbcb406-1b7a-4b06-89aa-108febafa865.jpg?im_w=720"} />
				{/* heart */}
				<Button position={"absolute"} color={"white"} variant={"unstyled"} top={0} right={0}>
					<FaHeart />
				</Button>
			</Box>

			{/* image detail */}
			<Box>
				<Grid gap={2} templateColumns={"6fr 1fr"}>
					<Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>
						Ongryong-myeon, Gwangyang-si, 전라남도, 한국</Text>
					<HStack>
						<FaStar />
						<Text>5.0</Text>
					</HStack>
				</Grid>
				<Text fontSize={"sm"} color="gray.600">
					Rep. South Korea
				</Text>
			</Box>
			<Text as={"b"} fontSize={"sm"} color="gray.600">
				$72
			</Text> / night
		</VStack>

	)
}