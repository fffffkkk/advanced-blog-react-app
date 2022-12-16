import React, { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Input, Spinner, Wrong } from '@/components/ui';
import {
	useDeletePostMutation,
	useGetPostsQuery,
	useUpdatePostMutation,
} from '@/store/posts/posts.api';
import { useToggle } from '@/hooks/use-toggle';
import { useChange } from '@/hooks/use-change';
import EyeIcon from '@/assets/image/eye.png';

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
	});
	const [visibleInput, setVisibleInput] = useToggle(true);

	if (isLoadingPost || !post) return <Spinner />;
	if (isErrorPost) return <Wrong />;

	const handleClickRemovePost = () => {
		deletePost(post.id);
		navigate('/');
	};
	const handleClickCreatePost = () => {
		setVisibleInput();
		updatePost(form);
	};

	return (
		<PostDetailWrapper>
			<PostDetailInner>
				<PostDetailImg src={post.image} alt='post-img' />
				<PostDetailInfo>
					<PostDetailText>
						<PostDetailID> id: {post.id} </PostDetailID>
						<PostDetailTitle>
							title:
							<Input
								disabled={visibleInput}
								type='text'
								value={visibleInput ? post.title : form.title}
								change={(e) => setForm(e)}
								name='title'
							/>
						</PostDetailTitle>
						<PostDetailAbout>
							about:
							<Input
								disabled={visibleInput}
								type='text'
								value={visibleInput ? post.desc : form.desc}
								change={(e) => setForm(e)}
								name='desc'
							/>
						</PostDetailAbout>
						<PostDetailWatchCount>
							<PostDetailWatchCountImg src={EyeIcon} alt='eye-icon' />
							<PostDetailWatchCountText>
								{post.countWatch}
							</PostDetailWatchCountText>
						</PostDetailWatchCount>
					</PostDetailText>
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
				</PostDetailInfo>
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
const PostDetailText = styled.div`
	font-weight: normal;
	font-size: 20px;
`;
const PostDetailImg = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
`;
const PostDetailInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const PostDetailBtns = styled.div`
	display: flex;
	gap: 10px;
`;
const PostDetailTitle = styled.h1`
	display: flex;
`;
const PostDetailID = styled.div`
	font-weight: bold;
`;
const PostDetailAbout = styled.div`
	display: flex;
`;
const PostDetailWatchCount = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const PostDetailWatchCountImg = styled.img`
	width: 30px;
	height: 30px;
`;
const PostDetailWatchCountText = styled.p`
	font-weight: bold;
	font-size: 20px;
`;

export default PostDetail;
