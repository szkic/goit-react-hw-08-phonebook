import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className="flex items-center">
      {contact.name}: {contact.number}
      <div className="ml-6">
        <Button
          type="submit"
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          value={contact.id}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
