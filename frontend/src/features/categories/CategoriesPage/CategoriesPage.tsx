import { useSelector } from "react-redux";
import CategoryView from "../CategoryView/CategoryView";
import { selectCategories } from "../selectors";
import styles from "./styles.module.css";

function CategoriesPage(): JSX.Element {
const categories = useSelector(selectCategories)
console.log(categories);


    return(
        <div>
           <div className={styles.maincontainer}>
            {categories.map((category) => (
                <CategoryView key={category.id}  category={category}/>
            ))}
           </div>
        </div>
    )
}

export default CategoriesPage