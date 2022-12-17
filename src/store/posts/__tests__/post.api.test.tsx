import React from 'react';

import { render, waitFor, screen } from '@testing-library/react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import { server } from '@/mocks/api/server';
import { postAPI } from '@/store/posts/posts.api';
import { Posts } from '@/features/Feed';
import { rest } from 'msw';

describe('tests api posts', () => {
	beforeAll(() => {
		server.listen();
	});

	afterEach(() => {
		server.resetHandlers();
	});

	afterAll(() => {
		server.close();
	});

	test('if posts in document', async () => {
		render(
			<ApiProvider api={postAPI}>
				<Posts />
			</ApiProvider>
		);
		
		expect(screen.getByText('IS LOADING...')).toBeInTheDocument();
		
		const rows = await screen.queryAllByTestId('items');

		waitFor(() => {
			expect(rows).toHaveLength(4);
		})
	})
	test('if some wrong int posts load', async () => {
		server.use(
			rest.get('*', (_req, res, ctx) =>
				res.once(ctx.status(500), ctx.json({message: "It`s WRONG..."}))
			)
		);
		
		render(
			<ApiProvider api={postAPI}>
				<Posts />
			</ApiProvider>
		);
		
		const errorText = await screen.findByText('SOME WRONG...');
		
		await waitFor(() => {
			expect(errorText.textContent).toBe("SOME WRONG...");
		})
	});
});
