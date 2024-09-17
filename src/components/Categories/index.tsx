import "./styles.css";

interface CategoriesProps {
	changePage: (page: string) => void;
	selectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ changePage, selectCategory }) => {

	const handle_category_pick = (cat: string) => {
    selectCategory(cat);
    changePage('game');
	};

	return (
		<div className="wrapper-card">
			<div className="categories-title">
				<div className="back-btn" onClick={() => changePage("main-menu")}>
					<i className="bx bx-arrow-back"></i>
				</div>
				<div>Pick a Category</div>
			</div>

			<div className="categories-wrapper">
				{/* Each category calls handle_category_pick on click */}
				<div
					className="category"
					onClick={() => handle_category_pick("Movies")}
				>
					Movies
				</div>
				<div
					className="category"
					onClick={() => handle_category_pick("TV Shows")}
				>
					TV Shows
				</div>
				<div
					className="category"
					onClick={() => handle_category_pick("Countries")}
				>
					Countries
				</div>
				<div
					className="category"
					onClick={() => handle_category_pick("Capital Cities")}
				>
					Capital Cities
				</div>
				<div
					className="category"
					onClick={() => handle_category_pick("Animals")}
				>
					Animals
				</div>
				<div
					className="category"
					onClick={() => handle_category_pick("Sports")}
				>
					Sports
				</div>
			</div>
		</div>
	);
};

export default Categories;
