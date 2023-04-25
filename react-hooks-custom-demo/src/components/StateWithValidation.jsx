import useStateWithValidation from '../hooks/useStateWithValidation';

const StateWithValidation = () => {
	const condition = name => name.length > 5;
	const [username, setUsername, isValid] = useStateWithValidation('', condition);

	return (
		<>
			<div>Valid: {isValid.toString()}</div>
			<input
				type='text'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
		</>
	);
};

export default StateWithValidation;
