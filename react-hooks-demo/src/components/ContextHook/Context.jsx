import { ThemeProvider } from './ThemeProvider';
import ContextChild from './ContextChild';

const Context = () => {
	return (
		<>
			<ThemeProvider>
				<ContextChild />
			</ThemeProvider>
		</>
	);
};

export default Context;
