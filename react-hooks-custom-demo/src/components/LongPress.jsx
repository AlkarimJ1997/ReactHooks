import { useRef } from 'react';
import useLongPress from '../hooks/useLongPress';

const LongPress = () => {
	const elementRef = useRef();

	useLongPress(elementRef, () => {
		alert('Long Pressed!');
	});

	return (
		<div
			ref={elementRef}
			style={{
				backgroundColor: 'red',
				width: '100px',
				height: '100px',
				position: 'absolute',
				top: 'calc(50% - 50px)',
				left: 'calc(50% - 250px)',
			}}
		/>
	);
};

export default LongPress;
