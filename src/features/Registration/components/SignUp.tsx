import React from 'react';

import { useActions } from '@/hooks/use-actions';
import { useTypedSelector } from '@/hooks/use-typed-selector';
import AuthForm from '@/features/Registration/components/form/AuthForm';

const SignUp = () => {
	const { addUser } = useActions();
	const { user } = useTypedSelector((state) => state.user);

	const handleSignUp = (form: { email: string, password: string }) => {
		addUser({
			id: Date.now(),
			name: form.email,
			token: form.password,
		});
	};

	console.log(user);

	return <AuthForm title='Регистрация' submit={handleSignUp} />;
};

export default SignUp;
