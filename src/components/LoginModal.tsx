import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useToast } from "@chakra-ui/react"
import {FaUserNinja, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { IUsernameLoginError, IUsernameLoginSuccess, IUsernameLoginVariables, usernameLogIn } from "../api";



interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LoginModal({isOpen, onClose}: LoginModalProps) {
	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");
	// const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {		
	// 	const { name, value } = event.currentTarget;
	// 	if (name === "username") {
	// 		setUsername(value);
	// 	} else if (name === "password") {
	// 		setPassword(value);
	// 	}		
	// }
	// const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	console.log(username, password)
	// }

	interface IForm {
		username: string;
		password: string;
	}
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IForm>();
	// mutation
	const toast = useToast();
	const queryClient = useQueryClient();
	const mutation = useMutation(usernameLogIn, {				
    onSuccess: () => {
      toast({
        title: "welcome back!",
        status: "success",
      });
      onClose();
      queryClient.refetchQueries(["me"]);
			reset();
		},
	});
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password });
  };


	return (
		// login & signup modal
		<Modal onClose={onClose} isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent>
				{/* modal header */}
				<ModalHeader>Login</ModalHeader>						
				<ModalCloseButton /> {/* modal close btn */}
				{/* modal body */}
				<ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
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
							<Input isInvalid={Boolean(errors.username?.message)} {...register("username", {required: "write username"})} variant={"filled"} placeholder="username" />
						</InputGroup>

						{/* password */}
						<InputGroup>
							<InputLeftElement children={
								<Box color={"gray.500"}>
									<FaLock />
								</Box>
							} />
							<Input isInvalid={Boolean(errors.password?.message)} type="password" {...register("password", {required: "write password"})} variant={"filled"} placeholder="password" />
						</InputGroup>
					</VStack>

					{mutation.isError ? (
            <Text color="red.500" textAlign={"center"} fontSize="sm">
              Username or Password are wrong
            </Text>
          ) : null}

					{/* login btn */}
					<Button isLoading={mutation.isLoading} type="submit" colorScheme={"red"} w={"100%"} mt={4}>
						Login
					</Button>

					{/* social login */}
					<SocialLogin />

				</ModalBody>
			</ModalContent>
		</Modal>
	);
}