import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from '../../state/auth.state';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const API_URL = 'http://localhost:8000/api/keynotes';

const sanitizeInput = (input) => {
  // Basic sanitization to prevent XSS
  if (typeof input !== 'string') return '';
  return input.replace(/[<>"'`]/g, '');
};

const KeynoteForm = ({ onSubmit, editingKeynote, onCancel }) => {
  const [form, setForm] = useState({
    speaker: '',
    affiliation: '',
    biography: '',
    title: '',
    abstract: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (editingKeynote) {
      setForm(editingKeynote);
    } else {
      setForm({ speaker: '', affiliation: '', biography: '', title: '', abstract: '', imageUrl: '' });
    }
  }, [editingKeynote]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: sanitizeInput(e.target.value) });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    if (!editingKeynote) {
      setForm({ speaker: '', affiliation: '', biography: '', title: '', abstract: '', imageUrl: '' });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {editingKeynote ? 'Edit Keynote Speaker' : 'Add New Keynote Speaker'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Speaker Name *</label>
            <input
              name="speaker"
              value={form.speaker}
              onChange={handleChange}
              placeholder="Speaker Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation *</label>
            <input
              name="affiliation"
              value={form.affiliation}
              onChange={handleChange}
              placeholder="Institution/Organization"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Speaker Image URL</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/speaker-image.jpg"
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">
            Enter a direct link to the speaker's image (JPG, PNG, or WebP format recommended)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Biography *</label>
          <textarea
            name="biography"
            value={form.biography}
            onChange={handleChange}
            placeholder="Speaker Biography"
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Talk Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Keynote Talk Title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Abstract *</label>
          <textarea
            name="abstract"
            value={form.abstract}
            onChange={handleChange}
            placeholder="Talk Abstract"
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {editingKeynote ? 'Update Keynote' : 'Add Keynote'}
          </button>
          {editingKeynote && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
    </form>
    </div>
  );
};

const AdminKeynoteTalks = () => {
  const { authInfo } = useAuthState();
  const [keynotes, setKeynotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingKeynote, setEditingKeynote] = useState(null);

  useEffect(() => {
    if (authInfo.isAuthenticated && authInfo.token) {
      fetchKeynotes();
    }
  }, [authInfo.isAuthenticated, authInfo.token]);

      const fetchKeynotes = async () => {
        setLoading(true);
        try {
          const res = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${authInfo.token}` },
          });
          setKeynotes(res.data);
        } catch (err) {
          setError('Failed to fetch keynotes');
        }
        setLoading(false);
      };

  const addKeynote = async (data) => {
    try {
      if (editingKeynote) {
        await axios.put(`${API_URL}/${editingKeynote._id}`, data, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        setEditingKeynote(null);
      } else {
      await axios.post(API_URL, data, {
        headers: { Authorization: `Bearer ${authInfo.token}` },
      });
      }
      fetchKeynotes();
    } catch (err) {
      setError('Failed to save keynote');
    }
  };

  const deleteKeynote = async (id) => {
    if (window.confirm('Are you sure you want to delete this keynote speaker?')) {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${authInfo.token}` },
      });
        fetchKeynotes();
    } catch (err) {
      setError('Failed to delete keynote');
    }
    }
  };

  const editKeynote = (keynote) => {
    setEditingKeynote(keynote);
  };

  const cancelEdit = () => {
    setEditingKeynote(null);
  };

  if (!authInfo.isAuthenticated || !authInfo.token || loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Keynote Talks Management</h1>
            <p className="text-gray-600">Manage keynote speakers and their presentations</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <KeynoteForm onSubmit={addKeynote} editingKeynote={editingKeynote} onCancel={cancelEdit} />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Keynote Speakers ({keynotes.length})</h3>
        </div>

        {/* Keynotes List */}
        <div className={`${
          keynotes.length === 0 ? 'text-center py-12' :
          keynotes.length === 1 ? 'max-w-4xl mx-auto' :
          keynotes.length <= 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' :
          keynotes.length <= 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' :
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        }`}>
          {keynotes.length === 0 ? (
            <div>
              <div className="text-gray-400 text-6xl mb-4">🎤</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No keynote speakers yet</h3>
              <p className="text-gray-500">Add your first keynote speaker to get started</p>
            </div>
          ) : (
            keynotes.map(keynote => (
              <div key={keynote._id} className="bg-white rounded-xl shadow-md p-6">
                <div className={`${
                  keynotes.length === 1 ? 'flex justify-between items-start mb-4' :
                  'mb-4'
                }`}>
                  <div className="flex-1">
                    <h4 className={`font-bold text-gray-900 mb-2 ${
                      keynotes.length === 1 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {sanitizeInput(keynote.speaker)}
                    </h4>
                    <p className={`text-gray-600 mb-3 ${
                      keynotes.length === 1 ? 'text-lg' : 'text-base'
                    }`}>
                      {sanitizeInput(keynote.affiliation)}
                    </p>
                    <h5 className={`font-semibold text-gray-800 mb-3 ${
                      keynotes.length === 1 ? 'text-xl' : 'text-lg'
                    }`}>
                      {sanitizeInput(keynote.title)}
                    </h5>
                  </div>
                  <div className={`flex gap-2 ${
                    keynotes.length === 1 ? '' : 'justify-center mt-3'
                  }`}>
                    <button
                      onClick={() => editKeynote(keynote)}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteKeynote(keynote._id)}
                      className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">Biography</h6>
                    <p className={`text-gray-600 ${
                      keynotes.length > 1 ? 'text-sm line-clamp-3' : ''
                    }`}>
                      {sanitizeInput(keynote.biography)}
                    </p>
                  </div>
                  
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">Abstract</h6>
                    <p className={`text-gray-600 ${
                      keynotes.length > 1 ? 'text-sm line-clamp-4' : ''
                    }`}>
                      {sanitizeInput(keynote.abstract)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminKeynoteTalks;
