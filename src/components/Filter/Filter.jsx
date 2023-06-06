import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import ss from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const filterID = nanoid();
  return (
    <div className={ss.find}>
      <label htmlFor={filterID}>Find contacts by name</label>
      <input
        className={ss.input_search}
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
        id={filterID}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
