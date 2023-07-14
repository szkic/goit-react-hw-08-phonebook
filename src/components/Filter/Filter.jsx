import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => dispatch(filterContact(e.target.value));

  return (
    <>
      <h3>Find contact by name</h3>
      <input onChange={handleInputChange} />
    </>
  );
};
