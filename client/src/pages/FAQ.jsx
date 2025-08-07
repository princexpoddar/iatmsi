import React from 'react';
import faqData from '../data/faqData.json';
import PageHeader from '../components/common/PageHeader';
import FAQAccordion from '../components/common/FAQAccordion';
import ContactSection from '../components/common/ContactSection';

function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about IATMSI-2026 conference registration, submission, and participation."
        />

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.faqCategories.map((category, categoryIndex) => (
            <FAQAccordion key={categoryIndex} category={category} categoryIndex={categoryIndex} />
          ))}
        </div>

        {/* Contact Information */}
        <ContactSection
          title="Still Have Questions?"
          description="If you couldn't find the answer to your question above, please contact our support team."
          buttonText="Contact Support"
          email="iatmsi@iiitm.ac.in"
          icon={
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default FAQ; 