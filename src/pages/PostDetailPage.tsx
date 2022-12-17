import React, { FC } from 'react';

import { ContentLayout } from '@/layouts';
import { PostDetail } from '@/features/postDetail';

const PostDetailPage: FC = () => {
	
	return (
		<ContentLayout>
			<PostDetail />
		</ContentLayout>
	);
};

export default PostDetailPage;
