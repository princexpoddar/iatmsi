import React, { useState } from 'react';

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Registration & Payment",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
        </svg>
      ),
      items: [
        {
          question: "The prices mentioned on the website for registration are they per author or per paper?",
          answer: "Per Presenter/Author up to 1 paper."
        },
        {
          question: "As students the three of us would like to attend the conference and present our paper. Would it be possible for all three of us to present our paper in parts?",
          answer: "Yes, provided all three have to register. One should be register as author and rest two person should be register as attendee."
        },
        {
          question: "We have 3 authors and would like present. Do all have to register as Authors?",
          answer: "No. Only 1 Author needs to register as Author and rest can be registered as Attendees."
        },
        {
          question: "Is it compulsory to make payment in order get paper published?",
          answer: "Yes."
        },
        {
          question: "If i make online payment, will that be sufficient for paper publication or i have to be physically present at venue?",
          answer: "Physical or virtual presence is required for publication."
        },
        {
          question: "If I want to present my paper and attend only the conference but not the tutorials, should I register myself as a Student/Professional or as a Student/Professional Attendee?",
          answer: "In that case, you have to register as Student/Professional category. Student/Professional Attendee means only those non-authors etc. who only want to attend the conference."
        },
        {
          question: "Registration Grant section states that \"a limited number of registration grants are available for high-quality research papers\". What does it mean?",
          answer: "It means on the last day of the conference, we will announce the winners of registration grants and will refund their registration money. The criteria for choosing the registration grant winners is the quality of their papers which will be judge by their track chairs/Co-Chairs during the presentation at the conference."
        }
      ]
    },
    {
      title: "Certificates & Attendance",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1v5h5v10H6V3h7z"/>
        </svg>
      ),
      items: [
        {
          question: "Who gets the Presentation certificate?",
          answer: "The author who has registered and physically or virtually presented will get the Presentation Certificate."
        },
        {
          question: "Will all authors get the presentation Certificate?",
          answer: "No. Only Registered authors who physically or virtually present will get the certificates."
        },
        {
          question: "My Co-author is faculty and won't be able attend, whether they will get the certificate, if paid but not attended.",
          answer: "No. Only Registered and Physically or virtually present will get the certificate."
        },
        {
          question: "I have an early return train/flight, may I get the certificate early?",
          answer: "Certificates will be distributed at the End of Day on all the days. Early request for distribution will not be entertained but we can post or mail your certificate at your address."
        },
        {
          question: "I am not able to attend the conference; can I send someone else to collect my certificate?",
          answer: "No. Only physically present participant will receive the certificate."
        },
        {
          question: "If I attend the only Tutorials on the first day of the conference, then Shall I receive any certificate?",
          answer: "Yes, you will receive a certificate."
        },
        {
          question: "I need an invitation certificate for the visa. How I can get the certificate?",
          answer: "For, this please write a request mail to us."
        }
      ]
    },
    {
      title: "Paper Submission & Format",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      items: [
        {
          question: "Reviews states Paper is not as per IEEE format. If I submit without correction will it get published?",
          answer: "No. Any rejection from IEEE side due to any reason will be authors responsibility."
        },
        {
          question: "Most of my review comments revolve around not following the IEEE template format. Which is the correct IEEE format?",
          answer: "IEEE template is available on https://www.ieee.org/conferences/publishing/templates"
        },
        {
          question: "One of the review comments states that one implementation detail is missing. However, adding that to my paper would violate the strict 6-pages size limit. What should I do in such cases? Will my paper be rejected for publication?",
          answer: "Maximum page limited is six. If your page count increases after incorporating the reviewer comments, then you have to remove some unwanted or common information available in the paper but in any case, the page count should not go beyond 6. However, authors can add up to 2 extra pages with the appropriate fee payment per page. The manuscript must be submitted in pdf format only, and the file size of your manuscript should not exceed 10 MB. This is the policy of IEEE. Authors must use the manuscript template as follows: Overleaf, LaTeX, or Word. The manuscript has to be uploaded online at the IATMSI-2025 using the Microsoft CMT paper submission portal."
        },
        {
          question: "After creating a camera-ready paper and passing all plagiarism checks, would my paper go through a final sanity check from IATMSI's side to make sure everything is as expected so that it surely gets published?",
          answer: "Yes."
        },
        {
          question: "I wrote the paper as a student in May 2024 as part of my final semester thesis. However, I am a working professional now. Does this make me eligible to register at the conference as a student or as a professional?",
          answer: "It depends on the affiliation mentioned in the paper. If you mentioned affiliation of your previous college or university, then it is treated as a student paper and you have to register as a student category. If you have mentioned your current affiliation i.e. industry, college etc. then you have register in the professional category."
        }
      ]
    },
    {
      title: "Conference Details & Presentation",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      items: [
        {
          question: "What would be presentation Dates & when the schedule will be uploaded?",
          answer: "Presentation dates would be from 6th March to 8th March 2025. Schedule will be uploaded as per dates mentioned on the website."
        },
        {
          question: "Is it mandatory to attend Tutorials?",
          answer: "No."
        },
        {
          question: "Can I choose the date of presentation?",
          answer: "No. The presentation will be as per schedule only."
        },
        {
          question: "What does \"Hybrid\" mode mean? Am I allowed to present my paper virtually or do I have to be physically present in Gwalior?",
          answer: "You can attend the conference physically or virtually as per your convenience."
        },
        {
          question: "If I present my paper virtually: Will I receive a certificate? Will I be eligible to compete for the Best Paper Awards? Will my paper be published in IEEE Xplore?",
          answer: "Yes, you will receive the certificate of the presentation and also be eligible for the best paper award. Also, your paper will be published in IEEE Xplore."
        },
        {
          question: "If I present physically: Will I be provided with accommodation, food, and travel during the course of the conference? Any extra covid protocols I should follow?",
          answer: "We will provide the accommodation in the ABV-IIITM Gwalior on a nominal payment basis. Also, if you attend physically then you can enjoy the cultural programs, gala dinner, and other events during the conference. Registration fees include a registration kit, three days lunch coupons, high tea, cultural event coupons and one-day Gala dinner coupons."
        }
      ]
    },
    {
      title: "Student & Travel Grants",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18.69V7.31A2 2 0 0 0 18.69 6H5.31A2 2 0 0 0 4 7.31v11.38A2 2 0 0 0 5.31 20h13.38A2 2 0 0 0 20 18.69zM12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      items: [
        {
          question: "Are there any travel grants for students?",
          answer: "Yes."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about IATMSI-2026 conference registration, submission, and participation.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>
              
              {/* Category Questions */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  return (
                    <div
                      key={itemIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          Q. {item.question}
                        </span>
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                              openItems.has(globalIndex) ? 'rotate-180' : ''
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 10l5 5 5-5z"/>
                          </svg>
                        </div>
                      </button>
                      
                      {openItems.has(globalIndex) && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold text-blue-600">A. </span>
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              If you couldn't find the answer to your question above, please contact our support team.
            </p>
            <a
              href="mailto:iatmsi@iiitm.ac.in"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contact Support
            </a>
            <p className="text-gray-500 text-sm mt-4">
              iatmsi@iiitm.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 