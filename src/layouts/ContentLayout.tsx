import React, { FC } from 'react';

import styled from 'styled-components';

const BodyWrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	width: 100%;
	height: 100%;
`

interface ContentLayoutProps {
	children: React.ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
	return <BodyWrapper>{children}</BodyWrapper>;
};

export default ContentLayout;
