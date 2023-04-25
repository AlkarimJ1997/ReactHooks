import { useState } from 'react';
import useEventListener from '../hooks/useEventListener';

const EventListener = () => {
	const [key, setKey] = useState('');

	useEventListener('keydown', ({ key }) => {
		setKey(key);
	});

	return <div>Last key pressed: {key}</div>;
};

export default EventListener;
