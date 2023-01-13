import Category from "../types/Category";
import styles from "./styles.module.css";


type CategoryProps = {
  category: Category;
};

function CategoryView({ category }: CategoryProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.pic}>
        <img src={category.img} alt="" className={styles.img}/>
        <div className={styles.name}>
        <p className={styles.text}>{category.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
