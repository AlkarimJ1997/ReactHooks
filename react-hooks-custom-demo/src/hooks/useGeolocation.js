import { useState, useEffect } from 'react';

const useGeolocation = options => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState({});

	useEffect(() => {
		if (!navigator.geolocation) {
			setError(new Error('Geolocation is not supported'));
			setLoading(false);
			return;
		}

		const successHandler = e => {
			setLoading(false);
			setError(null);
			setData(e.coords);
		};

		const errorHandler = e => {
			setError(e);
			setLoading(false);
		};

		navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

		const watchId = navigator.geolocation.watchPosition(
			successHandler,
			errorHandler,
			options
		);

		return () => navigator.geolocation.clearWatch(watchId);
	}, [options]);

	return { loading, error, data };
};

export default useGeolocation;
