import React, { FC } from 'react';

import styled from 'styled-components';

import { Sidebar, Posts } from '@/features/Feed';

const Feed: FC = () => {
	return (
		<FeedWrapper>
			<Sidebar />
			<Posts />
		</FeedWrapper>
	);
};

const FeedWrapper = styled.div`
	margin-top: 50px;
	display: flex;
`;

export default Feed;
