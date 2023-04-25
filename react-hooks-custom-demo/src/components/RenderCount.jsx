import useRenderCount from '../hooks/useRenderCount';
import useToggle from '../hooks/useToggle';

const RenderCount = () => {
	const [boolean, toggle] = useToggle(false);
	const renderCount = useRenderCount();

	return (
		<>
			<div>{boolean.toString()}</div>
			<div>{renderCount}</div>
			<button onClick={toggle}>Toggle</button>
		</>
	);
};

export default RenderCount;
