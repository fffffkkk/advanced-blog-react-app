import App from './App';
import { render, screen } from '@testing-library/react';
import React from 'react';

test('render app component', () => {
	render(<App />);
	const elem = screen.getByText(/hello world/i);
	expect(elem).toBeInTheDocument();
})
