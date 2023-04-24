import { useState } from 'react';
import useUpdateEffect from '../hooks/useUpdateEffect';

const UpdateEffect = () => {
	const [count, setCount] = useState(10);

	//useEffect(() => alert(count), [count]); // This will alert on initial render
	useUpdateEffect(() => alert(count), [count]);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default UpdateEffect;
