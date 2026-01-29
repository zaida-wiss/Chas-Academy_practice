import { createContext, useContext, useState, useEffect, useMemo } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		const stored = localStorage.getItem("theme");
		return stored == "dark" || stored == "light" ? stored : "light";
	});

	//Synkar localStorage när theme ändras
	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	const value = useMemo(
		() => ({
			theme,
			setTheme,
			toggleTheme,
		}),
		[theme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme måste användas inom ThemeProvider");
	}

	return context;
}
