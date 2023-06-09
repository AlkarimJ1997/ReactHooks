import { useState, useEffect } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ rootMargin }
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, rootMargin]);

	return isVisible;
};

export default useOnScreen;
