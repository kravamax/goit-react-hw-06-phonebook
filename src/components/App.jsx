import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
      <Toaster />
    </>
  );
};

export default App;
