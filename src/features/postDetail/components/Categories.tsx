import React, { FC } from 'react';

import styled from 'styled-components';

interface CategoriesProps {
	data: string[];
}

const Categories: FC<CategoriesProps> = ({ data }) => {
	
	return (
		<CategoriesWrapper>
			{data.map((category) => (
				<CategoryInner key={category}>{category}</CategoryInner>
			))}
		</CategoriesWrapper>
	);
};

const CategoriesWrapper = styled.div`
	display: flex;
	gap: 10px;
`;
const CategoryInner = styled.div`
	padding: 5px;
	border-radius: 10px;
	background-color: #333333;
`;

export default Categories;
