
import { useEffect } from 'react';
import useUser from '../lib/useUser';
import { useNavigate } from 'react-router-dom';

interface IHostOnlyPage {
	children: React.ReactNode;
}

export default function HostOnlyPage({ children }: IHostOnlyPage) {
	const { user, userLoading } = useUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (!userLoading) {
			if (!user?.is_host) {
				navigate("/")
			}
		}
	}, [user, userLoading, navigate])
	return <>{ children }</>
}