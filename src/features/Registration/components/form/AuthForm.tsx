import React, { FC, useTransition } from 'react';

import styled from 'styled-components';

import { useChange } from '@/hooks/use-change';
import { InputForm, stringUpper } from '@/features/Registration';
import { Button } from '@/components/ui';

interface AuthFormProps {
	title: string;
	submit: (data: { name: string, token: string }) => void;
}

const AuthForm: FC<AuthFormProps> = ({ title, submit }) => {
	const [form, setForm] = useChange({
		name: '',
		token: '',
	});
	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		startTransition(() => {
			submit(form);
		});
	};
	const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(e);
	};

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<FormInner>
				<Header>{stringUpper(title)}</Header>
				<InputForm
					test-id='test-input'
					name='name'
					type='email'
					value={form.value}
					change={handleChangeForm}
				/>
				<InputForm
					test-id='test-input'
					name='token'
					type='password'
					value={form.token}
					change={handleChangeForm}
				/>
				{isPending ? (
					<h1>Changes Form input...</h1>
				) : (
					<Button test-id='test-btn' type='submit'>{stringUpper('Отправить')}</Button>
				)}
			</FormInner>
		</FormWrapper>
	);
};

const FormWrapper = styled.form`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const FormInner = styled.div`
	width: 500px;
	height: 500px;
	margin: 0 auto;
	padding: 20px;
	background-color: #1ea7fd;
	border-radius: 15px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Header = styled.h1`
	font-weight: bold;
	font-size: 30px;
	padding-bottom: 10px;
`;

export default AuthForm;
