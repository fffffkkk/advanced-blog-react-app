import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import { Navbar } from '@/features/Home';
import { store } from '@/store';

describe('navbar test', () => {
	test('have a title and navigation', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</Provider>
		);

		const title = screen.getByText(/BLOG/i);
		const dropdown = screen.getByRole('dropdown');

		userEvent.click(dropdown);

		const navigation = screen.getAllByRole('nav');
		const logOutBtn = screen.getByRole('button');

		expect(title).toBeInTheDocument();
		expect(navigation).toHaveLength(2);
		expect(logOutBtn).toBeInTheDocument();
	});
});
