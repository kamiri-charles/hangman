import './styles.css';

const MainMenu: React.FC = () => {
    return (
        <div className="main-menu">
            <div className="game-title">Hangman</div>

            <div className="play-btn">
                <i className="bx bx-play"></i>
            </div>
            

            <div className="how-to-play">How to play</div>
        </div>
    )
}

export default MainMenu;