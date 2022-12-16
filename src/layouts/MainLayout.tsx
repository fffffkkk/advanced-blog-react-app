import React, { FC } from 'react';

import styled from 'styled-components';

const BodyWrapper = styled.div`
	width: 100vw;
	height: 100vh;
`;
const BodyInner = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	height: 100%;
`;

interface ContentLayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<ContentLayoutProps> = ({ children }) => {
	return (
		<BodyWrapper>
			<BodyInner>{children}</BodyInner>
		</BodyWrapper>
	);
};

export default MainLayout;
