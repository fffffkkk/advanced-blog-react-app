import React, { useEffect, useState } from 'react';

import { IPost } from '@/models/IPost';

export const useSearch = (posts: IPost[] | undefined) => {
	const [search, setSearch] = useState('');
	const [postFiltered, setPostFiltered] = useState<IPost[] | undefined>(posts);
	
	const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const Debounce = setTimeout(() => {
			posts &&
			setPostFiltered(
				posts.filter((post) =>
					post.title.toLowerCase().includes(search.toLowerCase())
				)
			);
			!search  && setPostFiltered(posts);
		}, 300)
		
		return () => clearTimeout(Debounce);
	}, [search]);

	return { postFiltered, search, changeSearch };
};
