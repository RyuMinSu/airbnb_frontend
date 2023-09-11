import { useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';
import { getRoom } from "../api";
import { IRoomDetail } from './../type.d';
import { Box, Grid, GridItem, Heading, Img, Skeleton } from "@chakra-ui/react";



export default function RoomDetail() {
	const { roomPk } = useParams() //url에 들어있는 값 가져오기
	const { isLoading, data } = useQuery<IRoomDetail>(["rooms", roomPk], getRoom)

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
		</Box>
	)
}