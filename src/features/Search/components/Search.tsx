import React, { FC, Suspense } from 'react';

import { lazily } from 'react-lazily';
import styled from 'styled-components';

import { useGetAllPostsQuery } from '@/store/posts/posts.api';
import { Input, Spinner, Wrong } from '@/components/ui';
import { useSearch } from '@/features/Search/hooks/useSearch';
import { GridLayout } from '@/layouts';

const { PostsItem } = lazily(() => import('@/features/Feed'));

const Search: FC = () => {
	const { isLoading, data: posts, isError } = useGetAllPostsQuery();

	const { postFiltered, search, changeSearch } = useSearch(posts);

	if (isLoading) return <Spinner />;
	if (isError) return <Wrong />;

	return (
		<SearchWrapper>
			<Input type='search' value={search} change={changeSearch} />
			<Suspense fallback={<Spinner />}>
				<GridLayout>
					{postFiltered &&
						postFiltered.map((post) => <PostsItem post={post} key={post.id} />)}
				</GridLayout>
			</Suspense>
		</SearchWrapper>
	);
};

const SearchWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export default Search;
