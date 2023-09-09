import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa"



export default function SocialLogin() {
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
				<Button w={"100%"} colorScheme={"telegram"} leftIcon={<FaGithub />}>
					Continue Github
				</Button>

				{/* kakao */}
				<Button w={"100%"} colorScheme={"yellow"} leftIcon={<FaComment />}>
					Continue KaKao
				</Button>
			</VStack>
		</Box>
	)
}