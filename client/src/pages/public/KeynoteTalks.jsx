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
        <h2 className="text-2xl font-bold mb-4">Keynote Speakers</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <ul className="space-y-4">
          {keynotes.map(k => (
            <li key={k._id} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">{k.speaker}</h3>
              <p className="text-gray-600">{k.affiliation}</p>
              <p className="mt-2 text-gray-800">{k.title}</p>
              <p className="mt-2 text-gray-700">{k.biography}</p>
              <p className="mt-2 text-gray-700">{k.abstract}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KeynoteTalks;