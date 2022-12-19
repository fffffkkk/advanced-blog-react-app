import React, { FC } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Posts } from '@/features/Feed';
import { Search } from '@/features/Search';
import { ContentLayout } from '@/layouts';
import { useActions } from '@/hooks/use-actions';
import { Filter } from '@/features/Filter';
import GridOption from '@/assets/image/grid.png';
import FlexOption from '@/assets/image/menu-burger.png';
import SearchIcon from '@/assets/image/search.png';
import FilterIcon from '@/assets/image/filter.png';

const FeedPage: FC = () => {
	const navigate = useNavigate();
	const { changeGrid } = useActions();

	return (
		<ContentLayout>
			<PostsWrapper>
				<PostsBtns>
					<PostsBtn onClick={() => navigate('/search')}>
						<PostsOptionsImage src={SearchIcon} alt='search-icon' />
					</PostsBtn>
					<PostsBtn onClick={() => navigate('/filter')}>
						<PostsOptionsImage src={FilterIcon} alt='filter-icon' />
					</PostsBtn>
				</PostsBtns>
				<PostsBtns>
					<PostsBtn onClick={() => changeGrid({ grid: 'grid' })}>
						<PostsOptionsImage src={GridOption} alt='gridOption' />
					</PostsBtn>
					<PostsBtn onClick={() => changeGrid({ grid: 'flex' })}>
						<PostsOptionsImage src={FlexOption} alt='flexOption' />
					</PostsBtn>
				</PostsBtns>
			</PostsWrapper>
			<Routes>
				<Route path='/search' element={<Search />} />
				<Route path='/filter' element={<Filter />} />
				<Route path='*' element={<Posts />} />
			</Routes>
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

export default FeedPage;
