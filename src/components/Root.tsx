import { Box, Button, HStack, IconButton } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import { FaAirbnb, FaMoon } from "react-icons/fa";



export default function Root() {
	return (
		// header
		<Box>
			<HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
				{/* logo */}
				<Box color={"red"}>
					<Link to="/">
						<FaAirbnb size={48}/>
					</Link>
				</Box>
				{/* darkmode & login & signup */}
				<HStack spacing={2}>
					<IconButton aria-label="Toggle dark mode" variant={"ghost"} icon={<FaMoon />} />					
					<Button colorScheme={"yellow"}>Login</Button>
					<Button colorScheme={"red"}>SignUp</Button>
				</HStack>
			</HStack>

			<Outlet />

		</Box>
		
	)
};