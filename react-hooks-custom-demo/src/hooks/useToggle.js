import { useState } from 'react';

const useToggle = initialValue => {
	const [value, setValue] = useState(initialValue);

	const toggleValue = value => {
		setValue(currentVal => (typeof value === 'boolean' ? value : !currentVal));
	};

	return [value, toggleValue];
};

export default useToggle;
