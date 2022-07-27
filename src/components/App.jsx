import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';

const App = () => {
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

export default App;
