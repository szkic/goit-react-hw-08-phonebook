import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.contacts;
export const selectFilteredContacts = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filteredContacts) => {
    if (filteredContacts === '') {
      return contacts;
    } else {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filteredContacts.filter) ?? []
      );
    }
  }
);
