import React from 'react';

import { useActions } from '@/hooks/use-actions';
import { useAddUserMutation } from '@/store/user/user.api';
import AuthForm from '@/features/Registration/components/form/AuthForm';

const SignUp = () => {
	const { addUser } = useActions();
	const [mutationUser] = useAddUserMutation();

	const handleSignUp = (form: { name: string, token: string }) => {
		const currentUser = {
			id: Date.now(),
			name: form.name,
			token: form.token,
		};

		addUser(currentUser);
		mutationUser(currentUser);
	};

	return <AuthForm title='Авторизация' submit={handleSignUp} />;
};

export default SignUp;
