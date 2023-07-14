import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.listEl}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
