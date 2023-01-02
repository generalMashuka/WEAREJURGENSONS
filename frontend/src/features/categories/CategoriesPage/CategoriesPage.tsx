import { useSelector } from "react-redux";
import CategoryView from "../CategoryView/CategoryView";
import { selectCategories } from "../selectors";
import styles from "./styles.module.css";
import starButton from "./star_button.svg"

function CategoriesPage(): JSX.Element {
const categories = useSelector(selectCategories)
console.log(categories);


    return(
        <div>
           <div className={styles.maincontainer}>
            <img className={styles.star_button} src={starButton} alt="star" />
            {categories.map((category) => (
                <CategoryView key={category.id}  category={category}/>
            ))}
           </div>
        </div>
    )
}

export default CategoriesPage