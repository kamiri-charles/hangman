import { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu";
import Categories from "./components/Categories";
import Game from "./components/Game";
import Loader from "./components/Loader"; 
import "boxicons/css/boxicons.min.css";
import "./App.css";

function App() {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("None");
	const [backgroundImage, setBackgroundImage] = useState<string>("");

	useEffect(() => {
		setCurrentPage("main-menu");

		// Fetch a random image from the Picsum API
		const randomImageUrl = `https://picsum.photos/${window.innerWidth}/${window.innerHeight}`;

		const img = new Image();
		img.src = randomImageUrl;

		// When the image is loaded, set the background image and mark as loaded
		img.onload = () => {
			setBackgroundImage(randomImageUrl);
			setLoaded(true);
		};

		// Set loaded to false while the image is loading
		setLoaded(false);
	}, []);

	const renderPage = () => {
		switch (currentPage) {
			case "main-menu":
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
				return <Loader />;
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
				display: loaded ? "block" : "none", // Hide until loaded
			}}
		>
			{/* Render different components based on currentPage */}
			{loaded ? renderPage() : <Loader />}
		</div>
	);
}

export default App;
