import { useRef } from 'react';
import useSize from '../hooks/useSize';

const Size = () => {
	const ref = useRef();
	const size = useSize(ref);

	return (
		<>
			<div>{JSON.stringify(size)}</div>
			<textarea ref={ref}></textarea>
		</>
	);
};

export default Size;
