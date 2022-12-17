import React, { FC, useState } from 'react';

import styled from 'styled-components';

import { Select } from '@/components/ui';
import { categoriesType } from '@/constants/categories';

interface CategoriesSelectProps {
	data: categoriesType[];
}

const CategoriesSelect: FC<CategoriesSelectProps> = ({ data }) => {
	const [value, setValue] = useState<categoriesType[]>([data[0]]);
	
	const handleChange = (v: categoriesType[]) => {
		setValue(v);
	}
	
	return (
		<CategoriesSelectWrapper>
			<Select isMultiple={true} options={data} value={value} change={handleChange}/>
		</CategoriesSelectWrapper>
	);
};

const CategoriesSelectWrapper = styled.div``;

export default CategoriesSelect;
