import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import contactsActions from 'redux/contacts/contacts-actions';
import { useDispatch } from 'react-redux';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(contactsActions.deleteContact(id))}
      ></button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
