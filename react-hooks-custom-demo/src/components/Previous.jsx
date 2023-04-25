import { useState } from 'react';
import usePrevious from '../hooks/usePrevious';

const Previous = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Kyle');
	const previousCount = usePrevious(count);

	return (
		<div>
			<div>
				{count} - {previousCount}
			</div>
			<div>{name}</div>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setName('John')}>Change Name</button>
		</div>
	);
};

export default Previous;
