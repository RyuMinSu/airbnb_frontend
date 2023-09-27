import { Box, Button, Checkbox, Container, FormControl, FormHelperText, FormLabel, Grid, Heading, Input, InputGroup, InputLeftAddon, Select, Text, Textarea, Toast, VStack, useToast } from "@chakra-ui/react";
import useHostOnlyPage from "../components/HostOnlyPage"
import ProtectedPage from "../components/ProtectedPage"
import { FaBed, FaDollarSign, FaMoneyBill, FaToilet } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IUploadRoomVariables, getAmenities, getCategories, uploadRoom } from "../api";
import { IAmenity, ICategory } from "../type";
import { useForm } from "react-hook-form";





export default function UploadRoom() {
	const {register, handleSubmit} = useForm<IUploadRoomVariables>();
	const {data: amenities, isLoading: isAmenitiesLoading} = useQuery<IAmenity[]>(["amenities"], getAmenities);
	const {data: categories, isLoading: isCategoriesLoading} = useQuery<ICategory[]>(["categories"], getCategories);
	const toast = useToast();
	const mutation = useMutation(uploadRoom, {
		onSuccess: () => {
			toast({
				status: "success",
				title: "Room Created",
				position: "bottom-right"
			})
		}
	});
	const onSubmit = (data:IUploadRoomVariables) => {
		mutation.mutate(data);
	};
	
	useHostOnlyPage();
	return (
		<ProtectedPage>
			<Box pb={40} mt={10} px={{base: 10, lg: 40,}}>
				<Container>
					<Heading textAlign={"center"}>upload room!!!!!!!!!!!!!!</Heading>
					<VStack onSubmit={handleSubmit(onSubmit)} spacing={10} as={"form"} mt={5}>
						{/* name */}
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input {...register("name", {"required": true})} required type="text" />
							<FormHelperText>write your room name</FormHelperText>
						</FormControl>
						{/* country */}
						<FormControl>							
							<FormLabel>Country</FormLabel>
							<Input {...register("country", {"required": true})} required type="text" />
						</FormControl>
						{/* city */}
						<FormControl>							
							<FormLabel>City</FormLabel>
							<Input {...register("city", {"required": true})} required type="text" />
						</FormControl>
						{/* address */}
						<FormControl>							
							<FormLabel>Address</FormLabel>
							<Input {...register("address", {"required": true})} required type="text" />
						</FormControl>
						{/* price */}
						<FormControl>							
							<FormLabel>Price</FormLabel>
							<InputGroup>
								<InputLeftAddon children={<FaMoneyBill />} />
								<Input {...register("price", {"required": true})} required type="number" />
							</InputGroup>
						</FormControl>
						{/* rooms */}
						<FormControl>							
							<FormLabel>Rooms</FormLabel>
							<InputGroup>
								<InputLeftAddon><FaBed /></InputLeftAddon>
								<Input {...register("rooms", {"required": true})} required type="number" />
							</InputGroup>
						</FormControl>
						{/* toilets */}
						<FormControl>							
							<FormLabel>Toilets</FormLabel>
							<InputGroup>
								<InputLeftAddon><FaToilet /></InputLeftAddon>
								<Input {...register("toilets", {"required": true})} required type="number" />
							</InputGroup>
						</FormControl>
						{/* description */}
						<FormControl>
							<FormLabel>Description</FormLabel>
							<Textarea {...register("description", {"required": true})} />
						</FormControl>
						{/* pet friendly */}
						<FormControl>
							<Checkbox {...register("pet_friendly", {"required": true})}>Pet Friendly?</Checkbox>
						</FormControl>
						{/* room kind */}
						<FormControl>
							<FormLabel>Kind of Room</FormLabel>
							<Select {...register("kind", {"required": true})} placeholder="Choose a kind">
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
							<Select {...register("category", {"required": true})} placeholder="Choose a category">
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
										<Checkbox value={amenity.pk} {...register("amenities", {"required": true})}>{amenity.name}</Checkbox>
										<FormHelperText>{amenity.description}</FormHelperText>
									</Box>
								))}
							</Grid>
						</FormControl>

						{mutation.isError ? 
						<Text color={"red.500"}>
							Something went wrong
						</Text>
						: null}
						<Button type="submit" isLoading={mutation.isLoading} colorScheme="red" size={"lg"} w={"100%"}>
							Upload
						</Button>

					</VStack>
				</Container>
			</Box>
		</ProtectedPage>
	)
}