import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import defaultContacts from '../../components/contacts.json';

const items = createReducer(defaultContacts, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
