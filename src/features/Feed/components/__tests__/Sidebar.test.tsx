import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Sidebar } from '@/features/Feed';
import { store } from '@/store';
import { HelpersProvider, HelpersRoutes } from '@/helpers';

describe('Sidebar test', () => {
	test('have all links', () => {
		render(
			<HelpersProvider>
				<HelpersRoutes>
					<Sidebar />
				</HelpersRoutes>
			</HelpersProvider>
		);
		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(4);
	});
});
