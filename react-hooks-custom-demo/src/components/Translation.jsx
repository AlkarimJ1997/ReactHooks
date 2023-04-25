import useTranslation from '../hooks/useTranslation';

const Translation = () => {
	const { language, setLanguage, t: translate } = useTranslation();

	return (
		<>
			<div>{language}</div>
			<div>{translate('Hi')}</div>
			<div>{translate('Bye')}</div>
			<div>{translate('nested.value')}</div>
			<button onClick={() => setLanguage('en')}>English</button>
			<button onClick={() => setLanguage('es')}>Spanish</button>
		</>
	);
};

export default Translation;
