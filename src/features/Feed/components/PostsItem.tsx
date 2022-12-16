import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IPost } from '@/models/IPost';
import { Button } from '@/components/ui';
import EyeIcon from '@/assets/image/eye.png';

interface PostsItemProps {
	post: IPost;
}

const PostsItem: FC<PostsItemProps> = ({ post }) => {
	const navigate = useNavigate();

	return (
		<PostWrapper>
			<PostInner>
				<PostDate>{post.date}</PostDate>
				<PostCountWatch>
					{post.countWatch}
					<CountWatchImg src={EyeIcon} alt='eye-icon' />
				</PostCountWatch>
			</PostInner>
			<PostImg src={post.image} alt='post-img' />
			<PostInner>
				<PostText>
					<PostTitle>{post.title}</PostTitle>
					<PostAbout>{post.desc.slice(0, 15)}...</PostAbout>
				</PostText>
				<Button type='button' click={() => navigate(`/post/${post.id}`)}>
					MORE...
				</Button>
			</PostInner>
		</PostWrapper>
	);
};

const PostWrapper = styled.div`
	width: 100%;
	min-height: 100px;
	padding: 5px;
	border-radius: 10px;
	background-color: #333333;
	justify-self: center;
`;
const PostInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const PostCountWatch = styled.div`
	font-weight: bold;
	font-size: 15px;
	display: flex;
	align-items: center;
	gap: 5px;
`;
const CountWatchImg = styled.img`
	width: 20px;
	height: 20px;
`;
const PostText = styled.div`
	margin-top: 5px;
`;
const PostTitle = styled.h1`
	font-weight: bold;
	font-size: 25px;
`;
const PostAbout = styled.p`
	font-weight: normal;
	font-size: 15px;
`;
const PostImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;
const PostDate = styled.p`
	text-align: end;
`;

export default PostsItem;
