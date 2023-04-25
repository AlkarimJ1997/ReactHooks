import { useState, useEffect, useCallback } from 'react';

const useAsync = (callback, dependencies = []) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [value, setValue] = useState();

	const callbackMemoized = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setValue(undefined);

		callback?.()
			.then(setValue)
			.catch(setError)
			.finally(() => setLoading(false));
	}, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		callbackMemoized();
	}, [callbackMemoized]);

	return { loading, error, value };
};

export default useAsync;
