import { useSelector } from 'react-redux';
import ItemView from '../ItemView/ItemView';
import { selectItems, selectLoaderror } from '../selectors';
import styles from './styles.module.css';
import * as api from '../api';
import Item, { ItemId } from '../types/Item';
import { itemDeleted, itemUpdated } from '../itemsSlice';
import { useAppDispatch } from '../../../store';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search(): JSX.Element {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // строка поиска

  const loadError = useSelector(selectLoaderror);
  const dispatch = useAppDispatch();
  const items = useSelector(selectItems);

  const searchItems = useMemo(() => {
    return items.filter((item) => item.name === query);
  }, [items, query]);

  const handleItemRemove = (id: ItemId): void => {
    dispatch(itemDeleted(id));
  };

  const handleItemUpdate = (item: Item): void => {
    dispatch(itemUpdated(item));
  };

  return (
    <div>
      <div className={styles.cards}>
        {loadError ? (
          <b>{loadError}</b>
        ) : (
          searchItems.map((item) => (
            <ItemView
              key={item.id}
              item={item}
              onRemove={handleItemRemove}
              onUpdate={handleItemUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
