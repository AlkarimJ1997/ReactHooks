import { useState, useEffect, useCallback } from 'react';

const useStorage = (key, initialValue, storageObject) => {
	const [value, setValue] = useState(() => {
		const jsonValue = storageObject.getItem(key);

		if (jsonValue) return JSON.parse(jsonValue);

		return typeof initialValue === 'function' ? initialValue() : initialValue;
	});

	const remove = useCallback(() => setValue(undefined), []);

	useEffect(() => {
		if (!value) return storageObject.removeItem(key);

		storageObject.setItem(key, JSON.stringify(value));
	}, [key, value, storageObject]);

	return [value, setValue, remove];
};

export const useLocalStorage = (key, initialValue) => {
	return useStorage(key, initialValue, window.localStorage);
};

export const useSessionStorage = (key, initialValue) => {
	return useStorage(key, initialValue, window.sessionStorage);
};
