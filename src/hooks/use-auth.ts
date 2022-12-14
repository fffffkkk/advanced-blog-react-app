import { useTypedSelector } from '@/hooks/use-typed-selector';

export const useAuth = () => {
	const { user } = useTypedSelector((state) => state.user);

	return {
		isAuth: !!user.id,
		id: user.id,
		name: user.name,
		token: user.token,
	};
};
