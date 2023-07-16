import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';

// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
import { ContactForm } from './ContactForm';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const styles = [
  'flex',
  'items-center',
  'justify-evenly',
  'border-b-2',
  'border-neutral-400',
  'p-2',
  'mb-4',
].join(' ');

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleInputChange = e => dispatch(filterContact(e.target.value));

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
    setOpen(false);

    form.reset();
  };

  return (
    <div className={styles}>
      <TextField
        size="small"
        label="Find contact by name"
        onChange={handleInputChange}
      />
      <Button onClick={handleModalOpen} variant="outlined">
        Add contact
      </Button>
      <ContactModal open={open} handleModalClose={handleModalClose}>
        <ContactForm onSubmit={handleSubmit} />
      </ContactModal>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <ContactForm onSubmit={() => setOpen(false)} />
        </Box>
      </Modal> */}
    </div>
  );
};
