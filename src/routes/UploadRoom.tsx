import { Box, Button, Checkbox, Container, FormControl, FormHelperText, FormLabel, Grid, Heading, Input, InputGroup, InputLeftAddon, Select, Textarea, VStack } from "@chakra-ui/react";
import useHostOnlyPage from "../components/HostOnlyPage"
import ProtectedPage from "../components/ProtectedPage"
import { FaBed, FaDollarSign, FaMoneyBill, FaToilet } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAmenities, getCategories } from "../api";
import { IAmenity, ICategory } from "../type";




export default function UploadRoom() {
	const {data: amenities, isLoading: isAmenitiesLoading} = useQuery<IAmenity[]>(["amenities"], getAmenities);
	const {data: categories, isLoading: isCategoriesLoading} = useQuery<ICategory[]>(["categories"], getCategories);
	
	useHostOnlyPage();
	return (
		<ProtectedPage>
			<Box pb={40} mt={10} px={{base: 10, lg: 40,}}>
				<Container>
					<Heading textAlign={"center"}>upload room!!!!!!!!!!!!!!</Heading>
					<VStack spacing={10} as={"form"} mt={5}>
						{/* name */}
						<FormControl>							
							<FormLabel>Name</FormLabel>
							<Input required type="text" />
							<FormHelperText>write your room name</FormHelperText>
						</FormControl>
						{/* country */}
						<FormControl>							
							<FormLabel>Country</FormLabel>
							<Input required type="text" />
						</FormControl>
						{/* city */}
						<FormControl>							
							<FormLabel>City</FormLabel>
							<Input required type="text" />
						</FormControl>
						{/* address */}
						<FormControl>							
							<FormLabel>Address</FormLabel>
							<Input required type="text" />
						</FormControl>
						{/* price */}
						<FormControl>							
							<FormLabel>Price</FormLabel>
							<InputGroup>
								<InputLeftAddon children={<FaMoneyBill />} />
								<Input required type="number" />
							</InputGroup>
						</FormControl>
						{/* rooms */}
						<FormControl>							
							<FormLabel>Rooms</FormLabel>
							<InputGroup>
								<InputLeftAddon><FaBed /></InputLeftAddon>
								<Input required type="number" />
							</InputGroup>
						</FormControl>
						{/* toilets */}
						<FormControl>							
							<FormLabel>Toilets</FormLabel>
							<InputGroup>
								<InputLeftAddon><FaToilet /></InputLeftAddon>
								<Input required type="number" />
							</InputGroup>
						</FormControl>
						{/* description */}
						<FormControl>
							<FormLabel>Description</FormLabel>
							<Textarea />
						</FormControl>
						{/* pet friendly */}
						<FormControl>
							<Checkbox>Pet Friendly?</Checkbox>
						</FormControl>
						{/* room kind */}
						<FormControl>
							<FormLabel>Kind of Room</FormLabel>
							<Select placeholder="Choose a kind">
								<option value={"entire_room"}>Entire Room</option>
								<option value={"private_room"}>Private Room</option>
								<option value={"shared_room"}>Shared Room</option>
							</Select>
							<FormHelperText>
								What kind of room are you renting?
							</FormHelperText>
						</FormControl>
						{/* category */}
						<FormControl>
							<FormLabel>Category</FormLabel>
							<Select placeholder="Choose a category">
								{categories?.map((category) => (
									<option key={category.pk} value={category.pk}>
										{category.name}
									</option>
								))}
							</Select>
							<FormHelperText>
								What category describes your room?
							</FormHelperText>
						</FormControl>
						{/* amenities */}
						<FormControl>
							<FormLabel>Amenities</FormLabel>
							<Grid templateColumns={"1fr 1fr"} gap={5}>
								{amenities?.map((amenity) => (
									<Box key={amenity.pk}>
										<Checkbox>{amenity.name}</Checkbox>
										<FormHelperText>{amenity.description}</FormHelperText>
									</Box>
								))}
							</Grid>
						</FormControl>

						<Button colorScheme="red" size={"lg"} w={"100%"}>
							Upload
						</Button>

					</VStack>
				</Container>
			</Box>
		</ProtectedPage>
	)
}