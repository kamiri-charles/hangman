import { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu";
import Categories from "./components/Categories";
import "boxicons/css/boxicons.min.css";
import "./App.css";

function App() {
	const [currentPage, setCurrentPage] = useState<string>("");

	useEffect(() => {
		setCurrentPage("main_menu");
	}, []);

	const renderPage = () => {
		switch (currentPage) {
			case "main_menu":
				return <MainMenu changePage={setCurrentPage} />;
			case "categories":
				return <Categories changePage={setCurrentPage} />;
			default:
				return <MainMenu changePage={setCurrentPage} />;
		}
	};

	return (
		<div id="App">
			{/* Render different components based on currentPage */}
			{renderPage()}
		</div>
	);
}

export default App;
