import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { githubLogin } from "../api";


export default function GithubConfirm() {	
	const { search } = useLocation();
	const confirmLogin = async() => {
		const params = new URLSearchParams(search);
		const code = params.get("code");
		if (code) {
			await githubLogin(code);
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