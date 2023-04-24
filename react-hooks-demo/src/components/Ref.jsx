import { useState, useEffect, useRef } from 'react';

const Ref = () => {
	const [name, setName] = useState('');
	const renderCount = useRef(0);
	const inputRef = useRef();
    const prevName = useRef('');

	// Can't do this with useState because it would cause an infinite loop
	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	});

    // useRef can be used to store previous state values
    useEffect(() => {
        prevName.current = name;
    }, [name])

	return (
		<>
			<input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
			<div>My name is {name} and it used to be {prevName.current}</div>
			<div>I rendered {renderCount.current} times</div>
			<button onClick={() => inputRef.current.focus()}>Focus</button>
		</>
	);
};

export default Ref;
