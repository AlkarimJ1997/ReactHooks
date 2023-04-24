import { useState, useMemo, useDeferredValue, useEffect } from 'react';

const DeferredValue = () => {
	const [input, setInput] = useState('');

	/*

    useDeferredValue() allows you to wait on evaluating a value until a certain timeout has passed. So in this case, if the user is constantly typing in the input, React will now wait until the user has stopped typing for it to re-render the list.
    
    This is useful for performance reasons, as it will prevent the list from re-rendering every time the user types a character.

    */
	const deferredInput = useDeferredValue(input);
	const LIST_SIZE = 20000;

	const list = useMemo(() => {
		return new Array(LIST_SIZE)
			.fill(0)
			.map((_, i) => <div key={i}>{deferredInput}</div>);
	}, [deferredInput]);

    // We can see the difference in the console logs, deferredInput is only updated after the user has stopped typing for some time.
	useEffect(() => {
		console.log(`Input: ${input}\nDeferred Input: ${deferredInput}`);
	}, [input, deferredInput]);

	return (
		<>
			<input type='text' value={input} onChange={e => setInput(e.target.value)} />
			{list}
		</>
	);
};

export default DeferredValue;
