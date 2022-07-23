import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const myAction = createAction('myAction1');
const myAction2 = createAction('myAction2');

export default { addContact, deleteContact, changeFilter, myAction, myAction2 };
