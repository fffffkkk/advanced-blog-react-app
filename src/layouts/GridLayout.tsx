import React, { FC } from 'react';

import styled from 'styled-components';

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	@media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

interface GridLayoutProps {
	children: React.ReactNode;
}

const GridLayout: FC<GridLayoutProps> = ({ children }) => {
	return <GridWrapper>{children}</GridWrapper>;
};

export default GridLayout;
