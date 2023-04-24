import { useState, useEffect, useCallback, useDebugValue } from 'react';

export function useLocalStorage(key, initialValue) {
	return useStorage(key, initialValue, localStorage);
}

export function useSessionStorage(key, initialValue) {
	return useStorage(key, initialValue, sessionStorage);
}

const useStorage = (key, initialValue, storageObject) => {
	const [value, setValue] = useState(() => {
		const item = storageObject.getItem(key);

		if (item) return JSON.parse(item);

		typeof initialValue === 'function' ? initialValue() : initialValue;
	});

    // Great for debugging (only works inside Custom Hooks)
    useDebugValue(value);

	useEffect(() => {
		if (value === undefined) return storageObject.removeItem(key);

		storageObject.setItem(key, JSON.stringify(value));
	}, [key, value, storageObject]);

	const removeValue = useCallback(() => {
		setValue(undefined);
	}, []);

	return [value, setValue, removeValue];
};
