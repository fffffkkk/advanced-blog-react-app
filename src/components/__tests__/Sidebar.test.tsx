import React from 'react';

import { render, screen } from '@testing-library/react';

import { RenderWithProviderRouter } from '@/helpers';
import { Sidebar } from '@/components';

describe('Sidebar test', () => {
	test('if have all links', () => {
		render(
			<RenderWithProviderRouter>
				<Sidebar />
			</RenderWithProviderRouter>
		);
		
		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(4);
	});
});
