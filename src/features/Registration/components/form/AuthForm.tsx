import React, { FC } from 'react';

import Input from '@/components/ui/Input';
import { useChange } from '@/features/Registration/hooks/use-change';

interface AuthFormProps {
	title: string;
	submit: (data: { email: string, password: string }) => void;
}

const AuthForm: FC<AuthFormProps> = ({ title, submit }) => {
	const [form, setForm] = useChange({
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		submit(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Wrapper>{title}</Wrapper>
			<label>
				Введите email:
				<Input
					type='email'
					value={form.email}
					change={(e) => setForm(e)}
					name='email'
				/>
			</label>
			<label>
				Введите пароль:
				<Input
					type='password'
					value={form.password}
					change={(e) => setForm(e)}
					name='password'
				/>
			</label>
			<button type='submit'>Отправить</button>
		</form>
	);
};

export default AuthForm;
