import React, { FC } from 'react';

import styled from 'styled-components';

import { Input } from '@/components/ui';
import { IPost } from '@/models/IPost';
import { Categories } from '@/features/postDetail';
import EyeIcon from '@/assets/image/eye.png';

interface IForm {
	id: string;
	title: string;
	desc: string;
}

interface PostDetailInfoProps {
	post: IPost;
	visibleInput: boolean;
	form: IForm;
	setForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostDetailForm: FC<PostDetailInfoProps> = ({
	post,
	visibleInput,
	form,
	setForm,
}) => {
	return (
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
				<PostDetailWatchCountText>{post.countWatch}</PostDetailWatchCountText>
			</PostDetailWatchCount>
			<PostDetailAuthor>
				<PostDetailAuthorName>{post.author.authorName}</PostDetailAuthorName>
				<PostDetailAuthorImg src={post.author.authorImage} alt='author-img'/>
			</PostDetailAuthor>
			<Categories data={post.categories}/>
		</PostDetailText>
	);
};

const PostDetailText = styled.div`
	font-weight: normal;
	font-size: 20px;
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
const PostDetailAuthor = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const PostDetailAuthorName = styled.h2`
	font-weight: normal;
	font-size: 20px;
`;
const PostDetailAuthorImg = styled.img`
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;

export default PostDetailForm;
