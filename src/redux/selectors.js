import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.userContacts;

export const selectStatusFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    if (filter.status === '') {
      return contacts;
    }
    if (filter.status !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.status.toLowerCase())
      );
    }
  }
);
