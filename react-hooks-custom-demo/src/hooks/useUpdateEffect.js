import { useEffect, useRef } from 'react';

const useUpdateEffect = (callback, dependencies) => {
	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		return callback();
	}, [dependencies, callback]);
};

export default useUpdateEffect;
