import React, { FC } from 'react';

import styled from 'styled-components';

import { useTypedSelector } from '@/hooks/use-typed-selector';

interface GridLayoutProps {
	children: React.ReactNode;
}

const GridLayout: FC<GridLayoutProps> = ({ children }) => {
	const { grid } = useTypedSelector((state) => state.grid);

	return (
		<>
			{grid === 'grid' ? (
				<GridWrapper>{children}</GridWrapper>
			) : (
				<FlexWrapper>{children}</FlexWrapper>
			)}
		</>
	);
};

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 30px;
	@media (max-width: 1000px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media (max-width: 750px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media (max-width: 500px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;
const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 30px;
	background-color: #66bf3c;
`;

export default GridLayout;
