import React, { FC, useState } from 'react';

import styled from 'styled-components';

import { categories } from '@/constants/categories';
import { Modal } from '@/components/ui';
import { CategoriesSelect } from '@/features/postDetail';

// interface CategoriesFormProps {}

const CategoriesForm: FC = () => {
	const [modal, setModal] = useState(true);

	const handleClickModal = (e: React.MouseEvent) => {
		setModal(true);
		e.stopPropagation();
	};

	return (
		<CategoriesWrapper onClick={() => setModal(false)}>
			<CategoriesBtn type='button' onClick={handleClickModal}>
				+
			</CategoriesBtn>
			{modal && (
				<Modal handleClose={() => setModal(false)}>
					{<CategoriesSelect data={categories} />}
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
