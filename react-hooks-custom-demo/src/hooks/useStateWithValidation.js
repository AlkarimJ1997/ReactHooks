import { useState, useCallback } from 'react';

const useStateWithValidation = (initialState, validator) => {
	const [state, setState] = useState(initialState);
	const [isValid, setIsValid] = useState(() => {
		return validator(state);
	});

	const onChange = useCallback(
		nextState => {
			const nextValue =
				typeof nextState === 'function' ? nextState(state) : nextState;

			setState(nextValue);
			setIsValid(validator(nextValue));
		},
		[state, validator]
	);

	return [state, onChange, isValid];
};

export default useStateWithValidation;
