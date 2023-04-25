import { useEffect, useRef } from 'react';
import useRenderCount from './useRenderCount';

const useDebugInformation = (componentName, props) => {
	const count = useRenderCount();
	const changedProps = useRef({});
	const prevProps = useRef(props);
	const lastRender = useRef(Date.now());

	const propKeys = Object.keys({ ...props, ...prevProps });

	changedProps.current = propKeys.reduce((obj, key) => {
		if (props[key] === prevProps.current[key]) return obj;

		return {
			...obj,
			[key]: {
				previous: prevProps.current[key],
				current: props[key],
			},
		};
	}, {});

	const info = {
		count,
		changedProps: changedProps.current,
		timeSinceLastRender: Date.now() - lastRender.current,
		lastRender: lastRender.current,
	};

	useEffect(() => {
		prevProps.current = props;
		lastRender.current = Date.now();

		console.log('[debug-info]', componentName, info);
	});

	return info;
};

export default useDebugInformation;
