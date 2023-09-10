import { Box} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Header";



export default function Root() {
	return (		
		<Box>
			{/* header */}
			<Header />

			{/* middle */}
			<Outlet />

			{/* ReactQueryDevtools */}
			<ReactQueryDevtools />

		</Box>
		
	)
};