import React, { FC } from 'react';
import { Input } from '@/components/ui';

// interface SearchProps {
// };

const Search: FC = () => {
	return (
		<>
			<Input type='search' value='search' change={() => console.log()} />
		</>
	);
};

export default Search;
