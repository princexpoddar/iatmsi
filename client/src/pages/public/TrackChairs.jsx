import React from 'react';

function TrackChairs() {
  const tracks = [
    {
      title: "Track 1: Technology Solutions for Healthcare",
      chairs: [
        "Dr. Irshad Ahmad Ansari (Chair), ABV-IIITM Gwalior",
        "Dr. Biswabandhu Jana (Chair), ABV-IIITM Gwalior, India",
        "Dr. Bhanu Pratap Singh, Prestige (Trinity) group, Bhopal, India",
        "Dr. Naveen Mishra (Chair), VIT Vellore, India",
        "Dr. Manjeet Kumar, Delhi Technological University, Delhi, India",
        "Dr. Parag Chatterjee, National Technological University, Argentina",
        "Dr. Shivali Sahota, Università degli Studi Niccolò Cusano, Italy",
        "Dr. Vinal Patel, ABV-IIITM Gwalior, India"
      ]
    },
    {
      title: "Track 2: Power, Control, Energy and Intelligent Transportation Technologies",
      chairs: [
        "Dr. Pragya Swami (Chair), ABV-IIITM Gwalior, India",
        "Dr. Praveen Singya (Chair), ABV-IIITM Gwalior, India",
        "Dr. Ashish Singhal (Chair), SISTeC Bhopal, India",
        "Dr. Gaurav Khare (Chair), MITS Gwalior, India",
        "Dr. Satish Kumar, BIET Jhansi, India",
        "Dr. Anup Shukla, Indian Institute of Technology Jammu, India",
        "Prof. K K Pattanaik, ABV-IIITM Gwalior, India",
        "Dr. Gaurav Dwivedi, MANIT Bhopal, India"
      ]
    },
    {
      title: "Track 3: Artificial Intelligence (AI), IOT and Computer Vision Enabled Technologies",
      chairs: [
        "Dr. Pinku Ranjan (Chair), ABV-IIITM Gwalior, India",
        "Dr. Sandesh Jain (Chair), ABV-IIITM Gwalior, India",
        "Dr. Vipul Dixit (Chair), Bennett University, India",
        "Dr. Rakesh Chowdhury (Chair), ABV-IIITM Gwalior",
        "Dr. Praveen Lalwani, VIT Vellore, India",
        "Dr. Sachin Sharma, East Point College of Engg. & Technology Bengaluru, India",
        "Dr. Yash Agrawal, DA-IICT Gandhinagar, Gujarat, India",
        "Dr. Prasenjit Chanak, Indian Institute of Technology BHU, India",
        "Dr. Rahul Kumar Verma, IIIT Lucknow, India",
        "Dr. Robin Singh Bhadoria, GLA Mathura, India",
        "Dr. Vijay Bhaskar Semwal, MANIT Bhopal, India"
      ]
    },
    {
      title: "Track 4: Green Electronics, VLSI, Communication and Sensor Based Technologies",
      chairs: [
        "Dr. Gaurav Kaushal (Chair), ABV-IIITM Gwalior, India",
        "Dr. Alok Kumar kamal (Chair), ABV-IIITM Gwalior, India",
        "Dr. Niharika Anand (Chair), IIIT Lucknow, India",
        "Dr. Rohit Kumar (Chair), Delhi Technological University, Delhi, India",
        "Dr. Satish Chandra (Chair), MNNIT Allahabad, India",
        "Dr. Binod Prasad, ABV-IIITM Gwalior, India",
        "Dr. Pankaj Sharma, IIITDM Jabalpur, India",
        "Dr. Atul Kumar Sharma, IIT Jodhpur, India",
        "Prof. Balwinder Raj, NIT Jalandhar, India",
        "Dr. Atul Kumar Nishad, National Institute of Technology, Warangal, India",
        "Dr. Niharika Anand, IIIT Lucknow, India",
        "Dr. Ambika Prasad Shah, Indian Institute of Technology Jammu, India",
        "Dr. Sweta Chander, LPU, India",
        "Dr. Prabhat Sharma, VNIT Nagpur, India",
        "Dr. Amit Kumar, Pandit Deendayal Energy University, India",
        "Dr. Shweta Meena, NIT Kurukshetra, India",
        "Dr. Dharmendra Singh Yadav, NIT Kurukshetra, India",
        "Dr. Jai gopal Pandey, CEERI Pilani, India",
        "Dr. Bhupendra Reniwal, IIT Jodhpur, India"
      ]
    },
    {
      title: "Track 5: IT enabled Management for Social Change",
      chairs: [
        "Dr. Gaurav Pandey(Chair), ABV-IIITM Gwalior, India",
        "Dr. Amandeep Kaur (Chair), ABV-IIITM Gwalior, India",
        "Dr. Rajesh Rajagopal (Chair), IIM Tiruchirapalli, India",
        "Dr. Vishal Vyas, ABV-IIITM Gwalior, India",
        "Dr. Gaurav Sharma, ABV-IIITM Gwalior, India",
        "Dr Vandana, IIM Sirmaur, India",
        "Dr Vinay Singh, ABV-IIITM Gwalior, India",
        "Dr Rajeev A, IIM Raipur, India",
        "Dr. Deepak Kumar, MANIT Bhopal, India",
        "Dr. Sumit Kumar, Jain University, Bangalore",
        "Dr. Ritu Rana, IIM Jammu",
        "Dr. Pimmy Gandotra, JIIT Noida",
        "Dr. Manoj Dash, ABV-IIITM Gwalior, India"
      ]
    }
  ];

  const trackIcons = [
    "🏥", "⚡", "🤖", "🔌", "💼"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Track Chairs
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Meet the distinguished experts leading our five specialized conference tracks
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Conference Tracks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Five specialized tracks covering cutting-edge research areas in technology and management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{trackIcons[index]}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Track {index + 1}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {track.title.split(':')[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Track Details */}
        <section className="space-y-12">
          {tracks.map((track, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {track.title}
                  </h3>
                  <p className="text-gray-600">
                    {track.chairs.length} Track Chairs
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {track.chairs.map((chair, chairIndex) => (
                  <div key={chairIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {chair}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Track Statistics */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Track Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across interdisciplinary domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Specialized Tracks</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60+</div>
              <div className="text-gray-600">Track Chairs</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Submit Your Research
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Choose the track that best fits your research area and submit your paper for consideration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/call-for-papers"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Call for Papers
              </a>
              <a 
                href="/paper-submission"
                className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                Submit Paper
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TrackChairs; 