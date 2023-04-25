import useCookie from '../hooks/useCookie';

const Cookie = () => {
	const [value, update, remove] = useCookie('name', 'John');

	return (
		<>
			<div>{value}</div>
			<button onClick={() => update('Sally')}>Change Name to Sally</button>
			<button onClick={remove}>Delete Name</button>
		</>
	);
};

export default Cookie;
