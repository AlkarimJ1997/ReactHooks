import { useState } from 'react';

const useArray = initialArray => {
	const [array, setArray] = useState(initialArray);

	const push = element => setArray(arr => [...arr, element]);

	const filter = callback => setArray(arr => arr.filter(callback));

	const update = (index, newElement) => {
		setArray(arr => arr.map((element, i) => (i === index ? newElement : element)));
	};

	const remove = index => setArray(arr => arr.filter((_, i) => i !== index));

	const clear = () => setArray([]);

	return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;
