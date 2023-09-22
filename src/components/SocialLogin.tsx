import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa"



export default function SocialLogin() {
	const kakaoParams = {
		client_id: "22a65de99735c9323a40e10d89981e73",
		redirect_uri: "http://127.0.0.1:3000/social/kakao",		
		response_type: "code",
	}
	const params = new URLSearchParams(kakaoParams).toString()

	return (
		<Box mb={4}>
			{/* divider */}
			<HStack my={4}>
				<Divider />
				<Text as={"b"}>Or</Text>
				<Divider />
			</HStack>

			{/* github */}
			<VStack spacing={2}>
				<Button as={"a"} href={"https://github.com/login/oauth/authorize?client_id=74a7e93ce84cbdf51d31&scope=read:user,user:email"} w={"100%"} colorScheme={"telegram"} leftIcon={<FaGithub />}>
					Continue Github
				</Button>

				{/* kakao */}
				<Button as={"a"} href={`https://kauth.kakao.com/oauth/authorize?${params}`} w={"100%"} colorScheme={"yellow"} leftIcon={<FaComment />}>
					Continue KaKao
				</Button>
			</VStack>
		</Box>
	)
}