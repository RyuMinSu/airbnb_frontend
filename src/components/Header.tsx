import { Box, Button, HStack, IconButton, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";



export default function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (	
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
				<Button onClick={onOpen} colorScheme={"yellow"}>Login</Button>
				<Button onClick={onOpen} colorScheme={"red"}>SignUp</Button>
			</HStack>
			{/* modals */}
			<LoginModal isOpen={isOpen} onClose={onClose}/>
	
		</HStack>

	)
}