import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react"
import {FaUserNinja, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";



interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LoginModal({isOpen, onClose}: LoginModalProps) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {		
		const { name, value } = event.currentTarget;
		if (name === "username") {
			setUsername(value);
		} else if (name === "password") {
			setPassword(value);
		}		
	}
	const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(username, password)
	}

	return (
		// login & signup modal
		<Modal onClose={onClose} isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent>
				{/* modal header */}
				<ModalHeader>Login</ModalHeader>						
				<ModalCloseButton /> {/* modal close btn */}
				{/* modal body */}
				<ModalBody as={"form"} onSubmit={onSubmit as any}>
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
							<Input required name="username" onChange={onChange} value={username} variant={"filled"} placeholder="username" />
						</InputGroup>

						{/* password */}
						<InputGroup>
							<InputLeftElement children={
								<Box color={"gray.500"}>
									<FaLock />
								</Box>
							} />
							<Input required type="password" name="password" onChange={onChange} value={password} variant={"filled"} placeholder="password" />
						</InputGroup>
					</VStack>

					{/* login btn */}
					<Button type="submit" colorScheme={"red"} w={"100%"} mt={4}>
						Login
					</Button>

					{/* social login */}
					<SocialLogin />

				</ModalBody>
			</ModalContent>
		</Modal>
	);
}