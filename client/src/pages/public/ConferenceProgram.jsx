import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const API_URL = 'http://localhost:8000/api/conference-program/public';

function ConferenceProgram() {
  const [programData, setProgramData] = useState({
    highlights: [],
    stats: [],
    schedule: [],
    theme: null,
    info: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamic SVG icons for highlights
  const icons = [
    // Star
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
    </svg>,
    // Calendar
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 
      2v14c0 1.1.9 2 2 2h14c1.1 0 
      2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
      16H5V9h14v11z"/>
    </svg>,
    // Users
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 
      2.99-3S17.66 5 16 5s-3 
      1.34-3 3 1.34 3 3 3zm-8 
      0c1.66 0 2.99-1.34 
      2.99-3S9.66 5 8 5 5 6.34 5 
      8s1.34 3 3 3zm0 2c-2.33 
      0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 
      0c-.29 0-.62.02-.97.05 
      1.16.84 1.97 1.97 1.97 
      3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>,
    // Lightbulb
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 21h6v-1H9v1zm3-19C8.14 
      2 5 5.14 5 9c0 3.53 2.61 
      6.43 6 6.92V19h2v-3.08c3.39-.49 
      6-3.39 6-6.92 0-3.86-3.14-7-7-7z"/>
    </svg>,
    // Book
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 
      2v16c0 1.1.9 2 2 2h12c1.1 
      0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 
      18H6V4h12v16z"/>
    </svg>,
  ];

  useEffect(() => {
    const fetchProgramData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL);
        const items = res.data;
        
        // Group items by type
        const grouped = {
          highlights: items.filter(item => item.type === 'highlight'),
          stats: items.filter(item => item.type === 'stats'),
          schedule: items.filter(item => item.type === 'schedule'),
          theme: items.find(item => item.type === 'theme') || null,
          info: items.filter(item => item.type === 'info')
        };
        
        setProgramData(grouped);
      } catch (err) {
        console.error('Failed to fetch program data:', err);
        // Fallback to static data
        setProgramData({
          highlights: [
            {
              title: "Technical Sessions",
              description: "Multiple technical tracks covering diverse research domains and innovation areas.",
              data: {
                items: [
                  "Healthcare Technology & Social Innovation",
                  "Power, Control & Intelligent Transportation",
                  "AI, IoT & Computer Vision Technologies",
                  "Green Electronics & VLSI Communications"
                ]
              }
            },
            {
              title: "Keynote Speakers & Events",
              description: "Distinguished speakers from leading academic institutions and industry experts.",
              data: {
                items: [
                  "6 Keynote presentations",
                  "Panel discussions on social innovation",
                  "Interactive poster sessions",
                  "Award ceremonies & recognition"
                ]
              }
            }
          ],
          stats: [
            { data: { count: "3", description: "Conference Days" } },
            { data: { count: "12+", description: "Technical Sessions" } },
            { data: { count: "6", description: "Keynote Speakers" } },
            { data: { count: "2", description: "Poster Sessions" } }
          ],
          schedule: [
            {
              data: {
                day: "Day 1 - March 12, 2026",
                highlights: [
                  "Registration & Welcome",
                  "Opening Ceremony",
                  "Keynote: Social Innovation in Technology",
                  "Technical Sessions & Poster Session"
                ]
              }
            },
            {
              data: {
                day: "Day 2 - March 13, 2026",
                highlights: [
                  "Keynote: Sustainable Technology Solutions",
                  "Technical Sessions",
                  "Panel Discussion: Future of Social Innovation",
                  "Interactive Poster Session"
                ]
              }
            },
            {
              data: {
                day: "Day 3 - March 14, 2026",
                highlights: [
                  "Keynote: Emerging Technologies for Social Impact",
                  "Technical Sessions",
                  "Award Ceremony",
                  "Closing Ceremony"
                ]
              }
            }
          ],
          theme: {
            data: {
              quote: "Enabling the Change! Social Innovation for Sustainable Societies",
              details: "March 12-14, 2026 | Hybrid Event | ABV-IIITM Gwalior, India"
            }
          },
          info: [
            {
              data: {
                items: [
                  "All times in IST | Hybrid event with in-person and virtual options",
                  "Technical sessions include Q&A | Interactive poster presentations",
                  "Conference proceedings available online | IEEE Xplore submission"
                ]
              }
            }
          ]
        });
      }
      setLoading(false);
    };
    fetchProgramData();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive program schedule for IATMSI-2026 featuring keynotes, technical sessions, and networking.
          </p>
        </div>

        {/* Conference Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programData.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.data.count}</div>
              <div className="text-gray-600">{stat.data.description}</div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {programData.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full"
            >
              {/* Highlight Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {highlight.title}
                </h3>
              </div>
              
              {/* Highlight Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {highlight.description}
              </p>

              {/* Highlight Content - No items field anymore */}
              <div className="text-center py-4">
                <p className="text-gray-500 italic">
                  {highlight.data.description || 'Highlight details will be displayed here.'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conference Schedule Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Schedule Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three-day comprehensive program covering all aspects of social innovation and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programData.schedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {schedule.data.day}
                </h4>
                <div className="space-y-2">
                  {schedule.data.highlights?.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Theme Highlight */}
        {programData.theme && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Conference Theme 2026</h3>
              <p className="text-xl italic mb-4">
                "{programData.theme.data.quote}"
              </p>
              <p className="text-white/90">
                {programData.theme.data.details}
              </p>
            </div>
          </div>
        )}

        {/* Important Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key details for conference attendees and participants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programData.info.length > 0 ? (
              programData.info.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors duration-300"
                >
                  <h4 className="text-gray-900 font-semibold mb-3 text-lg">
                    {info.title || `Information ${index + 1}`}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.description || 'No description available.'}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500 italic">
                  Important information will be displayed here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Program Information
          </h3>
          <p className="text-gray-600 mb-4">
            For detailed schedule and session info, contact us.
          </p>
          <a
            href="mailto:iatmsi@iiitm.ac.in"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact Support
          </a>
          <p className="text-gray-500 text-xs mt-3">
            iatmsi@iiitm.ac.in | +91-8962280784
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConferenceProgram;
