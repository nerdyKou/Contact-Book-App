import React from 'react';
import { User, Phone, Mail, Trash2 } from 'lucide-react';

const ContactCard = ({ contact, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      onDelete(contact.id);
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <div className="contact-avatar">
          <User className="avatar-icon" />
        </div>
        <button
          onClick={handleDelete}
          className="delete-button"
          title={`Delete ${contact.name}`}
          aria-label={`Delete ${contact.name}`}
        >
          <Trash2 className="delete-icon" />
        </button>
      </div>

      <h3 className="contact-name">{contact.name}</h3>

      <div className="contact-details">
        <div className="contact-detail">
          <Phone className="detail-icon" />
          <span className="detail-text">{contact.phone}</span>
        </div>
        <div className="contact-detail">
          <Mail className="detail-icon" />
          <span className="detail-text">{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
