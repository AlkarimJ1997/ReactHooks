import { useState, useRef, useCallback } from 'react';

const useStateWithHistory = (initialValue, { capacity = 10 } = {}) => {
	const [value, setValue] = useState(initialValue);
	const historyRef = useRef([value]);
	const pointerRef = useRef(0);

	const set = useCallback(
		v => {
			const resolvedValue = typeof v === 'function' ? v(value) : v;

			// If the new value is the same as the current value, don't do anything
			if (historyRef.current[pointerRef.current === resolvedValue]) {
				setValue(resolvedValue);
				return;
			}

			if (pointerRef.current < historyRef.current.length - 1) {
				historyRef.current.splice(pointerRef.current + 1);
			}

			historyRef.current.push(resolvedValue);

			while (historyRef.current.length > capacity) {
				historyRef.current.shift();
			}

			pointerRef.current = historyRef.current.length - 1;
			setValue(resolvedValue);
		},
		[capacity, value]
	);

	const back = useCallback(() => {
		if (pointerRef.current <= 0) return;

		pointerRef.current--;
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	const forward = useCallback(() => {
		if (pointerRef.current >= historyRef.current.length - 1) return;

		pointerRef.current++;
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	const go = useCallback(index => {
		if (index < 0 || index >= historyRef.current.length - 1) return;

		pointerRef.current = index;
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	return [
		value,
		set,
		{
			history: historyRef.current,
			pointer: pointerRef.current,
			back,
			forward,
			go,
		},
	];
};

export default useStateWithHistory;
