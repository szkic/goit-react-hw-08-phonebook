import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import css from './Phonebook.module.css';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading ? <p>Loading contacts...</p> : <ContactList />}
      {error && <p>Data loading error</p>}
    </div>
  );
};
