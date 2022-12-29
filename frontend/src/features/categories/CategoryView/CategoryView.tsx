import Category from "../types/Category";

type CategoryProps = {
  category: Category;
};

function CategoryView({ category }: CategoryProps): JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <img src={category.img} className="card-img" alt="..." />
        <h2>{category.name}</h2>
      </div>
    </div>
  );
}

export default CategoryView;
