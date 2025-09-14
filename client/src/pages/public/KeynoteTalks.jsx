import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const API_URL = 'http://localhost:8000/api/keynotes';

function KeynoteTalks() {
  const [keynotes, setKeynotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKeynotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL);
        setKeynotes(res.data);
      } catch (err) {
        setError('Failed to fetch keynotes');
      }
      setLoading(false);
    };
    fetchKeynotes();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Keynote Speakers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Distinguished speakers from leading academic institutions and industry experts
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Keynote Speakers */}
        {keynotes.length > 0 ? (
          <div className="space-y-12">
            {keynotes.map(keynote => (
              <div key={keynote._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Speaker Image and Basic Info */}
                  <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col items-center justify-center bg-gray-50">
                    {/* Speaker Image */}
                    <div className="mb-6">
                      {keynote.imageUrl && keynote.imageUrl.trim() !== '' ? (
                        <img 
                          src={keynote.imageUrl} 
                          alt={keynote.speaker}
                          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold border-4 border-white shadow-lg ${keynote.imageUrl && keynote.imageUrl.trim() !== '' ? 'hidden' : 'flex'}`}
                      >
                        {keynote.speaker?.charAt(0) || 'K'}
                      </div>
                    </div>
                    
                    {/* Speaker Name and Affiliation */}
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{keynote.speaker}</h3>
                    <p className="text-lg text-gray-600 text-center mb-6">{keynote.affiliation}</p>
                    
                    {/* Talk Title */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Title:</h4>
                      <p className="text-gray-600 italic leading-relaxed">"{keynote.title}"</p>
                    </div>
                  </div>

                  {/* Right Side - Biography and Abstract */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    {/* Biography Section */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4">Biography:</h5>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {keynote.biography}
                      </p>
                    </div>

                    {/* Abstract Section */}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-4">Abstract:</h5>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {keynote.abstract}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎤</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No keynote speakers yet</h3>
            <p className="text-gray-500">Keynote speakers will be announced soon</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              More keynote speakers and detailed program information will be announced as we approach the conference dates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/conference-program"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Full Program
              </a>
              <a 
                href="/register"
                className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeynoteTalks;