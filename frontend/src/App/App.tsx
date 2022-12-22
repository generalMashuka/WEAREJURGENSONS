import { memo, useEffect } from 'react';

import NavBar from '../features/main/Navbar/NavBar';

import { loadItems } from '../features/items/itemsSlice';
import ItemsPage from '../features/items/ItemsPage/ItemsPage';

import { useAppDispatch } from '../store';
import './App.css'

function App(): JSX.Element {
  // используем useAppDispatch из store
  const dispatch = useAppDispatch();

  useEffect(() => {
    // диспатчим экшен криэтор loadSuggestions, который был сгенерирован в слайсе
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <div>

      <NavBar />
      <h1>Это главная страница</h1>
      {/* <div>
      <video className='video-clip' width="320" height="240" autoPlay loop muted>
      <source src={require('./IMG_5228.webm')} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      </div> */}

      <ItemsPage/>

    </div>
  );
}

export default memo(App);
