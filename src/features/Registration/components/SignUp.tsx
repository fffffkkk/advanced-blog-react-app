import React from 'react';

import AuthForm from '@/features/Registration/components/form/AuthForm';

const SignUp = () => {
	const handleSignUp = (form: { email: string, password: string }) => {
		console.log('yes', form);
	};

	return <AuthForm title='Регистрация' submit={handleSignUp} />;
};

export default SignUp;