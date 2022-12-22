import { memo, useEffect } from 'react';
import { loadItems } from '../features/items/itemsSlice';
import ItemsPage from '../features/items/ItemsPage/ItemsPage';
import { useAppDispatch } from '../store';

function App(): JSX.Element {
  // используем useAppDispatch из store
  const dispatch = useAppDispatch();

  useEffect(() => {
    // диспатчим экшен криэтор loadSuggestions, который был сгенерирован в слайсе
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div>
      <ItemsPage/>
    </div>
  );
}

export default memo(App);
