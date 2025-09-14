import React, { useState, useEffect } from "react";
import axios from 'axios';
import PdfViewer from '../../components/PdfViewer/PdfViewer';

function CallForPapers() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/pdfs/page/call-for-papers');
        setPdfs(res.data);
      } catch (err) {
        console.error('Failed to fetch PDFs:', err);
      }
      setLoading(false);
    };
    fetchPdfs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Call for Papers</h1>
          <h2 className="text-2xl mb-6 opacity-90">
            IATMSI-2026 Call for Papers
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8 opacity-90">
            IATMSI-2026 will serve as a dynamic platform, facilitating the convergence of researchers, academics, and industry practitioners. This event aims to foster the exchange of ideas and the sharing of recent research breakthroughs across a multitude of domains, including healthcare, agriculture, intelligent transportation, VLSI, and renewable electronics, along with their real-world applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/paper-submission"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 hover:-translate-y-0.5 transition-all"
            >
              Submit Your Paper
            </a>
          </div>
        </div>
      </section>

      {/* Conference Theme */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Conference Theme</h2>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-12 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">"Enabling the Change! Social Innovation for Sustainable Societies"</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            Under this theme, this flagship conference is poised to deliver a comprehensive exploration of technology and management, emphasizing interdisciplinarity and quality. All accepted and presented papers will undergo submission for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.
          </p>
        </div>
      </section>

      {/* PDF Documents */}
      {!loading && pdfs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Call for Papers Documents
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pdfs.map((pdf) => (
                <PdfViewer
                  key={pdf._id}
                  url={pdf.url}
                  title={pdf.title}
                  height="500px"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conference Tracks */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Conference Tracks
        </h2>
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {/* Track 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Track 1: Innovative Solutions for Healthcare
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• Biomedical Instrumentation and Sensors</li>
                    <li>• Bioengineering, Bioinformatics, Infection biology, Environmental Biotechnology</li>
                    <li>• IoT and Soft Computing Applications in Healthcare</li>
                    <li>• AI, Blockchain and Cloud computing in Healthcare</li>
                    <li>• Healthcare Mobile and Web Applications & Telemedicine</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Accelerating Healthcare with Data and AI to Meet COVID-19 Challenges</li>
                    <li>• Ethics, Privacy, and Security in Healthcare</li>
                    <li>• Technology and Digital Health</li>
                    <li>• Other Related areas of Healthcare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Track 2: Power, Control, Energy and Intelligent Transportation Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• Intelligent Transportation, Internet of Vehicles</li>
                    <li>• Control, Communication and Automation Enabled Technologies</li>
                    <li>• Mechatronics and Robotics Technologies</li>
                    <li>• Blockchain, Inter-Vehicle Wireless Communications Technologies</li>
                    <li>• Electric and Hybrid-Electric Vehicles</li>
                    <li>• Power Systems and Smart Grids</li>
                    <li>• Nano-Fluids Dynamics for Industrial Applications</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Renewable and Sustainable Energy Solutions</li>
                    <li>• Smart Grid, Electric Vehicle, Battery Management System</li>
                    <li>• Machine Vibration & Condition Monitoring</li>
                    <li>• Signal Processing for Machine Health Monitoring</li>
                    <li>• Intelligent Reflecting Surfaces</li>
                    <li>• Unmanned Aerial Vehicles/Drones Technology</li>
                    <li>• Other Related areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Track 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Track 3: Artificial Intelligence (AI), IoT and Computer Vision Enabled Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• Image Processing and Computational Intelligence in Agriculture</li>
                    <li>• Biotechnology Solutions for Sustainable Agriculture</li>
                    <li>• Applications of Image and Video Processing for Industrial Applications</li>
                    <li>• Machine Learning & AI Approaches to Manufacturing Applications</li>
                    <li>• High-Performance Computing, Cloud Computing, IoT based Technologies</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Machine Learning (ML), Deep Learning and Natural Language Processing (NLP)</li>
                    <li>• Data Privacy and Protection, Cyber Security, Surveillance and Fraud Detection</li>
                    <li>• Applications of AR/VR for Customer Engagement</li>
                    <li>• Application of AI & ML in Management</li>
                    <li>• Other Related areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Track 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Track 4: Green Electronics, VLSI, Communication and Sensor Based Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• Wireless Sensor Networks, Advances in Sensor Technology</li>
                    <li>• Nanotechnology and Sensor Based Solutions for Environment-Friendly Agriculture</li>
                    <li>• Green Technology and Rural Environmental Concerns</li>
                    <li>• Technology in Agriculture for Sustainable Development</li>
                    <li>• Hybrid Systems, Biosensors</li>
                    <li>• Optical and Wireless Communications</li>
                    <li>• Technologies for 5G and beyond Communication</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Antenna Design</li>
                    <li>• VLSI Design, Embedded System and Emerging Technologies</li>
                    <li>• IC Design and Testing, Flexible Electronics and sustainable Technologies</li>
                    <li>• Communication Technologies and Networks, Digital Manufacturing</li>
                    <li>• Signal & Image Processing, LORA Functioning in Industrial Environment</li>
                    <li>• Mobile HMI for Electronic Products</li>
                    <li>• Nanotechnology Based Human-Centered Designs</li>
                    <li>• Other Related areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Track 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Track 5: IT enabled Management for Social Change
              </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• Entrepreneurship, Innovation, with Information Technology</li>
                    <li>• Technological Forecasting and Social Change</li>
                    <li>• Technology Roadmaps for Transition Management</li>
                    <li>• IT Enabled Marketing</li>
                    <li>• Consumer Technology</li>
                    <li>• Big Data Analytics</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Business Analytics</li>
                    <li>• Sustainable Manufacturing through IT Enabled Technologies</li>
                    <li>• Paradigm Shift in Human Resource Practices through Digital Technologies</li>
                    <li>• Health Care Management for Healthy Society</li>
                    <li>• Technology-Enabled Financial Management</li>
                    <li>• Other Related areas</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Important Dates & Guidelines */}
      <section id="dates" className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Important Dates & Submission Guidelines
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 px-4 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h3>
            {[
              {event:"1st Round of Full Paper Submission Due Date", date:"September 20, 2025"},
              {event:"1st Review Round Notification (Accept, Revise, Reject)", date:"October 20, 2025"},
              {event:"2nd Round of Full Paper Submission Due Date", date:"November 20, 2025"},
              {event:"2nd Review Round Notification Deadline (Accept or Reject)", date:"November 30, 2025"},
              {event:"Camera-ready Paper Submission", date:"December 15, 2025"},
              {event:"Registration Deadline", date:"January 15, 2026"},
            ].map((d, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-6 bg-gray-50 border-l-4 border-blue-500 rounded-lg hover:bg-gray-100 hover:translate-x-1 transition-all"
              >
                <div>
                  <p className="font-semibold text-gray-800">{d.event}</p>
                  <p className="text-blue-500 font-medium">{d.date}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 border-l-4 border-purple-500 text-white">
              <div>
                <p className="font-semibold">Conference Date</p>
                <p className="font-medium">March 12-14, 2026</p>
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Submission Guidelines
            </h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Papers should be 6-8 pages in IEEE format</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>All papers must be original and not previously published</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Papers will be peer-reviewed by experts in the field</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>All accepted papers will be submitted to IEEE Xplore</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>At least one author must register and present the paper</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Use the provided IEEE template for formatting</span>
                </li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Participation */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Benefits of Participation
        </h2>
        <div className="grid gap-8 max-w-6xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {title:"IEEE Xplore", description:"Publication in IEEE Xplore Digital Library", icon:"📚", color:"from-blue-600 to-blue-500"},
            {title:"Scopus Indexing", description:"Indexed in Scopus and other major databases", icon:"🔍", color:"from-green-600 to-green-500"},
            {title:"Networking", description:"Connect with leading researchers and industry experts", icon:"🤝", color:"from-purple-600 to-purple-500"},
            {title:"Recognition", description:"Gain recognition in your research field", icon:"🏆", color:"from-red-600 to-red-500"},
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {b.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8 opacity-90">
            Have questions about paper submission or the conference? Reach out to our team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
              <a
                href="mailto:iatmsi@iiitm.ac.in"
                className="text-white hover:text-blue-200 transition-colors"
              >
                iatmsi@iiitm.ac.in
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Paper Submission</h3>
              <a
                href="mailto:iatmsi@iiitm.ac.in"
                className="text-white hover:text-blue-200 transition-colors"
              >
                iatmsi@iiitm.ac.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallForPapers;
