import React, { FC } from 'react';

import styled from 'styled-components';

import { Input } from '@/components/ui';

interface InputSearchProps {
	search: string;
	changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: FC<InputSearchProps> = ({ search, changeSearch }) => {
	
	return (
		<InputSearchWrapper>
			<Input type='search' value={search} change={changeSearch} placeholder='Поиск...'/>
		</InputSearchWrapper>
	);
};

const InputSearchWrapper = styled.div`
	> input {
		padding: 10px 5px;
	}
`;

export default InputSearch;
