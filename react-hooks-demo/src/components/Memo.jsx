import { useState, useEffect, useMemo } from 'react';

const slowFunction = num => {
	console.log('Calling slow function');

	for (let i = 0; i <= 1000000000; i++) {
		// Do nothing
	}

	return num * 2;
};

const Memo = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	//const doubleNumber = slowFunction(number);
	// useMemo can 'memoize' or 'cache' the result of a slow function for optimization
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	// const themeStyles = {
	// 	backgroundColor: dark ? 'black' : 'white',
	// 	color: dark ? 'white' : 'black',
	// };
    // If we didn't use useMemo, the themeStyles object would be recreated on every render
    // and the useEffect hook would run on every render (even if the theme didn't change)
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? 'black' : 'white',
			color: dark ? 'white' : 'black',
		};
	}, [dark]);

	useEffect(() => {
		console.log('Theme changed');
	}, [themeStyles]);

	return (
		<>
			<input
				type='number'
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</>
	);
};

export default Memo;
