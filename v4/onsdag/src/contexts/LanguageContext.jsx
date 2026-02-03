import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(() => {
		const stored = localStorage.getItem("language");
		return stored === "sv" || stored === "en" ? stored : "sv";
	});

	// Synkar localStorage när language ändras
	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	const changeLanguage = (lang) => {
		if (lang === "sv" || lang === "en") {
			setLanguage(lang);
		}
	};

	const t = (key) => {
		return translations[language]?.[key] || key;
	};

	const value = useMemo(
		() => ({
			language,
			setLanguage,
			changeLanguage,
			t,
		}),
		[language],
	);

	return (
		<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage måste användas inom LanguageProvider");
	}

	return context;
}
