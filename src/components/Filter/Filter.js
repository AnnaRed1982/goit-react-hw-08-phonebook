import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const onCnange = evt => dispatch(setFilter(evt.target.value));

  return (
    <label htmlFor="filter">
      <TextField
        label="Find contact by name"
        variant="standard"
        type="search"
        name="filter"
        value={filter}
        onChange={onCnange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
