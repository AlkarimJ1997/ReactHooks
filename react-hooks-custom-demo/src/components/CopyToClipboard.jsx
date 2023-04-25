import useCopyToClipboard from '../hooks/useCopyToClipboard';

const CopyToClipboard = () => {
	const [hasCopied, copyToClipboard] = useCopyToClipboard();

	return (
		<>
			<button onClick={() => copyToClipboard('This was copied')}>
				{hasCopied ? 'Copied' : 'Copy'}
			</button>
			<input type='text' />
		</>
	);
};

export default CopyToClipboard;
