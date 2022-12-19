import React from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import { Navbar } from '@/features/Home';
import { RenderWithProviderRouter } from '@/helpers';

describe('navbar test', () => {
	test('if have a title and navigation', () => {
		render(
			<RenderWithProviderRouter>
				<Navbar />
			</RenderWithProviderRouter>
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
