import React from 'react';
import ContactCard from './ContactCard';
import { User } from 'lucide-react';

const ContactList = ({ contacts, onDeleteContact, searchTerm }) => {
  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <User className="empty-state-icon" />
        <p className="empty-state-text">
          {searchTerm 
            ? `No contacts found matching "${searchTerm}".` 
            : 'No contacts yet. Add your first contact!'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="contact-list-container">
      <div className="contact-list-header">
        <h2>Contacts ({contacts.length})</h2>
        {searchTerm && (
          <span className="search-filter-badge">
            Filtered by: "{searchTerm}"
          </span>
        )}
      </div>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
