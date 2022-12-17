import { useLayoutEffect } from 'react';

export const useLockScroll = () => {
	useLayoutEffect((): (() => void) => {
		const originalStyle = window.getComputedStyle(document.body).overflow;

		document.body.style.overflow = 'hidden';

		return () => (document.body.style.overflow = originalStyle);
	}, []);
};
