import { useState } from 'react';

const State = () => {
    // Function passed to useState is only called on initial render
    // Useful for expensive calculations that don't need to be done on every render
	const [count, setCount] = useState(() => {
        console.log('initializing count');
        return 0;
    })

	return (
		<>
			<button onClick={() => setCount(prev => prev - 1)}>-</button>
			<span>{count}</span>
			<button onClick={() => setCount(prev => prev + 1)}>+</button>
		</>
	);
};

export default State;
