import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import useContacts from './hooks/useContacts';
import './styles/ContactBook.css';

function App() {
  const { contacts, addContact, deleteContact, searchContacts } = useContacts();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredContacts = searchTerm ? searchContacts(searchTerm) : contacts;

  const handleAddContact = (contactData) => {
    addContact(contactData);
  };

  const handleDeleteContact = (id) => {
    deleteContact(id);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const toggleForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="contact-book">
      <div className="contact-book-container">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">📞 Contact Book</h1>
          <p className="app-subtitle">Manage your contacts with ease</p>
        </header>

        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        {/* Contact Form */}
        <ContactForm 
          onAddContact={handleAddContact}
          isVisible={showAddForm}
          onToggleForm={toggleForm}
        />

        {/* Contact List */}
        <ContactList 
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
          searchTerm={searchTerm}
        />

        {/* Footer */}
        <footer className="app-footer">
          <p>Contact Book App • Add, Search, and Manage Your Contacts</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
