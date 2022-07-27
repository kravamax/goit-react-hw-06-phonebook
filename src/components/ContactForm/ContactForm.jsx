import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { getContacts } from 'redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const listContactsNames = useSelector(getContacts);

  const handleChange = event => {
    const { value, name } = event.currentTarget;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkForExistContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(contactsActions.addContact({ name, number }));

    reset();
  };

  const checkForExistContact = addNameContact => {
    const normalizedNameContact = addNameContact.toLowerCase();
    return listContactsNames.some(
      ({ name }) => name.toLowerCase() === normalizedNameContact
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contactsNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ContactForm;
