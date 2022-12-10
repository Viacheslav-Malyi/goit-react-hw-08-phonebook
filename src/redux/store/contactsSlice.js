import { createSlice } from '@reduxjs/toolkit';
import operations from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addContactInState(state, action) {
      state.items.push(action.payload.contact);
    },
    removeContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    setFilter(state, action) {
      state.filter = action.payload.text;
    },
    editContact(state, action) {
      const { id, name, number } = action.payload.contact;
      state.items = state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            name,
            number,
          };
        }
        return item;
      });
    },
  },
  extraReducers: {
    [operations.getContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
  },
});

export const { setFilter, addContactInState, removeContact, editContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
