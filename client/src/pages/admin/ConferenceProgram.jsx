import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from '../../state/auth.state';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const API_URL = 'http://localhost:8000/api/conference-program';

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>"'`]/g, '');
};

// Statistics Section Component
const StatisticsSection = ({ stats, onAdd, onEdit, onDelete, editingItem, onCancel }) => {
  const [form, setForm] = useState({
    title: 'Conference Statistics',
    description: 'Key conference statistics and metrics',
    data: { count: '', description: '' },
    order: 0,
    isActive: true
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        title: 'Conference Statistics',
        description: 'Key conference statistics and metrics',
        data: { count: '', description: '' },
        order: 0,
        isActive: true
      });
    }
  }, [editingItem]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : sanitizeInput(value) 
    });
  };

  const handleDataChange = (key, value) => {
    setForm({
      ...form,
      data: { ...form.data, [key]: sanitizeInput(value) }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ ...form, type: 'stats' });
    if (!editingItem) {
      setForm({
        title: 'Conference Statistics',
        description: 'Key conference statistics and metrics',
        data: { count: '', description: '' },
        order: 0,
        isActive: true
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Conference Statistics</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Count *</label>
            <input
              type="text"
              value={form.data.count}
              onChange={(e) => handleDataChange('count', e.target.value)}
              placeholder="e.g., 3, 12+, 6"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <input
              type="text"
              value={form.data.description}
              onChange={(e) => handleDataChange('description', e.target.value)}
              placeholder="e.g., Conference Days"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {editingItem ? 'Update Statistic' : 'Add Statistic'}
          </button>
          {editingItem && (
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

      <div className={`${
        stats.length === 0 ? 'text-center py-8' :
        stats.length === 1 ? 'max-w-md mx-auto' :
        stats.length <= 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' :
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
      }`}>
        {stats.length === 0 ? (
          <div className="text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <p>No statistics added yet</p>
          </div>
        ) : (
          stats.map(stat => (
            <div key={stat._id} className={`${
              stats.length === 1 ? 'flex justify-between items-center p-3 bg-gray-50 rounded-lg' :
              'p-4 bg-gray-50 rounded-lg'
            }`}>
              <div className={`${
                stats.length === 1 ? 'flex items-center gap-4' :
                'text-center'
              }`}>
                <span className="text-2xl font-bold text-blue-600">{stat.data.count}</span>
                <span className={`text-gray-600 ${stats.length === 1 ? '' : 'block mt-2'}`}>
                  {stat.data.description}
                </span>
              </div>
              <div className={`flex gap-2 ${
                stats.length === 1 ? '' : 'justify-center mt-3'
              }`}>
                <button
                  onClick={() => onEdit(stat)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(stat._id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Program Highlights Section Component
const HighlightsSection = ({ highlights, onAdd, onEdit, onDelete, editingItem, onCancel }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    data: {},
    order: 0,
    isActive: true
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        title: '',
        description: '',
        data: {},
        order: 0,
        isActive: true
      });
    }
  }, [editingItem]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : sanitizeInput(value) 
    });
  };


  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ ...form, type: 'highlight' });
    if (!editingItem) {
      setForm({
        title: '',
        description: '',
        data: {},
        order: 0,
        isActive: true
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">⭐ Program Highlights</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Technical Sessions"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief description of the highlight"
            required
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>


        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {editingItem ? 'Update Highlight' : 'Add Highlight'}
          </button>
          {editingItem && (
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

      <div className={`${
        highlights.length === 0 ? 'text-center py-8' :
        highlights.length === 1 ? 'max-w-2xl mx-auto' :
        highlights.length <= 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-4' :
        highlights.length <= 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' :
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      }`}>
        {highlights.length === 0 ? (
          <div className="text-gray-500">
            <div className="text-4xl mb-2">⭐</div>
            <p>No highlights added yet</p>
          </div>
        ) : (
          highlights.map(highlight => (
            <div key={highlight._id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(highlight)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(highlight._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{highlight.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Schedule Section Component
const ScheduleSection = ({ schedule, onAdd, onEdit, onDelete, editingItem, onCancel }) => {
  const [form, setForm] = useState({
    title: 'Conference Schedule',
    description: 'Daily conference schedule and highlights',
    data: { day: '', highlights: [] },
    order: 0,
    isActive: true
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        title: 'Conference Schedule',
        description: 'Daily conference schedule and highlights',
        data: { day: '', highlights: [] },
        order: 0,
        isActive: true
      });
    }
  }, [editingItem]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : sanitizeInput(value) 
    });
  };

  const handleDataChange = (key, value) => {
    setForm({
      ...form,
      data: { ...form.data, [key]: sanitizeInput(value) }
    });
  };

  const handleHighlightsChange = e => {
    setForm({
      ...form,
      data: { ...form.data, highlights: e.target.value.split('\n').filter(item => item.trim()) }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ ...form, type: 'schedule' });
    if (!editingItem) {
      setForm({
        title: 'Conference Schedule',
        description: 'Daily conference schedule and highlights',
        data: { day: '', highlights: [] },
        order: 0,
        isActive: true
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">📅 Conference Schedule</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Day *</label>
          <input
            type="text"
            value={form.data.day}
            onChange={(e) => handleDataChange('day', e.target.value)}
            placeholder="e.g., Day 1 - March 12, 2026"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Highlights (one per line) *</label>
          <textarea
            value={form.data.highlights ? form.data.highlights.join('\n') : ''}
            onChange={handleHighlightsChange}
            placeholder="Highlight 1&#10;Highlight 2&#10;Highlight 3"
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
            {editingItem ? 'Update Schedule' : 'Add Schedule'}
          </button>
          {editingItem && (
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

      <div className={`${
        schedule.length === 0 ? 'text-center py-8' :
        schedule.length === 1 ? 'max-w-2xl mx-auto' :
        schedule.length <= 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-4' :
        schedule.length <= 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' :
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
      }`}>
        {schedule.length === 0 ? (
          <div className="text-gray-500">
            <div className="text-4xl mb-2">📅</div>
            <p>No schedule added yet</p>
          </div>
        ) : (
          schedule.map(day => (
            <div key={day._id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{day.data.day}</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(day)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(day._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <ul className="text-sm text-gray-600">
                {day.data.highlights?.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Theme Section Component
const ThemeSection = ({ theme, onAdd, onEdit, onDelete, editingItem, onCancel }) => {
  const [form, setForm] = useState({
    title: 'Conference Theme',
    description: 'Conference theme and details',
    data: { quote: '', details: '' },
    order: 0,
    isActive: true
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        title: 'Conference Theme',
        description: 'Conference theme and details',
        data: { quote: '', details: '' },
        order: 0,
        isActive: true
      });
    }
  }, [editingItem]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : sanitizeInput(value) 
    });
  };

  const handleDataChange = (key, value) => {
    setForm({
      ...form,
      data: { ...form.data, [key]: sanitizeInput(value) }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ ...form, type: 'theme' });
    if (!editingItem) {
      setForm({
        title: 'Conference Theme',
        description: 'Conference theme and details',
        data: { quote: '', details: '' },
        order: 0,
        isActive: true
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Conference Theme</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Theme Quote *</label>
          <input
            type="text"
            value={form.data.quote}
            onChange={(e) => handleDataChange('quote', e.target.value)}
            placeholder="e.g., Enabling the Change! Social Innovation for Sustainable Societies"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Details *</label>
          <input
            type="text"
            value={form.data.details}
            onChange={(e) => handleDataChange('details', e.target.value)}
            placeholder="e.g., March 12-14, 2026 | Hybrid Event | ABV-IIITM Gwalior, India"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {editingItem ? 'Update Theme' : 'Add Theme'}
          </button>
          {editingItem && (
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

      {theme && (
        <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-900">Current Theme</h4>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(theme)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(theme._id)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-800 mb-2">"{theme.data.quote}"</p>
          <p className="text-gray-600">{theme.data.details}</p>
        </div>
      )}
    </div>
  );
};

// Information Section Component
const InformationSection = ({ info, onAdd, onEdit, onDelete, editingItem, onCancel }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    data: {},
    order: 0,
    isActive: true
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        title: '',
        description: '',
        data: {},
        order: 0,
        isActive: true
      });
    }
  }, [editingItem]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : sanitizeInput(value) 
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ ...form, type: 'info' });
    if (!editingItem) {
      setForm({
        title: '',
        description: '',
        data: {},
        order: 0,
        isActive: true
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">ℹ️ Important Information</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title/Header *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Important Information, Guidelines, etc."
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief description of the information section"
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>


        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {editingItem ? 'Update Information' : 'Add Information'}
          </button>
          {editingItem && (
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

      <div className={`${
        info.length === 0 ? 'text-center py-8' :
        info.length === 1 ? 'max-w-2xl mx-auto' :
        info.length <= 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-4' :
        info.length <= 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' :
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
      }`}>
        {info.length === 0 ? (
          <div className="text-gray-500">
            <div className="text-4xl mb-2">ℹ️</div>
            <p>No information added yet</p>
          </div>
        ) : (
          info.map(item => (
            <div key={item._id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                  {item.description && (
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


const ConferenceProgram = () => {
  const { authInfo } = useAuthState();
  const [programItems, setProgramItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [activeSection, setActiveSection] = useState('stats');

  useEffect(() => {
    if (authInfo.isAuthenticated && authInfo.token) {
      fetchProgramItems();
    }
  }, [authInfo.isAuthenticated, authInfo.token]);

  const fetchProgramItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${authInfo.token}` },
      });
      setProgramItems(res.data);
    } catch (err) {
      setError('Failed to fetch program items');
    }
    setLoading(false);
  };

  const addProgramItem = async (data) => {
    try {
      if (editingItem) {
        await axios.put(`${API_URL}/${editingItem._id}`, data, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        setEditingItem(null);
      } else {
        await axios.post(API_URL, data, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
      }
      fetchProgramItems();
    } catch (err) {
      setError('Failed to save program item');
    }
  };

  const deleteProgramItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this program item?')) {
      try {
        await axios.delete(`${API_URL}/${id}`, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        fetchProgramItems();
      } catch (err) {
        setError('Failed to delete program item');
      }
    }
  };

  const editProgramItem = (item) => {
    setEditingItem(item);
  };

  const cancelEdit = () => {
    setEditingItem(null);
  };

  // Group items by type
  const stats = programItems.filter(item => item.type === 'stats');
  const highlights = programItems.filter(item => item.type === 'highlight');
  const schedule = programItems.filter(item => item.type === 'schedule');
  const theme = programItems.find(item => item.type === 'theme') || null;
  const info = programItems.filter(item => item.type === 'info');

  const sections = [
    { id: 'stats', name: 'Statistics', icon: '📊', count: stats.length },
    { id: 'highlights', name: 'Highlights', icon: '⭐', count: highlights.length },
    { id: 'schedule', name: 'Schedule', icon: '📅', count: schedule.length },
    { id: 'theme', name: 'Theme', icon: '🎯', count: theme ? 1 : 0 },
    { id: 'info', name: 'Information', icon: 'ℹ️', count: info.length }
  ];

  if (!authInfo.isAuthenticated || !authInfo.token || loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Conference Program Management</h1>
            <p className="text-gray-600">Manage conference program content, statistics, and schedule information</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Section Navigation */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Manage Conference Program Sections</h3>
          <div className={`grid gap-4 ${
            sections.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' :
            sections.length <= 3 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' :
            sections.length <= 4 ? 'grid-cols-2 md:grid-cols-4' :
            'grid-cols-2 md:grid-cols-5'
          }`}>
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  activeSection === section.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{section.icon}</div>
                <div className="font-medium">{section.name}</div>
                <div className="text-sm text-gray-500">{section.count} items</div>
              </button>
            ))}
          </div>
        </div>

        {/* Section Content */}
        {activeSection === 'stats' && (
          <StatisticsSection
            stats={stats}
            onAdd={addProgramItem}
            onEdit={editProgramItem}
            onDelete={deleteProgramItem}
            editingItem={editingItem?.type === 'stats' ? editingItem : null}
            onCancel={cancelEdit}
          />
        )}

        {activeSection === 'highlights' && (
          <HighlightsSection
            highlights={highlights}
            onAdd={addProgramItem}
            onEdit={editProgramItem}
            onDelete={deleteProgramItem}
            editingItem={editingItem?.type === 'highlight' ? editingItem : null}
            onCancel={cancelEdit}
          />
        )}

        {activeSection === 'schedule' && (
          <ScheduleSection
            schedule={schedule}
            onAdd={addProgramItem}
            onEdit={editProgramItem}
            onDelete={deleteProgramItem}
            editingItem={editingItem?.type === 'schedule' ? editingItem : null}
            onCancel={cancelEdit}
          />
        )}

        {activeSection === 'theme' && (
          <ThemeSection
            theme={theme}
            onAdd={addProgramItem}
            onEdit={editProgramItem}
            onDelete={deleteProgramItem}
            editingItem={editingItem?.type === 'theme' ? editingItem : null}
            onCancel={cancelEdit}
          />
        )}

        {activeSection === 'info' && (
          <InformationSection
            info={info}
            onAdd={addProgramItem}
            onEdit={editProgramItem}
            onDelete={deleteProgramItem}
            editingItem={editingItem?.type === 'info' ? editingItem : null}
            onCancel={cancelEdit}
          />
        )}
      </div>
    </div>
  );
};

export default ConferenceProgram;