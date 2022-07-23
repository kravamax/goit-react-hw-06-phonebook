import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.idContact),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
