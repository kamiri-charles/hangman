import { PongSpinner } from "react-spinners-kit";
import "./styles.css";

const Loader: React.FC = () => {
  return (
		<div className="wrapper-card">
			<div className="game-title">Hangman</div>
			<div className="spinner">
				<PongSpinner color="white" size={100} />
				<span>Loading...</span>
			</div>
		</div>
	);
}

export default Loader;