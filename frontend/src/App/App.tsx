import { memo, useEffect } from 'react';

import {Routes, Route} from 'react-router-dom'

import NavBar from '../features/main/Navbar/NavBar';

import { loadItems } from '../features/items/itemsSlice';
import ItemsPage from '../features/items/ItemsPage/ItemsPage';

import { useAppDispatch } from '../store';
import './App.css'
import MainPage from '../features/main/MainPage/MainPage';
import ContactsPage from '../features/contacts/ContactsPage';
import { loadCategories } from '../features/categories/categoriesSlice';
import AboutPage from '../features/about/AboutPage';
import ItemPage from '../features/items/ItemPage.tsx/ItemPage';

function App(): JSX.Element {
  // используем useAppDispatch из store
  const dispatch = useAppDispatch();

  useEffect(() => {
    // диспатчим экшен криэтор loadSuggestions, который был сгенерирован в слайсе
    dispatch(loadItems());
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemPage />} />
      </Routes>
     
    </div>
  );
}

export default memo(App);
