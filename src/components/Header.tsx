import { Box, Button, HStack, IconButton, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";



export default function Header() {
	const { isOpen:LoginisOpen , onOpen: LoginonOpen , onClose: LoginonClose } = useDisclosure()
	const { isOpen: SignupisOpen, onOpen: SignuponOpen, onClose: SignuponClose } = useDisclosure()

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
				<Button onClick={LoginonOpen} colorScheme={"yellow"}>Login</Button>
				<Button onClick={SignuponOpen} colorScheme={"red"}>SignUp</Button>
			</HStack>
			{/* modals */}
			<LoginModal isOpen={LoginisOpen} onClose={LoginonClose}/>
			<SignupModal isOpen={SignupisOpen} onClose={SignuponClose} />
	
		</HStack>

	)
}