import { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu";
import Categories from "./components/Categories";
import Game from "./components/Game";
import "boxicons/css/boxicons.min.css";
import "./App.css";

function App() {
	const [currentPage, setCurrentPage] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [backgroundImage, setBackgroundImage] = useState<string>("");

	useEffect(() => {
		setCurrentPage("main_menu");
		setSelectedCategory("None");

		// Fetch a random image from the Picsum API
		const randomImageUrl = `https://picsum.photos/${window.innerWidth}/${window.innerHeight}`;
		setBackgroundImage(randomImageUrl);
	}, []);

	const renderPage = () => {
		switch (currentPage) {
			case "main_menu":
				return <MainMenu changePage={setCurrentPage} />;
			case "categories":
				return (
					<Categories
						changePage={setCurrentPage}
						selectCategory={setSelectedCategory}
					/>
				);
			case "game":
				return <Game category={selectedCategory} changePage={setCurrentPage} />;
			default:
				return <MainMenu changePage={setCurrentPage} />;
		}
	};

	return (
		<div
			id="App"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			{/* Render different components based on currentPage */}
			{renderPage()}
		</div>
	);
}

export default App;
