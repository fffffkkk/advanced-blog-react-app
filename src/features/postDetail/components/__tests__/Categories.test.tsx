import React from 'react';

import { render, screen } from '@testing-library/react';

import { Categories } from '@/features/postDetail';

describe('Categories component tests', () => {
	test('one item in data', () => {
		render(<Categories data={['some']} />);

		const category = screen.getByText('some');

		expect(category).toBeInTheDocument();
	}),
		test('many items in data', () => {
			render(<Categories data={['1', '2']} />);

			const categoryOne = screen.getByText('1');
			const categoryTwo = screen.getByText('2');

			expect(categoryOne).toBeInTheDocument();
			expect(categoryTwo).toBeInTheDocument();
		}),
		test('empty item in data', () => {
			render(<Categories data={[]} />);

			const categorySome = screen.queryByText('some');

			expect(categorySome).not.toBeInTheDocument();
		});
});
