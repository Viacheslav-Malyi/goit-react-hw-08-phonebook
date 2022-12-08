import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6384ce714ce192ac6064048d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const respoce = await axios.get('/contacts');
      return respoce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesege);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addConyact',
  async (text, thunkAPI) => {
    const { name, phone } = text;
    try {
      const responce = await axios.post('/contacts', { name, phone });
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesege);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${contactID}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messege);
    }
  }
);
