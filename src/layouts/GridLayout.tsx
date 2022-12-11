import React, { FC } from 'react';

import styled from 'styled-components';

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1fr);
`;

interface GridLayoutProps {
	children: React.ReactNode;
}

const GridLayout: FC<GridLayoutProps> = ({ children }) => {
	return <GridWrapper>{children}</GridWrapper>;
};

export default GridLayout;
