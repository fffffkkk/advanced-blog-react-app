import React, { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Spinner, Wrong } from '@/components/ui';
import {
	useDeletePostMutation,
	useGetPostsQuery,
	useUpdatePostMutation,
} from '@/store/posts/posts.api';
import { useToggle } from '@/hooks/use-toggle';
import { useChange } from '@/hooks/use-change';
import { PostDetailInfo } from '@/features/postDetail';
import UploadPostImage from '@/features/Feed/components/UploadPostImage';

const PostDetail: FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const {
		isLoading: isLoadingPost,
		data: post,
		isError: isErrorPost,
	} = useGetPostsQuery(id as string);
	const [deletePost] = useDeletePostMutation();
	const [updatePost] = useUpdatePostMutation();
	const [form, setForm] = useChange({
		id: id,
		title: '',
		desc: '',
		image: ''
	});
	const [visibleInput, setVisibleInput] = useToggle(true);

	if (isLoadingPost || !post) return <Spinner />;
	if (isErrorPost) return <Wrong />;

	const handleClickRemovePost = () => {
		navigate('/');
		deletePost(post.id);
	};
	const handleClickCreatePost = () => {
		setVisibleInput();
		updatePost(form);
	};

	return (
		<PostDetailWrapper>
			<PostDetailInner>
				<UploadPostImage image={post.image} visible={visibleInput} />
				<PostDetailInfoWrapper>
					<PostDetailInfo post={post} visibleInput={visibleInput} form={form} setForm={setForm}/>
					<PostDetailBtns>
						{visibleInput ? (
							<>
								<Button type='button' click={setVisibleInput}>
									Edit Post
								</Button>
								<Button type='button' click={handleClickRemovePost}>
									Remove Post
								</Button>
							</>
						) : (
							<>
								<Button type='button' click={handleClickCreatePost}>
									Save Change
								</Button>
							</>
						)}
					</PostDetailBtns>
				</PostDetailInfoWrapper>
			</PostDetailInner>
		</PostDetailWrapper>
	);
};

const PostDetailWrapper = styled.div`
	padding: 5px;
`;
const PostDetailInner = styled.div`
	display: flex;
	gap: 20px;
`;
const PostDetailInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const PostDetailBtns = styled.div`
	display: flex;
	gap: 10px;
`;

export default PostDetail;
