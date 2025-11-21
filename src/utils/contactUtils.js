export const validateContact = (contact) => {
  const { name, phone, email } = contact;
  
  if (!name?.trim()) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (!phone?.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  if (!email?.trim()) {
    return { isValid: false, error: 'Email is required' };
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

export const formatPhoneNumber = (phone) => {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX if 10 digits
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone; // Return original if not 10 digits
};

export const generateContactId = () => {
  return Date.now() + Math.random();
};

