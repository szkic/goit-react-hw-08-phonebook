import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact, editContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  TableSortLabel,
  TablePagination,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { ContactModal } from './ContactModal';
import { ContactForm } from './ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const sortedRowInformation = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((el, index) => [el, index]);
  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedRowArray.map(el => el[0]);
};

export const ContactList = () => {
  const [orderDirection, setOrderDirection] = useState('asc');
  const [contactId, setContactId] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const valueToOrderedBy = 'name';

  const handleOpenDelete = e => {
    setContactId(e.currentTarget.id);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleRequestSort = () => {
    const isAscending = orderDirection === 'asc';
    setOrderDirection(isAscending ? 'desc' : 'asc');
  };

  const createSortHandler = () => event => handleRequestSort();

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handeChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value), 10);
    setPage(0);
  };

  const handleModalOpen = e => {
    setContactId(e.currentTarget.id);
    setOpen(true);
  };
  const handleModalClose = () => setOpen(false);

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactId));
    toast.success('Contact deleted', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contactData = {
      name,
      number,
      contactId,
    };

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

    dispatch(editContact(contactData));

    toast.info('Contact changed', {
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
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 900, width: '40%' }} key="name">
              <TableSortLabel
                active={valueToOrderedBy === 'name'}
                direction={'name' ? orderDirection : 'asc'}
                onClick={createSortHandler()}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontWeight: 900 }} key={'number'}>
              Phone number
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 900 }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRowInformation(
            contacts,
            getComparator(orderDirection, valueToOrderedBy)
          )
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(contact => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.number}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton
                      aria-label="edit"
                      id={contact.id}
                      sx={{
                        ':hover': {
                          color: '#1876D1',
                        },
                      }}
                      onClick={handleModalOpen}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="delete"
                      sx={{
                        color: red[500],
                        ':hover': {
                          color: '#e30022',
                        },
                      }}
                      id={contact.id}
                      onClick={handleOpenDelete}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handeChangeRowsPerPage}
      />
      <ContactModal
        open={open}
        handleModalClose={handleModalClose}
        title="Edit contact"
      >
        <ContactForm onSubmit={handleSubmit} />
      </ContactModal>

      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>No</Button>
          <Button
            onClick={(handleCloseDelete, handleDeleteContact)}
            autoFocus
            variant="contained"
          >
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
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
    </>
  );
};
