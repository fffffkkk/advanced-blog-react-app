import React, { FC } from 'react';
import styled from 'styled-components';

interface ContentLayoutProps {
	children: React.ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({children}) => {
	return (
		<ContentWrapper>
			{children}
		</ContentWrapper>
	);
};

const ContentWrapper = styled.div`
  width: 100%;
  background-color: #1ea7fd;
  border-radius: 15px;
  padding: 10px;
`;

export default ContentLayout;
