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

const KeynoteForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    speaker: '',
    affiliation: '',
    biography: '',
    title: '',
    abstract: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: sanitizeInput(e.target.value) });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ speaker: '', affiliation: '', biography: '', title: '', abstract: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>Add Keynote</h3>
      <input name="speaker" value={form.speaker} onChange={handleChange} placeholder="Speaker" required />
      <input name="affiliation" value={form.affiliation} onChange={handleChange} placeholder="Affiliation" required />
      <input name="biography" value={form.biography} onChange={handleChange} placeholder="Biography" required />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="abstract" value={form.abstract} onChange={handleChange} placeholder="Abstract" required />
      <button type="submit">Add Keynote</button>
    </form>
  );
};

const AdminKeynoteTalks = () => {
  const { authInfo } = useAuthState();
  const [keynotes, setKeynotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authInfo.isAuthenticated && authInfo.token) {
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
      fetchKeynotes();
    }
  }, [authInfo.isAuthenticated, authInfo.token]);

  const addKeynote = async (data) => {
    try {
      await axios.post(API_URL, data, {
        headers: { Authorization: `Bearer ${authInfo.token}` },
      });
      // Refetch after adding
      if (authInfo.isAuthenticated && authInfo.token) {
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        setKeynotes(res.data);
      }
    } catch (err) {
      setError('Failed to add keynote');
    }
  };

  const deleteKeynote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${authInfo.token}` },
      });
      // Refetch after deleting
      if (authInfo.isAuthenticated && authInfo.token) {
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        setKeynotes(res.data);
      }
    } catch (err) {
      setError('Failed to delete keynote');
    }
  };

  if (!authInfo.isAuthenticated || !authInfo.token || loading) return <LoadingPage />;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Keynote Talks</h2>
      <KeynoteForm onSubmit={addKeynote} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {keynotes.map(k => (
          <li key={k._id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <strong>{sanitizeInput(k.speaker)}</strong> ({sanitizeInput(k.affiliation)})<br />
            <em>{sanitizeInput(k.title)}</em><br />
            <span>{sanitizeInput(k.biography)}</span><br />
            <span>{sanitizeInput(k.abstract)}</span><br />
            <button onClick={() => deleteKeynote(k._id)} style={{ color: 'red' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminKeynoteTalks;
