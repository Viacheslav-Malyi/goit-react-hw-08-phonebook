import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const auth = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.registerUser.rejected](state, action) {
      state.error = action.payload.error;
    },
    [authOperations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.loginUser.rejected](state, action) {
      state.error = action.payload.error;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload.error;
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [authOperations.getCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload.error;
    },
  },
});
export const { resetError } = auth.actions;
export default auth.reducer;
