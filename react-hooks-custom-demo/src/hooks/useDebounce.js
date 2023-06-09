import { useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebounce = (callback, delay, dependencies) => {
	const { reset, clear } = useTimeout(callback, delay);

	useEffect(reset, [...dependencies, reset]);
	useEffect(clear, [clear]); // this makes it not fire on mount
};

export default useDebounce;