import React, { FC, useState } from 'react';

import styled from 'styled-components';

import { categories, categoriesType } from '@/constants/categories';
import { CategoriesSelect } from '@/features/postDetail';
import { Modal } from '@/components/ui';

interface CategoriesFormProps {
	changeTopics: (v: categoriesType[]) => void;
}

const CategoriesForm: FC<CategoriesFormProps> = ({ changeTopics }) => {
	const [modal, setModal] = useState(false);

	const handleClickModal = (e: React.MouseEvent) => {
		setModal(true);
		e.stopPropagation();
	};
	const handleCloseModal = () => {
		setModal(false);
	};

	return (
		<CategoriesWrapper onClick={() => setModal(false)}>
			<CategoriesBtn type='button' onClick={handleClickModal}>
				+
			</CategoriesBtn>
			{modal && (
				<Modal handleClose={handleCloseModal}>
					{
						<CategoriesSelect
							data={categories}
							changeTopics={changeTopics}
							visibleModal={() => setModal(false)}
						/>
					}
				</Modal>
			)}
		</CategoriesWrapper>
	);
};

const CategoriesWrapper = styled.div``;
const CategoriesBtn = styled.button`
	padding: 5px 10px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	:active,
	:focus {
		outline: 0;
		border: 2px solid #0062a2;
	}
`;

export default CategoriesForm;
