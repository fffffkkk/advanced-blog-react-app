import React, { useDeferredValue, useEffect, useState } from 'react';

import { IPost } from '@/models/IPost';

export const useSearch = (posts: IPost[] | undefined) => {
	const [search, setSearch] = useState('');
	const [postFiltered, setPostFiltered] = useState<IPost[] | undefined>(posts);
	const deferredSearch = useDeferredValue(search);
	
	const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		posts &&
		setPostFiltered(
			posts.filter((post) =>
				post.title.toLowerCase().includes(deferredSearch.toLowerCase())
			)
		);
		!deferredSearch  && setPostFiltered(posts);
		
	}, [deferredSearch]);
	return { postFiltered, search, changeSearch };
};
