import React, { FC, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { categoriesType } from '@/constants/categories';

interface SelectProps {
	isMultiple: boolean;
	options: categoriesType[];
	value: categoriesType[];
	change: (value: categoriesType[]) => void;
}

const Select: FC<SelectProps> = ({ isMultiple, options, value, change }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleClearOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		change([]);
	};
	const changeOptions = (option: categoriesType) => {
		if (value.includes(option)) {
			change(value.filter((item) => item !== option));
		} else {
			change([...value, option]);
		}
	};
	const handleChangeOptions = (e: React.MouseEvent, option: categoriesType) => {
		e.stopPropagation();
		changeOptions(option);
		setIsOpen(false);
	};
	const isOptionSelected = (option: categoriesType) => {
		return value.includes(option);
	};

	useEffect(() => {
		const currentRef = containerRef.current;

		const handler = (e: KeyboardEvent) => {
			if (e.target != currentRef) {
				return;
			}

			switch (e.code) {
				case 'Enter':
				case 'Space':
					setIsOpen((prev) => !prev);

					if (isOpen) changeOptions(options[highlightedIndex]);

					break;
				case 'ArrowUp':
				case 'ArrowDown': {
					if (!isOpen) {
						setIsOpen(true);
						break;
					}
					const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
					if (newValue >= 0 && newValue < options.length) {
						setHighlightedIndex(newValue);
					}
					break;
				}
				case 'Escape':
					setIsOpen(false);
					break;
			}
		};

		currentRef?.addEventListener('keydown', handler);

		return () => {
			currentRef?.removeEventListener('keydown', handler);
		};
	}, [isOpen, highlightedIndex, options]);

	return (
		<SelectContainer
			ref={containerRef}
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen((prev) => !prev)}
			tabIndex={0}
		>
			<SelectInitialValue>
				{value.map((v) => (
					<button
						type='button'
						key={v.value}
						onClick={(e) => handleChangeOptions(e, v)}
					>
						{v.label}
						<SelectBtnClear bold='normal'>&times;</SelectBtnClear>
					</button>
				))}
			</SelectInitialValue>
			<SelectBtnClear onClick={handleClearOptions} bold='bold'>
				&times;
			</SelectBtnClear>
			<SelectDivider></SelectDivider>
			<SelectCaret></SelectCaret>
			{isOpen && (
				<SelectOptionsList>
					{options.map((option, index) => (
						<SelectOptionsItem
							onMouseEnter={() => setHighlightedIndex(index)}
							key={option.value}
							Bg={`${isOptionSelected(option) ? '#777' : '#333'}`}
							Txt={`${index === highlightedIndex ? '#1ea7fd' : ''}`}
							onClick={(e) => handleChangeOptions(e, option)}
						>
							{option.value}
						</SelectOptionsItem>
					))}
				</SelectOptionsList>
			)}

			<SelectStyled multiple={isMultiple}>Select</SelectStyled>
		</SelectContainer>
	);
};

const SelectContainer = styled.div`
	position: relative;
	width: 70%;
	min-height: 50px;
	border: 1px solid #777;
	display: flex;
	align-items: center;
	gap: 2px;
	padding: 5px;
	border-radius: 5px;
	outline: none;
	:focus {
		border-color: #1ea7fd;
	}
`;
const SelectInitialValue = styled.span`
	flex-grow: 1;
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
`;
const SelectBtnClear =
	styled.span <
	{ bold: 'bold' | 'normal' } >
	`
	background: none;
	color: #777;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 0;
	font-size: 20px;
	font-weight: ${({ bold }) => bold};
	:hover,
	:focus {
		color: #333;
	}
`;
const SelectDivider = styled.div`
	background-color: #777;
	align-self: stretch;
	width: 1px;
	margin: 0 2.5px;
`;
const SelectCaret = styled.div`
	translate: 0 25%;
	border: 5px solid transparent;
	border-top-color: #777;
`;
const SelectOptionsList = styled.ul`
	//display: none;
	position: absolute;
	max-height: 200px;
	overflow-y: auto;
	border: 1px solid #777;
	border-radius: 5px;
	width: 100%;
	left: 0;
	top: calc(100% + 5px);
	z-index: 2;
`;
const SelectOptionsItem =
	styled.li <
	ISelectOptionsItem >
	`
	padding: 2.5px 5px;
	cursor: pointer;
  //:hover, :focus {
  //  background-color: #1ea7fd;
  //  color: #fff;
  //}
  background-color: ${(props) => props.Bg};
	color: ${(props) => props.Txt};
`;
const SelectStyled = styled.select`
	display: none;
`;

interface ISelectOptionsItem {
	Bg: '#777' | '#333';
	Txt: '#1ea7fd' | '';
}

export default Select;
