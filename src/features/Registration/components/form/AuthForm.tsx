import React, { FC, useTransition } from 'react';

import styled from 'styled-components';

import { useChange } from '@/hooks/use-change';
import { stringUpper } from '@/features/Registration';
import { Input, Button } from '@/components/ui';

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

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<FormInner>
				<Header>{stringUpper(title)}</Header>
				<Label>
					Введите email:
					<Input
						type='email'
						value={form.name}
						change={(e) => setForm(e)}
						name='name'
					/>
				</Label>
				<Label>
					Введите пароль:
					<Input
						type='password'
						value={form.token}
						change={(e) => setForm(e)}
						name='token'
					/>
				</Label>
				{isPending ? (
					<h1>Changes Form input...</h1>
				) : (
					<Button type='submit'>{stringUpper('Отправить')}</Button>
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
const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	padding-bottom: 10px;
	font-size: 20px;
	font-weight: bolder;
`;

export default AuthForm;
