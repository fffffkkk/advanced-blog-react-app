import React from 'react';

import { render, screen } from '@testing-library/react';

import { HelpersProvider, HelpersRoutes } from '@/helpers';
import { Sidebar } from '@/components';

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
