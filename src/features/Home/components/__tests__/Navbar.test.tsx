import React from 'react';

import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { Navbar } from '@/features/Home';
import { store } from '@/store';
import { MemoryRouter } from 'react-router-dom';

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
		const navigation = screen.getAllByRole('nav');

		expect(title).toBeInTheDocument();
		expect(navigation).toHaveLength(2);
	});
});
