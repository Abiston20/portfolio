
import emailjs from '@emailjs/browser';

// EmailJS configuration - Updated with actual values
const EMAILJS_SERVICE_ID = 'service_pnv37qn';
const EMAILJS_TEMPLATE_ID = 'template_6rlod2w'; 
const EMAILJS_PUBLIC_KEY = '05SBSlDDvG_SVGy6h';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending email with data:', formData);
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'abiston20@gmail.com',
        reply_to: formData.email,
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', result);
    return result.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized');
  } else {
    console.warn('EmailJS not configured - using demo mode');
  }
};
