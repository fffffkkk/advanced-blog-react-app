import React, { useLayoutEffect } from 'react';

import { categoriesType } from '@/constants/categories';

export const useKeyboard = (
	containerRef: React.RefObject<HTMLDivElement>,
	isOpen: boolean,
	options: categoriesType[],
	highlightedIndex: number,
	callback: (e: KeyboardEvent) => void,
) => {
	useLayoutEffect(() => {
		const currentRef = containerRef.current;

		currentRef?.addEventListener('keydown', callback);

		return () => {
			currentRef?.removeEventListener('keydown', callback);
		};
	}, [isOpen, highlightedIndex, options]);
};
