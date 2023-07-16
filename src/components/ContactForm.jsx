import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';

const styles = {
  form: ['flex', 'flex-col', 'items-start', 'max-w-sm'].join(' '),
  label: ['flex', 'flex-col', 'mb-5', 'w-60'].join(' '),
};

export const ContactForm = props => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const { onSubmit } = props;

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
    onSubmit(false);

    form.reset();
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <TextField
            type="text"
            size="small"
            name="name"
            label="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label}>
          <TextField
            type="tel"
            size="small"
            name="number"
            label="Number"
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
