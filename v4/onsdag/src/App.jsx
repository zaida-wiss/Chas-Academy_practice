import { useTheme } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { Card } from "./components/Card";

function App() {
	const { theme } = useTheme();

	const appStyles = {
		backgroundColor: theme == "light" ? "#f5f5f5" : "#0f0f1a",
		padding: "2rem",
		transition: "background-color 0.3s ease",
		minHeight: "100vh",
	};

	return (
		<div style={appStyles}>
			<h1 style={{ color: theme == "light" ? "#333" : "#fff" }}>
				Theme context demo
			</h1>
			<ThemeToggle />
			<Card title="Tips från Robin">
				<p>Använd Context för globala states som tex. teman och auth!</p>
			</Card>
			<Card title="Vecka 5">
				<p>Implementera ThemeContext i ert boiler room projekt!</p>
			</Card>
		</div>
	);
}

export default App;
