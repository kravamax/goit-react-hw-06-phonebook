import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import Contact from '../Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const list = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={s.listContainer}>
      {list.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id, name)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
