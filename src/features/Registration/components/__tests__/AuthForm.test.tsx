import React from 'react';

import { userEvent } from '@storybook/testing-library';

import { render, screen } from '@testing-library/react';

import AuthForm from '../form/AuthForm';

describe('auth form tests', () => {
	test('if have a two input, one submit and h1 tag', () => {
		const submit = jest.fn();
		render(<AuthForm title='Регистрация' submit={submit}/>);

		const title = screen.getByText(/Регистрация/i);
		const inputEmail = screen.getByLabelText('Введите email:');
		const inputPassword = screen.getByLabelText('Введите password:');
		const submitBtn = screen.getByRole('button');
		
		expect(inputPassword).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(inputEmail).toBeInTheDocument();
		expect(submitBtn).toBeInTheDocument();
	});
	test('if event submit form', () => {
		const submit = jest.fn();
		render(<AuthForm title='Регистрация' submit={submit} />);

		const userEmailFiled = screen.getByLabelText(/Введите email:/i);
		const userPasswordFiled = screen.getByLabelText(/Введите password:/i);
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
