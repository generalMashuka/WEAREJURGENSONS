import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/State';
import * as api from './api'
import Credentials from './types/Credentials';


const initialState: AuthState  = {
  user: undefined,
  authChecked: false,
} 


export const userChecked = createAsyncThunk(
  'auth/userChecked',
  async () => {
    const user = await api.checkUser();
    return user;
  }
)

export const loginSuccess = createAsyncThunk (
  'auth/loginSuccess',
  async (credentials: Credentials) => {
    const user  = await api.login(credentials);
    console.log(user)
    return user;
      }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(userChecked.fulfilled, (state, action) => {
        const user = action.payload;
        if (user.isLoggedIn) {
         state.user = undefined
        } 
    })
    .addCase(loginSuccess.fulfilled, ( state, action) => {
      const user = action.payload;
      state.user = user;
    })
    .addCase(loginSuccess.rejected, (state, action) => {
      // в action.error попадёт ошибка сгенерированная санком
      state.loadError = action.error.message;
    });
  }
});

export default authSlice.reducer;
