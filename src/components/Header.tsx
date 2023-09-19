import { Box, Button, HStack, Stack, IconButton, useColorMode, useColorModeValue, useDisclosure, Avatar, Menu, MenuButton, MenuList, MenuItem, Toast, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import useUser from "../lib/useUser";
import { logout } from "../api";
import { QueryClient, useQueryClient } from "@tanstack/react-query";




export default function Header() {
	const { userLoading, user, isLoggedIn } = useUser();
	const { isOpen:LoginisOpen , onOpen: LoginonOpen , onClose: LoginonClose } = useDisclosure();
	const { isOpen: SignupisOpen, onOpen: SignuponOpen, onClose: SignuponClose } = useDisclosure();
	const { toggleColorMode } = useColorMode();
	const Icon = useColorModeValue(FaMoon, FaSun);
	const logoColor = useColorModeValue("red.500", "red.200")
	const toast = useToast();
	const queryClient = useQueryClient();
	const onLogOut = async() => {
		const toastId = toast({
			title: "bye",
			description: "see you",
			status: "loading",
			position: "bottom-right",
		})

		await logout();

		// logout후 refetch
		queryClient.refetchQueries(['me']);

		setTimeout(() => {
			toast.update(toastId, {
				title: "bye2",
				description: "see you2",
				status: "success"
			})}, 3000)
	}

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
						<Menu>
							<MenuButton>
								<Avatar name={user?.name} src={user?.avatar} size={"md"} />
							</MenuButton>
							{/* logout btn */}
							<MenuList>
								<MenuItem onClick={onLogOut}>Log out</MenuItem>
							</MenuList>
						</Menu>
					)
				) : null }

			</HStack>
			{/* modals */}
			<LoginModal isOpen={LoginisOpen} onClose={LoginonClose}/>
			<SignupModal isOpen={SignupisOpen} onClose={SignuponClose} />
	
		</Stack>

	)
}