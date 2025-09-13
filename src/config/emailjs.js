// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: 'service_zt7gj6m',
  
  // Your EmailJS template ID for sending contact form to you
  TEMPLATE_ID: 'template_p177ro7',
  
  // Your EmailJS template ID for auto-reply to user
  AUTO_REPLY_TEMPLATE_ID: 'template_yu627cf', // You'll need to create this
  
  // Your EmailJS public key
  PUBLIC_KEY: 'qcdTg7tfbWwA4NH01',
  
  // Your email address where contact form submissions will be sent
  TO_EMAIL: 'hamza.raza@hatchpointsolutions.com'
};

// Template parameters mapping
export const TEMPLATE_PARAMS = {
  name: 'name',
  title: 'title',
  email: 'email',
  message: 'message',
  from_email: 'from_email',
  subject: 'subject'
};
