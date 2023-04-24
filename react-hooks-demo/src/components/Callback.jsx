import { useState, useCallback } from 'react';
import List from './CallbackList';

const Callback = () => {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	const theme = {
		backgroundColor: dark ? '#333' : '#FFF',
		color: dark ? '#FFF' : '#333',
	};

	//const getItems = () => [number, number + 1, number + 2];
    /*
    
    useCallback() is used to prevent the function from being recreated on every render
    
    If we didn't do this, toggling the theme would cause the useEffect in List to rerender
    because the getItems function would be recreated on every render
    
    As opposed to useMemo, which returns and stores the calculated value of a function in a variable, useCallback returns and stores the function itself

    If we used useMemo in this case, getItems would return an array of numbers, not a function

    */
	const getItems = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);

	return (
		<div style={theme}>
			<input
				type='number'
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
			<List getItems={getItems} />
		</div>
	);
};
export default Callback;
