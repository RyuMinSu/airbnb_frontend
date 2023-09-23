import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";
import { useEffect } from 'react';

interface IProtectedPage {
	children: React.ReactNode;
}


export default function ProtectedPage({ children }: IProtectedPage) {
	const { userLoading, user, isLoggedIn } = useUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (!userLoading) {
			if (!isLoggedIn) {
				navigate('/');
			}
		}
	}, [userLoading, isLoggedIn, navigate])


	return (
		<>{ children }</>
	)
}