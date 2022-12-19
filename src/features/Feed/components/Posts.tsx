import React, { FC } from 'react';

import { useGetAllPostsQuery } from '@/store/posts/posts.api';
import { Spinner, Wrong } from '@/components/ui';
import { GridLayout } from '@/layouts';
import { PostsItem } from '@/features/Feed';

const Posts: FC = () => {
	const {
		isLoading,
		data: posts,
		isError,
	} = useGetAllPostsQuery();

	if (isLoading) return <Spinner />;
	if (isError) return <Wrong />;
	
	return (
		<GridLayout>
			{posts && posts.map((post) => <PostsItem post={post} key={post.id} />)}
		</GridLayout>
	);
};

export default Posts;
