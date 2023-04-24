import { useState } from 'react';
import { useLocalStorage } from '../hooks/useStorage';

const DebugValue = () => {
	const [firstName, setFirstName] = useLocalStorage('firstName', 'Kyle');
	const [lastName, setLastName] = useState('Cook');

	return (
		<>
			First:{' '}
			<input value={firstName} onChange={e => setFirstName(e.target.value)} />
			<br />
			Last:{' '}
            <input value={lastName} onChange={e => setLastName(e.target.value)} />
		</>
	);
};
export default DebugValue;
