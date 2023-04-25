import { useState, useEffect, useRef, useMemo } from 'react';
import useDeepCompareEffect from '../hooks/useDeepCompareEffect';

const DeepCompareEffect = () => {
	const [age, setAge] = useState(0);
	const [otherCount, setOtherCount] = useState(0);
	const useEffectCountRef = useRef();
	const useDeepCompareEffectCountRef = useRef();

	const person = useMemo(() => ({ age, name: 'Kyle' }), [age]);

	useEffect(() => {
		useEffectCountRef.current.textContent =
			parseInt(useEffectCountRef.current.textContent) + 1;
	}, [person]);

	useDeepCompareEffect(() => {
		useDeepCompareEffectCountRef.current.textContent =
			parseInt(useDeepCompareEffectCountRef.current.textContent) + 1;
	}, [person]);

	return (
		<div>
			<div>
				useEffect: <span ref={useEffectCountRef}>0</span>
			</div>
			<div>
				useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
			</div>
			<div>Other Count: {otherCount}</div>
			<div>{JSON.stringify(person)}</div>
			<button onClick={() => setAge(currentAge => currentAge + 1)}>
				Increment Age
			</button>
			<button onClick={() => setOtherCount(currentCount => currentCount + 1)}>
				Increment Other Count
			</button>
		</div>
	);
};

export default DeepCompareEffect;
