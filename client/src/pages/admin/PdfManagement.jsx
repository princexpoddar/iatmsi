import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from '../../state/auth.state';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const API_URL = 'http://localhost:8000/api/pdfs';

function PdfManagement() {
  const { authInfo } = useAuthState();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    category: 'other',
    page: '',
    order: 0,
    isActive: true
  });

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin`, {
        headers: { Authorization: `Bearer ${authInfo.token}` }
      });
      setDocuments(res.data);
    } catch (err) {
      setError('Failed to fetch documents');
    }
    setLoading(false);
  };

  const getFileType = (url) => {
    const extension = url.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf': return 'PDF';
      case 'doc':
      case 'docx': return 'Word Document';
      case 'txt': return 'Text File';
      case 'ppt':
      case 'pptx': return 'PowerPoint';
      case 'xls':
      case 'xlsx': return 'Excel';
      default: return 'Document';
    }
  };

  const getFileIcon = (url) => {
    const extension = url.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf': return '📄';
      case 'doc':
      case 'docx': return '📝';
      case 'txt': return '📄';
      case 'ppt':
      case 'pptx': return '📊';
      case 'xls':
      case 'xlsx': return '📈';
      default: return '📎';
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingDocument) {
        await axios.put(`${API_URL}/${editingDocument._id}`, formData, {
          headers: { Authorization: `Bearer ${authInfo.token}` }
        });
      } else {
        await axios.post(API_URL, formData, {
          headers: { Authorization: `Bearer ${authInfo.token}` }
        });
      }
      fetchDocuments();
      resetForm();
    } catch (err) {
      setError('Failed to save document');
    }
  };

  const handleEdit = (document) => {
    setEditingDocument(document);
    setFormData({
      title: document.title,
      description: document.description || '',
      url: document.url,
      category: document.category,
      page: document.page,
      order: document.order,
      isActive: document.isActive
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await axios.delete(`${API_URL}/${id}`, {
          headers: { Authorization: `Bearer ${authInfo.token}` }
        });
        fetchDocuments();
      } catch (err) {
        setError('Failed to delete document');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      url: '',
      category: 'other',
      page: '',
      order: 0,
      isActive: true
    });
    setEditingDocument(null);
    setShowForm(false);
  };

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Document Management
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manage all documents and file links across the website
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingDocument ? 'Edit Document' : 'Add New Document'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL *
                  </label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="call-for-papers">Call for Papers</option>
                    <option value="guidelines">Guidelines</option>
                    <option value="template">Template</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="brochure">Brochure</option>
                    <option value="flyer">Flyer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page *
                  </label>
                  <input
                    type="text"
                    name="page"
                    value={formData.page}
                    onChange={handleInputChange}
                    placeholder="e.g., call-for-papers, sponsorship"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Active
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingDocument ? 'Update' : 'Add'} Document
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Documents List */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
              <button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add New Document
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((document) => (
                  <tr key={document._id} className={!document.isActive ? 'opacity-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{getFileIcon(document.url)}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{document.title}</div>
                          {document.description && (
                            <div className="text-sm text-gray-500">{document.description}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {getFileType(document.url)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {document.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {document.page}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        document.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {document.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {document.order}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(document)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(document._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfManagement;
