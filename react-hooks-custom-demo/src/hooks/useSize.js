import { useState, useEffect } from 'react';

const useSize = ref => {
	const [size, setSize] = useState({});

	useEffect(() => {
		if (!ref.current) return;

		const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref]);

	return size;
};

export default useSize;
