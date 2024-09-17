import './styles.css';

interface MainMenuProps {
    changePage: (page: string) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({changePage}) => {
    return (
        <div className="main-menu">
            <div className="game-title">Hangman</div>

            <div className="play-btn" onClick={() => changePage("categories")}>
                <i className="bx bx-play"></i>
            </div>
            

            <div className="how-to-play">How to play</div>
        </div>
    )
}

export default MainMenu;