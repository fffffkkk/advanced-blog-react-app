import React, { FC, useState } from 'react';

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
import { PostDetailForm } from '@/features/postDetail';
import { assignObj } from '@/features/postDetail/utils/assignObj';
import { useTypedSelector } from '@/hooks/use-typed-selector';
import UploadPostImage from '@/features/postDetail/components/UploadPostImage';
import { categoriesType } from '@/constants/categories';

const PostDetail: FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const {
		isLoading: isLoadingPost,
		data: post,
		isError: isErrorPost,
	} = useGetPostsQuery(id as string);
	const { user } = useTypedSelector((state) => state.user);
	const [deletePost] = useDeletePostMutation();
	const [updatePost] = useUpdatePostMutation();
	const [form, setForm] = useChange({
		id: id,
		title: '',
		desc: '',
	});
	const [file, setFile] = useState<File>();
	const [topics, setTopics] = useState<string[]>();
	const [visibleInput, setVisibleInput] = useToggle(true);

	if (isLoadingPost || !post) return <Spinner />;
	if (isErrorPost) return <Wrong />;

	const handleClickRemovePost = () => {
		navigate('/');
		deletePost(post.id);
	};
	const handleClickUpdatePost = () => {
		assignObj(form, [{ author: { authorName: user.name } }, { topics }]);
		
		if (file) assignObj(form, [{ image: URL.createObjectURL(file) }])

		setVisibleInput();
		updatePost(form);
		
		console.log(post);
	};
	
	const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		//TODO: FIX THIS
		//@ts-ignore
		setFile(e.target.files[0]);
	};
	const handleChangeTopics = (v: categoriesType[]) => {
		setTopics([...v.map((i) => i.value)])
	}

	return (
		<PostDetailWrapper>
			<PostDetailInner>
				<UploadPostImage
					image={post.image}
					visible={visibleInput}
					file={file}
					changeFile={handleChangeFile}
				/>
				<PostDetailInfoWrapper>
					<PostDetailForm
						post={post}
						visibleInput={visibleInput}
						form={form}
						setForm={setForm}
						changeTopics={handleChangeTopics}
					/>
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
								<Button type='button' click={handleClickUpdatePost}>
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
