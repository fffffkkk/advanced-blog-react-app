import React, { FC } from 'react';

import styled from 'styled-components';

import { useActions } from '@/hooks/use-actions';
import { useGetAllPostsQuery } from '@/store/posts/posts.api';
import { Spinner, Wrong } from '@/components/ui';
import { ContentLayout, GridLayout } from '@/layouts';
import { Search } from '@/features/Search';
import GridOption from '@/assets/image/grid.png';
import FlexOption from '@/assets/image/menu-burger.png';
import PostsItem from '@/features/Feed/components/PostsItem';

const Posts: FC = () => {
	const { changeGrid } = useActions();
	const {
		isLoading: isLoadingPosts,
		data: posts,
		isError: isErrorPosts,
	} = useGetAllPostsQuery();

	if (isLoadingPosts) return <Spinner />;
	if (isErrorPosts) return <Wrong />;

	return (
		<ContentLayout>
			<PostsWrapper>
				<>select</>
				<PostsBtns>
					<PostsBtn onClick={() => changeGrid({ grid: 'grid' })}>
						<PostsOptionsImage src={GridOption} alt='gridOption' />
					</PostsBtn>
					<PostsBtn onClick={() => changeGrid({ grid: 'flex' })}>
						<PostsOptionsImage src={FlexOption} alt='flexOption' />
					</PostsBtn>
				</PostsBtns>
			</PostsWrapper>
			<Search />
			<GridLayout>
				{posts && posts.map((post) => <PostsItem test-id='items' post={post} key={post.id} />)}
			</GridLayout>
		</ContentLayout>
	);
};

const PostsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const PostsBtns = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
`;
const PostsBtn = styled.button`
	padding: 5px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in;
	:active,
	:focus,
	:hover {
		background-color: #b7b7b7;
	}
`;
const PostsOptionsImage = styled.img`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Posts;
