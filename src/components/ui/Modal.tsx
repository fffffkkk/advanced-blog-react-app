import React, { FC } from 'react';

import styled from 'styled-components';

import { useLockScroll } from '@/hooks/use-lock-scroll';
import { useEscapeKey } from '@/features/postDetail/hooks/use-escape-key';

interface ModalProps {
	children: React.ReactNode;
	handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, handleClose }) => {
	useLockScroll();
	useEscapeKey(handleClose);
	
	return (
		<ModalWrapper>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<ModalContentInner>
					<ModalBtn onClick={handleClose}>&times;</ModalBtn>
					{children}
				</ModalContentInner>
			</ModalContent>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContent = styled.div`
	position: fixed;
	background: white;
	min-width: 50%;
	min-height: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
`;
const ModalContentInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 10px;
`;
const ModalBtn = styled.button`
	padding: 5px 10px;
	margin-right: 10px;
	border-radius: 50%;
	border: none;
  outline: none;
  cursor: pointer;
	color: #777;
	position: absolute;
  font-size: 25px;
	right: 0;
	:focus {
		border: #0062a2;
		color: #1ea7fd;
	}
	:active, :hover {
		color: #333;
	}
`;

export default Modal;
