import React from 'react';

import { render, screen } from '@testing-library/react';

import AuthForm from '../form/AuthForm';
import { userEvent } from '@storybook/testing-library';

describe('auth form tests', () => {
	test('if have a two input, one submit and h1 tag', () => {
		const submit = jest.fn();
		render(<AuthForm title='Регистрация' submit={submit}/>);

		const title = screen.getByText('РЕГИСТРАЦИЯ');
		const userEmailFiled = screen.getByLabelText(/Введите email:/i);
		const userPasswordFiled = screen.getByLabelText(/Введите пароль:/i);
		const submitBtn = screen.getByRole('button');

		expect(title).toBeInTheDocument();
		expect(userEmailFiled).toBeInTheDocument();
		expect(userPasswordFiled).toBeInTheDocument();
		expect(submitBtn).toBeInTheDocument();
	});
	test('if event submit form', () => {
		const submit = jest.fn();
		render(<AuthForm title='Регистрация' submit={submit} />);

		const userEmailFiled = screen.getByLabelText(/Введите email:/i);
		const userPasswordFiled = screen.getByLabelText(/Введите пароль:/i);
		const submitBtn = screen.getByText(/Отправить/i);

		userEvent.type(userEmailFiled, '1234@123.com');
		userEvent.type(userPasswordFiled, '1234567890');
		userEvent.click(submitBtn);

		expect(submit).toHaveBeenCalledWith({
			name: '1234@123.com',
			token: '1234567890',
		});
	});
});

export {};
