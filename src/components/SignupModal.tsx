import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react"
import { FaUserNinja, FaLock, FaEnvelope, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";



interface SignupModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function SignupModal({isOpen, onClose}: SignupModalProps) {
	return (
		// login & signup modal
		<Modal onClose={onClose} isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent>
				{/* modal header */}
				<ModalHeader>SignUp</ModalHeader>						
				<ModalCloseButton /> {/* modal close btn */}
				{/* modal body */}
				<ModalBody>
					{/* name & email & username & password */}
					<VStack>
						{/* name */}
						<InputGroup>
							<InputLeftElement children={
								<Box color={"gray.500"}>
									<FaUserSecret />
								</Box>
							}
							/>					
							<Input variant={"filled"} placeholder="name" />
						</InputGroup>

						{/* email */}
						<InputGroup>
							<InputLeftElement children={
								<Box color={"gray.500"}>
									<FaEnvelope />
								</Box>
							}
							/>					
							<Input variant={"filled"} placeholder="email" />
						</InputGroup>
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
						SignUp
					</Button>

					{/* social login */}
					<SocialLogin />

				</ModalBody>
			</ModalContent>
		</Modal>
	);
}