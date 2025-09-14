import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from '../../state/auth.state';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const API_URL = 'http://localhost:8000/api/important-dates';

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>"'`]/g, '');
};

const ImportantDateForm = ({ onSubmit, editingDate, onCancel }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    category: 'Submission',
    isActive: true,
    priority: 0,
    isStrikethrough: false
  });

  useEffect(() => {
    if (editingDate) {
      setForm({
        ...editingDate,
        date: editingDate.date ? new Date(editingDate.date).toISOString().split('T')[0] : ''
      });
    } else {
      setForm({
        title: '',
        description: '',
        date: '',
        category: 'Submission',
        isActive: true,
        priority: 0,
        isStrikethrough: false
      });
    }
  }, [editingDate]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : sanitizeInput(value) 
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    if (!editingDate) {
      setForm({
        title: '',
        description: '',
        date: '',
        category: 'Submission',
        isActive: true,
        priority: 0
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {editingDate ? 'Edit Important Date' : 'Add New Important Date'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Paper Submission Deadline"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Submission">Submission</option>
              <option value="Review">Review</option>
              <option value="Notification">Notification</option>
              <option value="Registration">Registration</option>
              <option value="Conference">Conference</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief description of the important date"
            required
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <input
              name="priority"
              type="number"
              value={form.priority}
              onChange={handleChange}
              min="0"
              max="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Higher number = higher priority</p>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                name="isActive"
                type="checkbox"
                checked={form.isActive}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Active</span>
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <label className="flex items-center">
            <input
              name="isStrikethrough"
              type="checkbox"
              checked={form.isStrikethrough}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Show as strikethrough (for date changes)</span>
          </label>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {editingDate ? 'Update Date' : 'Add Date'}
          </button>
          {editingDate && (
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

const ImportantDates = () => {
  const { authInfo } = useAuthState();
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingDate, setEditingDate] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    if (authInfo.isAuthenticated && authInfo.token) {
      fetchDates();
    }
  }, [authInfo.isAuthenticated, authInfo.token]);

  const fetchDates = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${authInfo.token}` },
      });
      setDates(res.data);
    } catch (err) {
      setError('Failed to fetch important dates');
    }
    setLoading(false);
  };

  const addDate = async (data) => {
    try {
      if (editingDate) {
        await axios.put(`${API_URL}/${editingDate._id}`, data, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        setEditingDate(null);
      } else {
        await axios.post(API_URL, data, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
      }
      fetchDates();
    } catch (err) {
      setError('Failed to save important date');
    }
  };

  const deleteDate = async (id) => {
    if (window.confirm('Are you sure you want to delete this important date?')) {
      try {
        await axios.delete(`${API_URL}/${id}`, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
        fetchDates();
      } catch (err) {
        setError('Failed to delete important date');
      }
    }
  };

  const editDate = (date) => {
    setEditingDate(date);
  };

  const cancelEdit = () => {
    setEditingDate(null);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Submission': return 'bg-blue-100 text-blue-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Notification': return 'bg-green-100 text-green-800';
      case 'Registration': return 'bg-purple-100 text-purple-800';
      case 'Conference': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) >= new Date();
  };

  // Drag and Drop handlers
  const handleDragStart = (e, date) => {
    setDraggedItem(date);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e, targetDate) => {
    e.preventDefault();
    if (!draggedItem || draggedItem._id === targetDate._id) {
      setDraggedItem(null);
      return;
    }

    try {
      // Get current filtered dates in order
      const currentFilteredDates = filterCategory === 'All' 
        ? [...dates].sort((a, b) => (a.order || 0) - (b.order || 0))
        : dates.filter(date => date.category === filterCategory).sort((a, b) => (a.order || 0) - (b.order || 0));
      
      const draggedIndex = currentFilteredDates.findIndex(d => d._id === draggedItem._id);
      const targetIndex = currentFilteredDates.findIndex(d => d._id === targetDate._id);

      if (draggedIndex === -1 || targetIndex === -1) {
        setDraggedItem(null);
        return;
      }

      // Reorder the filtered array
      const newFilteredDates = [...currentFilteredDates];
      const [removed] = newFilteredDates.splice(draggedIndex, 1);
      newFilteredDates.splice(targetIndex, 0, removed);

      // Update order values for all items in the filtered list
      for (let i = 0; i < newFilteredDates.length; i++) {
        await axios.put(`${API_URL}/${newFilteredDates[i]._id}`, { order: i }, {
          headers: { Authorization: `Bearer ${authInfo.token}` },
        });
      }

      fetchDates(); // Refresh the list
    } catch (err) {
      setError('Failed to reorder dates');
    }
    setDraggedItem(null);
  };

  const filteredDates = filterCategory === 'All' 
    ? [...dates].sort((a, b) => (a.order || 0) - (b.order || 0))
    : dates.filter(date => date.category === filterCategory).sort((a, b) => (a.order || 0) - (b.order || 0));

  const categories = ['All', 'Submission', 'Review', 'Notification', 'Registration', 'Conference', 'Other'];

  if (!authInfo.isAuthenticated || !authInfo.token || loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Important Dates Management</h1>
            <p className="text-gray-600">Manage conference deadlines and important dates</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ImportantDateForm onSubmit={addDate} editingDate={editingDate} onCancel={cancelEdit} />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Filter and Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Dates ({dates.length})</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      filterCategory === category 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Upcoming: {dates.filter(d => isUpcoming(d.date)).length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>Past: {dates.filter(d => !isUpcoming(d.date)).length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dates List */}
        <div className={`${
          filteredDates.length === 0 ? 'text-center py-12' :
          filteredDates.length === 1 ? 'max-w-4xl mx-auto' :
          filteredDates.length <= 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' :
          filteredDates.length <= 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' :
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        }`}>
          {filteredDates.length === 0 ? (
            <div>
              <div className="text-gray-400 text-6xl mb-4">📅</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No important dates found</h3>
              <p className="text-gray-500">
                {filterCategory === 'All' 
                  ? 'Add your first important date to get started' 
                  : `No dates in category "${filterCategory}"`
                }
              </p>
            </div>
          ) : (
            filteredDates.map(date => (
              <div 
                key={date._id} 
                draggable
                onDragStart={(e) => handleDragStart(e, date)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, date)}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 cursor-move ${
                  !date.isActive ? 'opacity-60' : ''
                } ${isUpcoming(date.date) ? 'border-l-4 border-green-500' : ''} ${
                  draggedItem && draggedItem._id === date._id ? 'opacity-50' : ''
                }`}
              >
                <div className={`${
                  filteredDates.length === 1 ? 'flex justify-between items-start mb-4' :
                  'mb-4'
                }`}>
                  <div className="flex-1">
                    <div className={`flex items-center gap-3 mb-3 ${
                      filteredDates.length === 1 ? 'flex-wrap' : 'flex-col sm:flex-row'
                    }`}>
                      <h4 className={`font-semibold text-gray-900 ${
                        filteredDates.length === 1 ? 'text-xl' : 'text-lg'
                      } ${date.isStrikethrough ? 'line-through text-red-500' : ''}`}>
                        {sanitizeInput(date.title)}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(date.category)}`}>
                          {date.category}
                        </span>
                        {!date.isActive && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            Inactive
                          </span>
                        )}
                        {isUpcoming(date.date) && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Upcoming
                          </span>
                        )}
                        {date.isStrikethrough && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Changed
                          </span>
                        )}
                      </div>
                    </div>
                    <p className={`text-gray-600 mb-3 ${
                      filteredDates.length > 1 ? 'text-sm' : ''
                    }`}>
                      {sanitizeInput(date.description)}
                    </p>
                    <div className={`flex items-center gap-4 text-sm text-gray-500 ${
                      filteredDates.length === 1 ? 'flex-wrap' : 'flex-col sm:flex-row'
                    }`}>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className={`font-medium ${date.isStrikethrough ? 'line-through text-red-500' : ''}`}>
                          {formatDate(date.date)}
                        </span>
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Priority: {date.priority}
                      </span>
                    </div>
                  </div>
                  <div className={`flex gap-2 ${
                    filteredDates.length === 1 ? '' : 'justify-center mt-4'
                  }`}>
                    <button
                      onClick={() => editDate(date)}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteDate(date._id)}
                      className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
    </div>
  );
};

export default ImportantDates;
