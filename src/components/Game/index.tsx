import { useEffect, useState } from "react";
import Loader from "../Loader";
import data from "../../assets/data.json"
import "./styles.css";

interface GameProps {
	category: string;
	changePage: (page: string) => void;
}

const Game: React.FC<GameProps> = ({ category, changePage }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [paused, setPaused] = useState<boolean>(false);
	const [word, setWord] = useState<string>("");
	const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
	const [lives, setLives] = useState<number>(8);
	const [win, setWin] = useState<boolean>(false);
	const [lose, setLose] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false); 
		}, 2000);

		setWord(
			data[category as keyof typeof data][
				Math.floor(Math.random() * data[category as keyof typeof data].length)
			]
		);

		// Clean up the timer when the component unmounts
		return () => clearTimeout(timer);
	}, []);

	const alphabet = Array.from({ length: 26 }, (_, i) =>
		String.fromCharCode(97 + i)
	);

	const handle_key_press = (letter: string) => {
		const letters_divs = document.getElementsByClassName("letter");
		let letterFound = false;

		for (let i = 0; i < letters_divs.length; i++) {
			if (letters_divs[i].innerHTML === letter) {
				letters_divs[i].classList.add("found");
				letterFound = true;
			}
		}

		// Add "used" class to the pressed key
		const pressedKey = document.querySelector(`.key[data-letter="${letter}"]`);
		if (pressedKey) {
			if (!pressedKey.classList.contains("used")) {
				pressedKey.classList.add("used");

				if (!letterFound) {
					setLives((prev) => prev - 1);
				}
			}
		}

		// Update guessed letters
		setGuessedLetters((prev) => new Set(prev.add(letter)));

		// Check for win state
		const uniqueLetters = new Set(
			word.toLowerCase().replace(/\s+/g, "").split("")
		);
		const guessedCorrectly = [...uniqueLetters].every((letter) =>
			guessedLetters.has(letter)
		);

		if (guessedCorrectly) {
			setWin(true);
		}

		// Check whether the player has run out of lives
		if (lives <= 0) {
			setLose(true);
		}
	};



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

	} else if (!loading && !paused && !win && !lose) {
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
								<div className="health">Lives: {lives}</div>
							</div>
						</div>

						<div className="play-area">
							{word.trim().split(/\s+/).map((word, idx) => (
								<div className="word" key={idx}>
									{word.split('').map((letter, x) => (
										<div className="letter" key={x}>{letter.toUpperCase()}</div>
									))}
								</div>
							))}
						</div>

						<div className="keys">
							{alphabet.map((letter, idx) => (
								<div className="key" key={idx} data-letter={letter.toUpperCase()} onClick={() => handle_key_press(letter.toUpperCase())}>
									{letter.toUpperCase()}
								</div>
							))}
						</div>
					</div>
				);
    } else if (win && !loading) {
		return (
			<div className="wrapper-card">
				<div className="game-title">HANGMAN</div>
				<div className="win-text">Congratulations! You won!</div>
				<div className="win-word">Your word was "<span>{word}</span>".</div>
				<div className="pause-buttons">
					<div className="ps-btn" onClick={() => changePage("categories")}>
						New Category
					</div>
					<div className="ps-btn" onClick={() => changePage("main-menu")}>
						Main Menu
					</div>
				</div>
			</div>
		);
	} else if (lose && !loading) {
		return (
			<div className="wrapper-card">
				<div className="game-title">HANGMAN</div>
				<div className="win-text">Oh no! You ran out of lives!</div>
				<div className="win-word">
					Your word was "<span>{word}</span>".
				</div>
				<div className="pause-buttons">
					<div className="ps-btn" onClick={() => changePage("categories")}>
						New Category
					</div>
					<div className="ps-btn" onClick={() => changePage("main-menu")}>
						Main Menu
					</div>
				</div>
			</div>
		);
	}
};

export default Game;
