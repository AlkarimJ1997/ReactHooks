import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => setDarkTheme(prevDarkTheme => !prevDarkTheme);

	return (
		<ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
