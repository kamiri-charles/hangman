import "./styles.css";

const Categories: React.FC = () => {
  return (
    <div className="categories">
        <div className="categories-title">
            <div className="back-btn"><i className="bx bx-arrow-back"></i></div>
            <div>Pick a Category</div>
        </div>

        <div className="categories-wrapper">
            <div className="category">Movies</div>
            <div className="category">TV Shows</div>
            <div className="category">Countries</div>
            <div className="category">Capital Cities</div>
            <div className="category">Animals</div>
            <div className="category">Sports</div>
        </div>
    </div>
  )
}

export default Categories