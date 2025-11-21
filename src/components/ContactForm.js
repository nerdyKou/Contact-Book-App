import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { validateContact } from '../utils/contactUtils';

const ContactForm = ({ onAddContact, isVisible, onToggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validateContact(formData);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    onAddContact(formData);
    setFormData({ name: '', phone: '', email: '' });
    setError('');
    onToggleForm();
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '' });
    setError('');
  };

  if (!isVisible) {
    return (
      <div className="add-contact-button-container">
        <button
          onClick={onToggleForm}
          className="add-contact-button"
        >
          <Plus className="icon" />
          Add New Contact
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h2>Add New Contact</h2>
        <button onClick={onToggleForm} className="close-button">
          <X className="icon" />
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Add Contact
          </button>
          <button type="button" onClick={handleReset} className="reset-button">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
