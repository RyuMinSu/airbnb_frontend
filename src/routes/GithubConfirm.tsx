import { Heading, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogin } from "../api";
import { QueryClient, useQueryClient } from "@tanstack/react-query";


export default function GithubConfirm() {	
	const { search } = useLocation();
	const toast = useToast();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const confirmLogin = async() => {
		const params = new URLSearchParams(search);
		const code = params.get("code");
		if (code) {
			const status = await githubLogin(code);
			if (status === 200) {
				toast({
					status: "success",
					title: "welcome",
					description: "welcome back",
					position: "bottom-right"
				})
				queryClient.refetchQueries(["me"])
				navigate("/")
			}
			
		}
	}
	useEffect(() => {
		confirmLogin();
	}, [])

	return (		
		<VStack mt={40} justifyContent={"center"}>
			<Heading>Processing Login...</Heading>
			<Text>Don't go anywhere...</Text>
			<Spinner size={"lg"} />
		</VStack>
	)
}