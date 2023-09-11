import { useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from './../type.d';
import { Avatar, Box, Container, Grid, GridItem, HStack, Heading, Img, Skeleton, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";



export default function RoomDetail() {
	const { roomPk } = useParams() //url에 들어있는 값 가져오기
	const { isLoading, data } = useQuery<IRoomDetail>(["rooms", roomPk], getRoom)
	const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<IReview[]>(["rooms", roomPk, "reviews"], getRoomReviews)

	return (		
		<Box mt={10} px={{base: 10, lg: 40}}>
			{/* room name: isLoading이 false일때 skeleton보여주기 */}
			<Skeleton h={"43px"} w={"25%"} isLoaded={!isLoading}>
				<Heading>
					{data?.name}
				</Heading>
			</Skeleton>

			{/* rating, review_count.... */}

			{/* photos */}
			<Grid rounded={"xl"} overflow={"hidden"} mt={8} gap={3} templateColumns={"repeat(4, 1fr)"} h={"60vh"} templateRows={"1fr 1fr"}>
				{[0,1,2,3,4].map((index) => (
					<GridItem colSpan={index===0 ? 2: 1} rowSpan={index===0 ? 2: 1} key={index} overflow={"hidden"}>
						<Skeleton isLoaded={!isLoading} h={"100%"} w={"100%"}>
							<Img h={"100%"} w={"100%"}  objectFit={"cover"} src={data?.photos[index].file} />
						</Skeleton>
					</GridItem>
				))}
			</Grid>

			{/* host & room detail text & host avatar*/}
			<HStack mt={10} justifyContent={"space-between"} w={"40%"}>
				{/* host & room detail */}
				<VStack alignItems={"flex-start"}>
					{/* host */}
					<Skeleton isLoaded={!isLoading} h={"30px"}>
						<Heading fontSize={"xl"}>
							House hosted by {data?.owner.name}
						</Heading>
					</Skeleton>
					{/* room detail */}
					<Skeleton isLoaded={!isLoading} h={"30px"}>
						<HStack justifyContent={"flex-start"} w={"100%"}>
							<Text>{data?.toilets} toilet{data?.toilets === 1 ? "": "s"}</Text>
							<Text>{data?.rooms} room{data?.rooms === 1 ? "": "s"}</Text>
						</HStack>
					</Skeleton>
				</VStack>
				{/* host avatar */}
				<Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar} />
			</HStack>

			{/* reviews summary & reviews */}
			<Box mt={10}>				
				{/* reviews summary */}
				<Skeleton isLoaded={!isReviewsLoading} h={"30px"}>
					<Heading fontSize={"2xl"} mb={5}>
						<HStack>
							{/* room rating */}
							<FaStar />							
							<Text>
								{data?.rating}
							</Text>
							<Text>▪</Text>
							{/* reviews count */}
							<Text>{reviewsData?.length} review{reviewsData?.length === 1 ? "": "s"}</Text>
						</HStack>
					</Heading>
				</Skeleton>

				{/* reviews */}
				<Container maxW={"container.lg"} marginX={"none"} mt={16}>
					<Grid templateColumns={"repeat(2, 1fr)"} rowGap={10}>
						{reviewsData?.map((review, index) => (
							<VStack key={index} alignItems={"flex-start"}>
								<HStack>
									<Avatar name={review.user.name} src={review.user.avatar} size={"md"} />
									<VStack alignItems={"flex-start"} spacing={0}>
										<Heading fontSize={"md"}>{review.user.name}</Heading>
										<HStack spacing={1}>
											<FaStar size={"12px"} />
											<Text>{review.rating}</Text>
										</HStack>
									</VStack>
									<Text></Text>
								</HStack>
								<Text>{review.payload}</Text>

							</VStack>
						))}
					</Grid>
				</Container>


			</Box>
		</Box>
	)
}