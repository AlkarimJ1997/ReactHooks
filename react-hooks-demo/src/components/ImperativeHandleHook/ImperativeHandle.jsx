import { useState, useRef } from 'react';
import ConfirmationModal from './ConfirmationModal';

const ImperativeHandle = () => {
	const [open, setOpen] = useState(false);
	const modalRef = useRef();

	return (
		<>
			<button onClick={() => setOpen(true)}>Open</button>
			<button onClick={() => modalRef.current.focusClose()}>Focus Close</button>
			<button onClick={() => modalRef.current.focusConfirm()}>Focus Confirm</button>
			<button onClick={() => modalRef.current.focusDeny()}>Focus Deny</button>
			<ConfirmationModal
				ref={modalRef}
				isOpen={open}
				onClose={() => setOpen(false)}
			/>
		</>
	);
};

export default ImperativeHandle;
