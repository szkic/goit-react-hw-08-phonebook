import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';

const styles = {
  form: ['flex', 'flex-col', 'items-start', 'max-w-sm'].join(' '),
  label: ['flex', 'flex-col', 'mb-5'].join(' '),
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    if (stateContactsNames.includes(name)) {
      form.reset();
      return alert(`${name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <TextField
            type="text"
            size="small"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label}>
          Number
          <TextField
            type="tel"
            size="small"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
    </div>
  );
};
