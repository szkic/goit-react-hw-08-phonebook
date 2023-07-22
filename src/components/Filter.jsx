import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { ContactForm } from './ContactForm';
import { ContactModal } from './ContactModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      return toast.error(`${name} is alredy in contacts`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      const regexName =
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
      if (!regexName.test(name)) {
        return toast.error('Please enter right name', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }

      const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
      if (!regexPhone.test(number)) {
        return toast.error('Please enter the correct number xxx-xxx-xxx', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }

    dispatch(addContact(contact));
    setOpen(false);

    toast.success('Contact added', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

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
      <ContactModal
        open={open}
        handleModalClose={handleModalClose}
        title="Add contact"
      >
        <ContactForm onSubmit={handleSubmit} />
      </ContactModal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
