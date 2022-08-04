import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import Contact from '../Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const list = useSelector(getVisibleContacts);

  return (
    <ul className={s.listContainer}>
      {list.map(({ name, number, id }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
