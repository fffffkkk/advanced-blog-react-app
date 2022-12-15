import React from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import { Navbar } from '@/features/Home';
import { HelpersProvider, HelpersRoutes } from '@/helpers';

describe('navbar test', () => {
	test('have a title and navigation', () => {
		render(
			<HelpersProvider>
				<HelpersRoutes>
					<Navbar />
				</HelpersRoutes>
			</HelpersProvider>
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
