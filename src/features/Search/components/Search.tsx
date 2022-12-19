import React, { FC } from 'react';

import styled from 'styled-components';

import { useGetAllPostsQuery } from '@/store/posts/posts.api';
import { Input, Spinner, Wrong } from '@/components/ui';
import { useSearch } from '@/features/Search/hooks/useSearch';
import { PostsItem } from '@/features/Feed';
import { GridLayout } from '@/layouts';

const Search: FC = () => {
	const {isLoading, data: posts, isError} = useGetAllPostsQuery();
	
	const { postFiltered, search, changeSearch } = useSearch(posts);
	
	if (isLoading) return <Spinner />;
	if (isError) return <Wrong />;
	
	return (
		<SearchWrapper>
			<Input type='search' value={search} change={changeSearch} />
			<GridLayout>
				{postFiltered && postFiltered.map((post) => <PostsItem post={post} key={post.id}/>)}
			</GridLayout>
		</SearchWrapper>
	);
};

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export default Search;
