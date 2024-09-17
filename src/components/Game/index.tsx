import "./styles.css"

interface GameProps {
    category: string;
    changePage: (page: string) => void;
}

const Game: React.FC<GameProps> = ({category, changePage}) => {

    const alphabet = Array.from({ length: 26 }, (_, i) =>
			String.fromCharCode(97 + i)
		);

	return (
    <div className="game">
        <div className="game-header">
            <div className="left">
                <div className="pause-btn"><i className="bx bx-pause"></i></div>
                <div className="current-category">{category}</div>
            </div>

            <div className="right">
                <div className="health">Health</div>
            </div>
        </div>

        <div className="play-area"></div>

        <div className="letters">
            {alphabet.map((letter, idx) => <div className="letter" key={idx}>{letter}</div>)}
        </div>
    </div>
    )
};

export default Game;