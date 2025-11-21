import { useState } from 'react';

const useContacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", phone: "+1-555-0123", email: "john.doe@email.com" },
    { id: 2, name: "Jane Smith", phone: "+1-555-0456", email: "jane.smith@email.com" },
    { id: 3, name: "Mike Johnson", phone: "+1-555-0789", email: "mike.j@email.com" }
  ]);

  const addContact = (contactData) => {
    const newContact = {
      id: Date.now(),
      name: contactData.name.trim(),
      phone: contactData.phone.trim(),
      email: contactData.email.trim()
    };
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const searchContacts = (searchTerm) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return {
    contacts,
    addContact,
    deleteContact,
    searchContacts
  };
};

export default useContacts;
