import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useStorage';

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('useDarkMode');
	const enabled = darkMode ?? false;

	useEffect(() => {
		document.body.classList.toggle('dark-mode', enabled);
	}, [enabled]);

	return [enabled, setDarkMode];
};

export default useDarkMode;
