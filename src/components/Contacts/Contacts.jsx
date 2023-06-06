import React from 'react';
import PropTypes from 'prop-types';
import ss from './Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={ss.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={ss.button_delete}
            type="button"
            onClick={() => onDelete(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

export default Contacts;
