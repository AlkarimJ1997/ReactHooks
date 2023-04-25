import { useRef } from 'react';
import useHover from '../hooks/useHover';

const Hover = () => {
	const elementRef = useRef();
	const hovered = useHover(elementRef);

	return (
		<div
			ref={elementRef}
			style={{
				backgroundColor: hovered ? 'blue' : 'red',
				width: '100px',
				height: '100px',
				position: 'absolute',
				top: 'calc(50% - 50px)',
				left: 'calc(50% - 50px)',
			}}
		/>
	);
};

export default Hover;
