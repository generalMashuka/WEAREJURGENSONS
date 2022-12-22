import { memo, useEffect } from 'react';
import { useAppDispatch } from '../store';

function App(): JSX.Element {
  // используем useAppDispatch из store
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // диспатчим экшен криэтор loadSuggestions, который был сгенерирован в слайсе
  //   dispatch(loadSuggestions());
  // }, [dispatch]);

  return (
    <div>

    </div>
  );
}

export default memo(App);
