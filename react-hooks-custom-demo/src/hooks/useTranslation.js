import { useLocalStorage } from '../hooks/useStorage';
import * as translations from '../assets/translations';

const useTranslation = () => {
	const [language, setLanguage] = useLocalStorage('language', 'en');
	const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
		'fallbackLanguage',
		'en'
	);

	const getNestedTranslation = (language, keys) => {
		return keys.reduce((obj, key) => obj?.[key], translations[language]);
	};

	const translate = key => {
		const keys = key.split('.');

		return (
			getNestedTranslation(language, keys) ??
			getNestedTranslation(fallbackLanguage, keys) ??
			key
		);
	};

	return {
		language,
		setLanguage,
		fallbackLanguage,
		setFallbackLanguage,
		t: translate,
	};
};

export default useTranslation;
