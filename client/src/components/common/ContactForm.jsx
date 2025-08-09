import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Enter subject of your message' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder={field.placeholder}
            />
          </div>
        ))}
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
            placeholder="Enter your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm; 