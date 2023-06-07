import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocalStorage) {
      setContacts(contactsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const includeName = contacts.find(
      user => user.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (includeName) {
      toast.error(`${contact.name} is already in contacts`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleDelete = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <Contacts contacts={filterContacts} onDelete={handleDelete} />

      <ToastContainer />
    </>
  );
};

export default App;
