import { memo, useEffect } from 'react';
<<<<<<< HEAD

import { Routes, Route } from 'react-router-dom';
=======
import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import './App.css'
>>>>>>> 6803eed5fba57dc8d1f5ed4ef682fbeef798a38a

import NavBar from '../features/main/Navbar/NavBar';
import ItemsPage from '../features/items/ItemsPage/ItemsPage';
<<<<<<< HEAD

import { useAppDispatch } from '../store';
import './App.css';
=======
>>>>>>> 6803eed5fba57dc8d1f5ed4ef682fbeef798a38a
import MainPage from '../features/main/MainPage/MainPage';
import ContactsPage from '../features/contacts/ContactsPage';
import AuthPage from '../features/auth/authpage/authPage';
import ProfilePage from '../features/profile/ProfilePage';

import { loadCategories } from '../features/categories/categoriesSlice';

import { loadItems } from '../features/items/itemsSlice';
import { loginSuccess, userChecked } from '../features/auth/authSlice';
import { selectAuthChecked } from '../features/auth/selectors';


import AboutPage from '../features/about/AboutPage';
import ItemPage from '../features/items/ItemPage.tsx/ItemPage';


function App(): JSX.Element {
  // используем useAppDispatch из store
  const dispatch = useAppDispatch();
  const authChecked = useSelector(selectAuthChecked)

  useEffect(() => {
    // диспатчим экшен криэтор loadSuggestions, который был сгенерирован в слайсе
    dispatch(loadItems());
    dispatch(loadCategories());
    dispatch(userChecked());
    }, [dispatch]);

   
  return (
    <div>
      <NavBar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/admin" element={<ItemsPage />} />
=======
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AuthPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/profile" element={<ProfilePage />} />
>>>>>>> 6803eed5fba57dc8d1f5ed4ef682fbeef798a38a
      </Routes>
    </div>
  );
}

export default memo(App);
