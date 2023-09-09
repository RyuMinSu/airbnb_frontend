import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";



export default function NotFound() {
	return (		
			<VStack minH={"100vh"} bg={"gray.200"} justifyContent={"center"}>
				<Heading>Page Not Found</Heading>
				<Text>you are wrong</Text>
				<Link to="/">
					<Button variant={"link"} colorScheme={"twitter"}>Go Home</Button>
				</Link>
			</VStack>		
	)
}