import React, { FC, useCallback, useState } from 'react';

import styled from 'styled-components';

import UploadImg from '@/assets/image/upload.png';
import { Input } from '@/components/ui';

interface UploadPostImageProps {
	visible: boolean;
	image: string;
}

const UploadPostImage: FC<UploadPostImageProps> = ({ visible, image }) => {
	const [file, setFile] = useState();

	const handleChangeFile = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			//TODO: i have no idea why it doesn't work
			//@ts-ignore
			setFile(e.target.files[0]);
		},
		[]
	);
	
	return (
		<>
			{!visible ? (
				<UploadImgWrapper>
					<UploadImgInner>
						<PostUploadImg src={UploadImg} alt='upload-img' />
						{file ? (
							<UploadTextTitle>completed</UploadTextTitle>
						) : (
							<UploadImgText>
								<UploadTextTitle>
									Please upload type png, jpeg or gif
								</UploadTextTitle>
								<UploadTextDesc>max size image: 10mb</UploadTextDesc>
							</UploadImgText>
						)}
					</UploadImgInner>
					<UploadImgInput>
						<Input
							type='file'
							value=''
							change={handleChangeFile}
							name='file'
							accept='image/*'
						/>
					</UploadImgInput>
				</UploadImgWrapper>
			) : (
				<PostDetailImg src={image} alt='post-img' />
			)}
		</>
	);
};

const PostDetailImg = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
`;
const UploadImgWrapper = styled.label`
	width: 200px;
	height: 200px;
	background-color: #333333;
	padding: 10px;
	cursor: pointer;
	:active,
	:hover {
		border: 1px solid #000;
	}
`;
const UploadImgInput = styled.div`
	width: 0;
	height: 0;
	visibility: hidden;
`;
const UploadImgInner = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
`;
const PostUploadImg = styled.img`
	width: 40px;
	height: 40px;
`;
const UploadImgText = styled.div`
	text-align: center;
`;
const UploadTextTitle = styled.h2`
	font-weight: bold;
	font-size: 15px;
`;
const UploadTextDesc = styled.p`
	font-weight: normal;
	font-size: 12px;
`;

export default UploadPostImage;
