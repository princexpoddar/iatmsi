import React from 'react';

function IATMSICommittees() {
  const leadership = [
    {
      title: "Conference Patron",
      members: ["Prof. S. N. Singh, Director, ABV-IIITM Gwalior, India"]
    },
    {
      title: "General Chair",
      members: [
        "Prof. G. S. Tomar, Chair, IEEE MP Section, India",
        "Prof. Fushuan Wen, Zhejiang University, China",
        "Dr. Amit K. Gupta, Dyson, Singapore"
      ]
    },
    {
      title: "Conference Chair",
      members: ["Dr. Somesh Kumar, ABV-IIITM Gwalior, India"]
    }
  ];

  const mainCommittees = [
    {
      title: "Organizing Committee",
      members: [
        "Prof. Manisha Pattanaik (Chair), ABV-IIITM Gwalior, India",
        "Dr. Pinku Ranjan (Chair), ABV-IIITM Gwalior, India",
        "Dr. Arun Kumar (Chair), ABV-IIITM Gwalior, India",
        "Dr. Rohit Kumar, Delhi Technological University, Delhi, India",
        "Dr. Maneesh Pandey, Intel, India",
        "Dr. Praveen Singya, ABV-IIITM Gwalior, India",
        "Dr. Rahul Sharma, Ansys, India"
      ]
    },
    {
      title: "Technical Programme Committee",
      members: [
        "Dr. Gaurav Kaushal (Chair), ABV-IIITM Gwalior, India",
        "Prof. Mohd Helmy Abd Wahab, Universiti Tun Hussein Onn Malaysia",
        "Dr. Rajesh Rajagopal, IIM Tiruchirapalli, India",
        "Dr. Muhammad Shafiq, Guangzhou University, China",
        "Mr. Navnish Kumar, Synopsys, India",
        "Mr. Surendar Rama Sitaraman, Intel Corporation, Folsom, California, USA",
        "Dr. Shivali Sahota, Università degli Studi Niccolò Cusano, Italy",
        "Dr. Jyotindra Narayan, Imperial College London, UK",
        "Dr. Maanak Gupta, Tennessee Technological University, TN, USA",
        "Dr. Gaurav Sharma, Un. of Hertfordshire, UK",
        "Prof. Milka Potrebic, University of Belgrade, Serbia"
      ]
    },
    {
      title: "Finance Committee",
      members: [
        "Dr. Vishal Vyas (Chair), ABV-IIITM Gwalior, India",
        "Dr. Praveen Singya (Chair), ABV-IIITM Gwalior, India"
      ]
    },
    {
      title: "Publication Committee",
      members: [
        "Dr. Alok Kumar kamal (Chair), ABV-IIITM Gwalior, India",
        "Dr. Dilip Choudhary, VIT Vellore, India",
        "Dr. Pragya Swami, ABV-IIITM Gwalior, India"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IATMSI Committees
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Meet the distinguished team of experts organizing IATMSI-2026
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Conference Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Distinguished leaders guiding the conference towards excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((committee, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{committee.title}</h3>
                <div className="space-y-2">
                  {committee.members.map((member, memberIndex) => (
                    <p key={memberIndex} className="text-sm text-gray-600 leading-relaxed">
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Committees */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Organizing Committees
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized committees ensuring smooth execution of the conference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainCommittees.map((committee, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{committee.title}</h3>
                </div>
                <div className="space-y-2">
                  {committee.members.map((member, memberIndex) => (
                    <p key={memberIndex} className="text-sm text-gray-600 leading-relaxed">
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Committees */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Committees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Publicity and Promotions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dr. Rakesh Chowdhury (Chair), ABV-IIITM Gwalior</li>
                  <li>• Dr. Anand Sharma (Chair), MANIT Allahabad, India</li>
                  <li>• Prof. Kiran Talele (Chair), SPIT Mumbai, India</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Industry Relations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dr. Biswabandhu Jana (Chair), ABV-IIITM Gwalior, India</li>
                  <li>• Prof. Pankaj Srivastava (Chair), ABV-IIITM Gwalior, India</li>
                  <li>• Mr. M. K. Badapanda (Chair), RRCAT, Indore, India</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Web Committee</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dr. Gaurav Pandey (Chair), ABV-IIITM Gwalior, India</li>
                  <li>• Ms. Deepa Singh Sisodiya, ABV-IIITM Gwalior, India</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Interested in contributing to the conference organization? Contact us to learn about volunteer opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a 
                href="/register"
                className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IATMSICommittees; 