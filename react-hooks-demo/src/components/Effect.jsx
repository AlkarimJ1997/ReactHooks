import { useState, useEffect } from 'react';

const Effect = () => {
	const [resourceType, setResourceType] = useState('posts');
	const [items, setItems] = useState([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Called on mount
	useEffect(() => {
		console.log('only runs once on initial render');

		const handleResize = () => setWindowWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

    // Called when resourceType changes
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then(response => response.json())
			.then(json => setItems(json));
	}, [resourceType]);

	return (
		<>
			<div>
				<button onClick={() => setResourceType('posts')}>Posts</button>
				<button onClick={() => setResourceType('users')}>Users</button>
				<button onClick={() => setResourceType('comments')}>Comments</button>
			</div>
			<h1>{resourceType}</h1>
			<div>{windowWidth}</div>
			{items.map((item, idx) => (
				<pre key={idx}>{JSON.stringify(item)}</pre>
			))}
		</>
	);
};

export default Effect;
