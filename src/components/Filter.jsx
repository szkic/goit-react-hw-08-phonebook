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
    'rounded-xl',
    'bg-slate-50',
    'p-9',
    'shadow-lg',
  ].join(' '),
};

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = e => dispatch(filterContact(e.target.value));

  return (
    <div className={styles.container}>
      <TextField
        size="small"
        label="Find contact by name"
        onChange={handleInputChange}
      />
      <Button onClick={handleOpen} variant="outlined">
        Add contact
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <ContactForm onSubmit={() => setOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};
