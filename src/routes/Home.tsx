import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";




export default function Home() {
	return (
		<Grid rowGap={2} columnGap={4} templateColumns={"repeat(5, 1fr)"} mt={10} px={40}>
			<VStack alignItems={"start"}>
				{/* image */}
				<Box overflow={"hidden"} rounded={"3xl"} mb={3}>
					<Image h={280} src={"https://a0.muscache.com/im/pictures/cfbcb406-1b7a-4b06-89aa-108febafa865.jpg?im_w=720"} />
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
			
			<VStack alignItems={"start"}>
				{/* image */}
				<Box overflow={"hidden"} rounded={"3xl"} mb={3}>
					<Image h={280} src={"https://a0.muscache.com/im/pictures/cfbcb406-1b7a-4b06-89aa-108febafa865.jpg?im_w=720"} />
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
			
			<VStack alignItems={"start"}>
				{/* image */}
				<Box overflow={"hidden"} rounded={"3xl"} mb={3}>
					<Image h={280} src={"https://a0.muscache.com/im/pictures/cfbcb406-1b7a-4b06-89aa-108febafa865.jpg?im_w=720"} />
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
		</Grid>
	)
}