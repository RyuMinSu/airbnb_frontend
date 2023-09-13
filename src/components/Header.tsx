import { Box, Button, HStack, Stack, IconButton, useColorMode, useColorModeValue, useDisclosure, Avatar } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import useUser from "../lib/useUser";




export default function Header() {
	const { userLoading, user, isLoggedIn } = useUser();
	const { isOpen:LoginisOpen , onOpen: LoginonOpen , onClose: LoginonClose } = useDisclosure();
	const { isOpen: SignupisOpen, onOpen: SignuponOpen, onClose: SignuponClose } = useDisclosure();
	const { toggleColorMode } = useColorMode();
	const Icon = useColorModeValue(FaMoon, FaSun);
	const logoColor = useColorModeValue("red.500", "red.200")

	return (	
		<Stack justifyContent={"space-between"} py={5} px={40} borderBottomWidth={1} direction={{sm:"column", md: "row"}} spacing={{sm:4, md:0}}>
					{/* logo */}
			<Box color={logoColor}>
				<Link to="/">
					<FaAirbnb size={48}/>
				</Link>
			</Box>
	
			{/* darkmode & login & signup */}
			<HStack spacing={2}>
				{/* darkmode */}
				<IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" variant={"ghost"} icon={<Icon />} />
				{!userLoading ? (
					!isLoggedIn ? (
						<>
							{/* login */}
							<Button onClick={LoginonOpen} colorScheme={"yellow"}>Login</Button>
							{/* signup */}
							<Button onClick={SignuponOpen} colorScheme={"red"}>SignUp</Button>
						</>
					): (
						<Avatar name={user?.name} src={user?.avatar} size={"md"} />
					)
				) : null }

			</HStack>
			{/* modals */}
			<LoginModal isOpen={LoginisOpen} onClose={LoginonClose}/>
			<SignupModal isOpen={SignupisOpen} onClose={SignuponClose} />
	
		</Stack>

	)
}