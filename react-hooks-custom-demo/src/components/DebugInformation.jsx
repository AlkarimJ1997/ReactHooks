import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import useDebugInformation from '../hooks/useDebugInformation';
import PropTypes from 'prop-types';

const DebugInformation = () => {
	const [boolean, toggle] = useToggle(false);
	const [count, setCount] = useState(0);

	const ChildComponent = props => {
		const info = useDebugInformation('ChildComponent', props);

		return (
			<>
				<div>{props.boolean.toString()}</div>
				<div>{props.count}</div>
				<div>{JSON.stringify(info, null, 2)}</div>
			</>
		);
	};

	ChildComponent.propTypes = {
		boolean: PropTypes.bool.isRequired,
		count: PropTypes.number.isRequired,
	};

	return (
		<>
			<ChildComponent boolean={boolean} count={count} />
			<button onClick={toggle}>Toggle</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
		</>
	);
};

export default DebugInformation;
