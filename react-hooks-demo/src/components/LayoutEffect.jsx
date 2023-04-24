import { useState, useRef, useLayoutEffect } from 'react';

const LayoutEffect = () => {
	const [show, setShow] = useState(false);
	const popup = useRef();
	const button = useRef();

    // Similar to useEffect, but it fires synchronously after all DOM mutations.
    // Use this to read layout from the DOM and synchronously re-render.
    // For example, to determine the size or position of an element.
	useLayoutEffect(() => {
		const { bottom } = button.current?.getBoundingClientRect() ?? {};

        if (isNaN(bottom)) return;

		popup.current?.style.setProperty('top', `${bottom + 25}px`);
	}, [show]);

	return (
		<>
			<button ref={button} onClick={() => setShow(prev => !prev)}>
				Click Here
			</button>
			{show && (
				<div ref={popup} style={{ position: 'absolute' }}>
					This is a popup
				</div>
			)}
		</>
	);
};
export default LayoutEffect;
