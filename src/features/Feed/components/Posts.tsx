import React, { FC } from 'react';

import styled from 'styled-components';

import { useActions } from '@/hooks/use-actions';
import GridLayout from '@/layouts/GridLayout';
import GridOption from '@/assets/image/grid.png';
import FlexOption from '@/assets/image/menu-burger.png';

const Posts: FC = () => {
	const { changeGrid } = useActions();
	
	return (
		<PostsWrapper>
			<PostsBtns>
				<PostsBtn onClick={() => changeGrid({ grid: 'grid' })}>
					<PostsOptionsImage src={GridOption} alt='gridOption' />
				</PostsBtn>
				<PostsBtn onClick={() => changeGrid({ grid: 'flex' })}>
					<PostsOptionsImage src={FlexOption} alt='flexOption' />
				</PostsBtn>
			</PostsBtns>
			<GridLayout>
				<Test>1</Test>
				<Test>1</Test>
				<Test>1</Test>
				<Test>1</Test>
			</GridLayout>
		</PostsWrapper>
	);
};

const Test = styled.div`
	width: 100px;
	height: 100px;
	background-color: #333333;
`;
const PostsWrapper = styled.div`
	width: 100%;
	background-color: #1ea7fd;
	border-radius: 15px;
	padding: 10px;
`;
const PostsBtns = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`;
const PostsBtn = styled.button`
	padding: 5px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in;
	:hover {
		background-color: #b7b7b7;
	}
	:active,
	:focus {
		outline: 0;
		border: 2px solid #0062a2;
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
