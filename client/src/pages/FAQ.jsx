import React, { useState } from 'react';

function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is IATMSI-2026?",
      answer: "IATMSI-2026 is the 4th IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation. It's a globally recognized Scopus indexed event that brings together researchers, academics, and industry professionals to discuss cutting-edge advancements across diverse disciplines."
    },
    {
      id: 2,
      question: "When and where will the conference be held?",
      answer: "The conference will be held from March 12-14, 2026, in Gwalior, India, at ABV-IIITM Gwalior. The event will be conducted in hybrid mode, allowing both in-person and virtual participation."
    },
    {
      id: 3,
      question: "What is the paper submission deadline?",
      answer: "The paper submission deadline is December 15, 2025. Authors will be notified of acceptance by January 15, 2026, and camera-ready submissions are due by February 15, 2026."
    },
    {
      id: 4,
      question: "What is the page limit for papers?",
      answer: "Papers should be a maximum of 6 pages including references, formatted according to the IEEE template. Only PDF files are accepted for submission."
    },
    {
      id: 5,
      question: "Will the proceedings be indexed?",
      answer: "Yes, the conference proceedings will be published in IEEE Xplore Digital Library and will be Scopus indexed. All accepted papers will receive DOI assignment."
    },
    {
      id: 6,
      question: "What are the conference tracks?",
      answer: "The conference features five thematic tracks: Technology Solutions for Healthcare, Power Control Energy and Intelligent Transportation Technologies, AI IoT and Computer Vision Enabled Technologies, Green Electronics VLSI Communication and Sensor Based Technologies, and IT-enabled Management for Social Change."
    },
    {
      id: 7,
      question: "How can I register for the conference?",
      answer: "Registration details will be available on the conference website. Early bird registration will be open until January 31, 2026, with discounted rates available."
    },
    {
      id: 8,
      question: "Is there a student discount?",
      answer: "Yes, special rates are available for students. Please check the registration page for detailed pricing information and eligibility criteria."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about IATMSI-2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openItem === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openItem === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-orange-100 mb-6">
                Can't find the answer you're looking for? Contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@iatmsi2026.org"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Us
                </a>
                <a 
                  href="tel:+91-1234567890"
                  className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 