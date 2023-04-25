import { useState } from 'react';

const useCopyToClipboard = () => {
	const [hasCopied, setHasCopied] = useState(false);

	const copyToClipboard = str => {
		if (typeof window !== 'undefined') {
			const clipboard = window.navigator.clipboard;

			clipboard.writeText(str);
			setHasCopied(true);
		}
	};

	return [hasCopied, copyToClipboard];
};

export default useCopyToClipboard;
