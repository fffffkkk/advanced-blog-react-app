import React, { FC } from 'react';

import { useParams } from 'react-router-dom';

import { useGetPostsQuery } from '@/store/posts/posts.api';
import { Spinner, Wrong } from '@/components/ui';


const PostDetail: FC = () => {
	const {id} = useParams();
	const {isLoading: isLoadingPost, data: post, isError: isErrorPost} = useGetPostsQuery(id as string);
	
	if (isLoadingPost) return <Spinner />;
	if (isErrorPost) return <Wrong />;
	
	console.log(post);
	
	
	return <div>{post && post.id}</div>;
};

export default PostDetail;
