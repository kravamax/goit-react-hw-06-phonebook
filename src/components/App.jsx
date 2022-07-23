import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import contactsData from './contacts.json';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';

import store from '../redux/store';
import action from '../redux/contacts/contacts-actions';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  console.log('store', store);
  console.log('getStore', store.getState());

  console.log(
    'myAction',
    store.dispatch(action.myAction({ name: 'Alex', number: '997-333' }))
  );
  console.log('myAction2', store.dispatch(action.myAction2(95)));

  useEffect(() => {
    const storageData = localStorage.getItem('contacts');
    const parsedStorageData = JSON.parse(storageData);

    if (parsedStorageData === null || parsedStorageData.length === 0) {
      setContacts(contactsData);
      return;
    }

    setContacts(parsedStorageData);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    setContacts([...contacts, contact]);
    Notify.success(`${contact.name} added to contacts!`);
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const filterByName = () => {
    const normilizeFilter = filter.toLocaleLowerCase();
    const filteredData = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normilizeFilter)
    );
    return filteredData;
  };

  const deleteContact = (idContact, name) => {
    Notify.info(`${name} was deleted from contacts!`);
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };

  const getNamesListOfContacts = () => {
    return contacts.map(({ name }) => name);
  };

  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={getNamesListOfContacts()}
          onSubmit={addContact}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList list={filterByName()} onDeleteClick={deleteContact} />
      </Container>
    </div>
  );
};

export default App;
