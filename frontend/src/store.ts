import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import authSlice from './features/auth/authSlice';
import itemsSlice from './features/items/itemsSlice';
import categoriesSlice from './features/categories/categoriesSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    auth: authSlice,
    items: itemsSlice,
    categories: categoriesSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
