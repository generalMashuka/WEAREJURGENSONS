import styles from "./styles.module.css";
import { useAppDispatch } from "../../store";
// import ItemView from "../items/ItemView/ItemView";
// import { selectItems, selectLoaderror } from "../items/selectors";
import React from "react";
import { itemCreated } from "../items/itemsSlice";
import { useNavigate } from "react-router-dom";

function ProfilePage(): JSX.Element {
  // const items = useSelector(selectItems);
  // const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();
  const navigate  = useNavigate();

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [img, setImg] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category_id, setCategory_id] = React.useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(itemCreated({
      name, price, img, description, category_id,
      id: 0
    }));
    setName('')
    setPrice(0)
    setImg('')
    setDescription('')
    navigate('/items')
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPrice(Number(event.target.value));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value);
  };

  const handleImgChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setImg(event.target.value);
  };

  const handleCategory_id = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory_id(Number(event.target.value));
  };

  return (
    <div className={styles.maincontainer}>
      <h1>Профиль администратора</h1>
      <div className={styles.correctItemsBox}>
        <p className={styles.title}>Редактирование товаров</p>
        <div className={styles.newItemBox}>
          <p className={styles.title}>Создание нового товара</p>

          <form className={styles.inputGroup} onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <label htmlFor="name-input" className={styles.formLabel}>
                Название товара
              </label>
              <input
                type="text"
                className={styles.input}
                id="name-input"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="price-input" className={styles.formLabel}>
                Цена товара
              </label>
              <input
                type="number"
                className={styles.input}
                id="price-input"
                name="price"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="description-input" className={styles.formLabel}>
                Описание товара
              </label>
              <input
                type="text"
                className={styles.input}
                id="description-input"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="img-input" className={styles.formLabel}>
                Изображение
              </label>
              <input
                type="text"
                className={styles.input}
                id="img-input"
                name="img"
                value={img}
                onChange={handleImgChange}
              />
            </div>
            <div className={styles.inputBox}>
              <label className={styles.formLabel}>
                Выберите категорию товара
              </label>
              <select onChange={handleCategory_id}>
                <option value="1">Категория 1</option>
                <option value="2">Категория 2</option>
                <option value="3">Категория 3</option>
                <option value="4">Категория 4</option>
              </select>
            </div>

            <button type="submit" className="">
              Создать товар
            </button>
          </form>
        </div>
      </div>
      <br />
      <div>
        <p className={styles.title}>Сформированные заказы</p>
      </div>
      
    </div>
  );
}

export default ProfilePage;
