import useDarkMode from '../hooks/useDarkMode';

const DarkMode = () => {
	const [darkMode, setDarkMode] = useDarkMode();

	return (
		<button
			onClick={() => setDarkMode(prevMode => !prevMode)}
			style={{
				border: `1px solid ${darkMode ? '#fff' : '#000'}`,
				background: 'none',
				color: darkMode ? '#fff' : '#000',
			}}>
			Toggle Dark Mode
		</button>
	);
};

export default DarkMode;
