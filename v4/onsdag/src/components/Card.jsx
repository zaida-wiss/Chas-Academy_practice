import { useTheme } from "../contexts/ThemeContext";

export function Card({ title, children }) {
	const { theme } = useTheme();

	const styles = {
		backgroundColor: theme == "light" ? "#ffffff" : "#1a1a2e",
		color: theme == "light" ? "#333333" : "#eaeaea",
		padding: "1rem",
		borderRadius: "8px",
		margin: "1rem 0",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	};

	return (
		<div style={styles}>
			<h3>{title}</h3>
			{children}
		</div>
	);
}
