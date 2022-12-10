import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//{name: 'dmitry', email: 'dmysamo@gmail.com', password: '2698sdvpiv'}

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const registerUser = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue({
        error: {
          message: error.message,
          code: error.response.status,
        },
      });
    }
  }
);
const loginUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue({
        error: {
          message: error.message,
          code: error.response.status,
        },
      });
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout', user);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue({
        error: {
          message: error.message,
          code: error.response.status,
        },
      });
    }
  }
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const userToken = state.user.token;
    if (!userToken) {
      return rejectWithValue({ error: null });
    }
    token.set(userToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue({
        error: {
          message: error.message,
          code: error.response.status,
        },
      });
    }
  }
);

const operations = {
  registerUser,
  loginUser,
  logOut,
  getCurrentUser,
};
export default operations;
