import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react"
import {FaUserNinja, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";



interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LoginModal({isOpen, onClose}: LoginModalProps) {
	return (
		// login & signup modal
		<Modal onClose={onClose} isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent>
				{/* modal header */}
				<ModalHeader>Login</ModalHeader>						
				<ModalCloseButton /> {/* modal close btn */}
				{/* modal body */}
				<ModalBody>
					{/* username & password */}
					<VStack>
						{/* username */}
						<InputGroup>
							<InputLeftElement children={
								<Box color={"gray.500"}>
									<FaUserNinja />
								</Box>
							}
							/>					
							<Input variant={"filled"} placeholder="username" />
						</InputGroup>

						{/* password */}
						<InputGroup>
							<InputLeftElement children={
								<Box color={"gray.500"}>
									<FaLock />
								</Box>
							} />
							<Input variant={"filled"} placeholder="password" />
						</InputGroup>
					</VStack>

					{/* login btn */}
					<Button colorScheme={"red"} w={"100%"} mt={4}>
						Login
					</Button>

					{/* social login */}
					<SocialLogin />

				</ModalBody>
			</ModalContent>
		</Modal>
	);
}