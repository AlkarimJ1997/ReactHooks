import { useState, useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const ClickOutside = () => {
	const [open, setOpen] = useState(false);
	const modalRef = useRef();

	useClickOutside(modalRef, () => {
		if (open) setOpen(false);
	});

	const handleClick = e => {
		e.stopPropagation();
		setOpen(true);
	};

	return (
		<>
			<button onClick={handleClick}>Open</button>
			<div
				ref={modalRef}
				style={{
					display: open ? 'block' : 'none',
					backgroundColor: 'blue',
					color: 'white',
					width: '100px',
					height: '100px',
					position: 'absolute',
					top: 'calc(50% - 50px)',
					left: 'calc(50% - 50px)',
				}}>
				<span>Modal</span>
			</div>
		</>
	);
};

export default ClickOutside;
