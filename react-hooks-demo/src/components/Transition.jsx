import { useState, useTransition } from 'react';

const Transition = () => {
	const [isPending, startTransition] = useTransition();
	const [input, setInput] = useState('');
	const [list, setList] = useState([]);
	const LIST_SIZE = 20000;

	/*

    useTransition is a hook that allows you to have multiple state changes occur
    and rank them in order of priority. This is useful when you have a sluggish application
    and need to prioritize the state of one variable over another.

    By default, all state changes in React are high priority, meaning for the app to rerender,
    it must wait for all state changes to finish. This can cause a sluggish app.

    With useTransition, you can set a slow state change to low priority, meaning that it will
    not block the app from rerendering.

    Causes more re-renders so should only be used when absolutely necessary.

    */
	const handleChange = e => {
		setInput(e.target.value);
		//setList(new Array(LIST_SIZE).fill(e.target.value)); // really slow
		startTransition(() => {
			setList(new Array(LIST_SIZE).fill(e.target.value));
		});
	};

	return (
		<>
			<input type='text' value={input} onChange={handleChange} />
			{isPending
				? 'Loading...'
				: list.map((item, idx) => <div key={idx}>{item}</div>)}
		</>
	);
};

export default Transition;
