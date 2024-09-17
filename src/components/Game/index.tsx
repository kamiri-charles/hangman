import { useEffect, useState } from "react";
import Loader from "../Loader";
import "./styles.css";

interface GameProps {
	category: string;
	changePage: (page: string) => void;
}

const Game: React.FC<GameProps> = ({ category, changePage }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [paused, setPaused] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false); 
		}, 2000);

		// Clean up the timer when the component unmounts
		return () => clearTimeout(timer);
	}, []);

	const alphabet = Array.from({ length: 26 }, (_, i) =>
		String.fromCharCode(97 + i)
	);

    if (loading) {
        return <Loader />

    } else if (!loading && paused) {
		return (
			<div className="wrapper-card">

				<div className="game-title">HANGMAN</div>
				
				<div className="pause-buttons">
					<div className="ps-btn" onClick={() => setPaused(false)}>Continue</div>
					<div className="ps-btn" onClick={() => changePage("categories")}>New Category</div>
					<div className="ps-btn" onClick={() => changePage("main-menu")}>Main Menu</div>
				</div>
			</div>
		)

	} else if (!loading && !paused) {
        return (
            <div className="wrapper-card">
			<div className="game-header">
				<div className="left">
					<div className="pause-btn" onClick={() => setPaused(true)}>
						<i className="bx bx-pause"></i>
					</div>
					<div className="current-category">{category}</div>
				</div>

				<div className="right">
					<div className="health">Health</div>
				</div>
			</div>

			<div className="play-area"></div>

			<div className="letters">
				{alphabet.map((letter, idx) => (
					<div className="letter" key={idx}>
						{letter}
					</div>
				))}
			</div>
		</div>
        )
    }
};

export default Game;
