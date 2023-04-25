import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

const useCookie = (name, initialValue) => {
	const [value, setValue] = useState(() => {
		const value = Cookies.get(name);

		if (value) return value;

		Cookies.set(name, initialValue);
		return initialValue;
	});

	const updateCookie = useCallback(
		(newValue, options) => {
			Cookies.set(name, newValue, options);
			setValue(newValue);
		},
		[name]
	);

	const deleteCookie = useCallback(() => {
		Cookies.remove(name);
		setValue(null);
	}, [name]);

	return [value, updateCookie, deleteCookie];
};

export default useCookie;
