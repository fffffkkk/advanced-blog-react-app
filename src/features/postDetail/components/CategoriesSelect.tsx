import React, { FC, useState } from 'react';

import styled from 'styled-components';

import { Button, Select } from '@/components/ui';
import { categoriesType } from '@/constants/categories';

interface CategoriesSelectProps {
	data: categoriesType[];
	changeTopics: (v: categoriesType[]) => void;
	visibleModal: () => void;
}

const CategoriesSelect: FC<CategoriesSelectProps> = ({ data , changeTopics, visibleModal }) => {
	const [value, setValue] = useState<categoriesType[]>([data[0]]);
	
	const handleChange = (v: categoriesType[]) => {
		setValue(v);
	};
	const handleSaveTopics = () => {
		changeTopics(value);
		visibleModal();
	};
	
	return (
		<CategoriesSelectWrapper>
			<Select options={data} value={value} change={handleChange} />
			<Button type='button' click={handleSaveTopics}>save topics</Button>
		</CategoriesSelectWrapper>
	);
};

const CategoriesSelectWrapper = styled.div`
  display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
	gap: 5px;
`;

export default CategoriesSelect;
