import React from 'react';

import AuthForm from '@/features/Registration/components/form/AuthForm';

const SignIn = () => {
	const handleSignIn = (form: { email: string, password: string }) => {
		console.log('yes', form);
	};
	
	return <AuthForm title='Авторизация' submit={handleSignIn} />;
};

export default SignIn;
