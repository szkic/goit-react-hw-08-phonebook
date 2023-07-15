import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ContactForm } from './ContactForm';
import { useState } from 'react';

const styles = {
  container: [
    'flex',
    'items-center',
    'justify-evenly',
    'border-b-2',
    'border-neutral-400',
    'p-2',
    'mb-4',
  ].join(' '),
  modal: [
    'absolute',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'w-96',
    'border-2',
    'border-solid',
    'border-black',
    'bg-slate-50',
    'p-4',
    'shadow-lg',
  ].join(' '),
};

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleInputChange = e => dispatch(filterContact(e.target.value));

  // żeby zamknąć modala, muszę przekazać propsy do ContactForm - setOpen(false)
  return (
    <div className={styles.container}>
      {/* <h3>Find contact by name</h3> */}
      <TextField
        size="small"
        label="Find contact by name"
        onChange={handleInputChange}
      />
      <Button onClick={handleOpen}>Add contact</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <ContactForm />
        </Box>
      </Modal>
    </div>
  );
};
