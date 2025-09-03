import React from 'react';
import contactData from '../../data/contactData.json';
import PageHeader from '../../components/common/PageHeader';
import ContactCard from '../../components/common/ContactCard';
import SocialLink from '../../components/common/SocialLink';
import ContactForm from '../../components/common/ContactForm';

function ContactSupport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          title="Contact Support"
          description="Get in touch with us for any queries, technical support, or assistance regarding IATMSI-2026 conference."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactData.contactMethods.map((method, index) => (
                  <ContactCard key={index} method={method} />
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
              <p className="text-gray-600 mb-6">Stay updated with the latest conference news and announcements.</p>
              <div className="flex space-x-4">
                {contactData.socialLinks.map((social, index) => (
                  <SocialLink key={index} social={social} />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visit Our Campus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{contactData.campus.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{contactData.campus.description}</p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Address:</strong> {contactData.campus.address}</p>
                <p><strong>Phone:</strong> {contactData.campus.phone}</p>
                <p><strong>Email:</strong> {contactData.campus.email}</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={contactData.campus.mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABV-IIITM Gwalior Campus Location"
                className="w-full h-64"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSupport; 