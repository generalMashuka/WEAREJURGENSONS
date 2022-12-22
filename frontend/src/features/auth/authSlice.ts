import { createSlice } from '@reduxjs/toolkit';
import AuthState from './types/State';

const initialState: AuthState = {
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
