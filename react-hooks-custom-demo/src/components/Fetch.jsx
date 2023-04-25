import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const Fetch = () => {
	const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

	const [id, setId] = useState(1);
	const { loading, error, value } = useFetch(`${API_URL}${id}`, {}, [id]);

	return (
		<div>
			<div>{id}</div>
			<button onClick={() => setId(currentId => currentId + 1)}>Increment</button>
			<div>Loading: {loading.toString()}</div>
			<div>{JSON.stringify(error, null, 2)}</div>
			<div>{JSON.stringify(value, null, 2)}</div>
		</div>
	);
};

export default Fetch;
