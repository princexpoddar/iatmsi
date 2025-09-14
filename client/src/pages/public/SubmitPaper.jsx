import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PdfViewer from '../../components/PdfViewer/PdfViewer';

export default function SubmitPaper() {
  const [formData, setFormData] = useState({
    title: '',
    authors: [{ name: '', email: '', affiliation: '' }],
    correspondingAuthor: { name: '', email: '', affiliation: '' },
    track: '',
    keywords: '',
    abstract: '',
    paperFile: null,
    agreement: false
  });
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/pdfs/page/paper-submission');
        setPdfs(res.data);
      } catch (err) {
        console.error('Failed to fetch PDFs:', err);
      }
      setLoading(false);
    };
    fetchPdfs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleAuthorChange = (index, field, value) => {
    const newAuthors = [...formData.authors];
    newAuthors[index][field] = value;
    setFormData(prev => ({ ...prev, authors: newAuthors }));
  };

  const addAuthor = () => {
    setFormData(prev => ({
      ...prev,
      authors: [...prev.authors, { name: '', email: '', affiliation: '' }]
    }));
  };

  const removeAuthor = (index) => {
    if (formData.authors.length > 1) {
      const newAuthors = formData.authors.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, authors: newAuthors }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Paper submission form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Paper Submission
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Submit your research paper to IATMSI-2026 and be part of the premier conference on technology and management for social innovation.
          </p>
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Important Submission Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                All papers must be original and not previously published
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                Papers should be 6-8 pages in IEEE format
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                All accepted papers will be submitted to IEEE Xplore
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                Please ensure your paper follows the conference theme and tracks
              </li>
            </ul>
          </div>
        </div>

        {/* PDF Documents */}
        {!loading && pdfs.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">📄 Submission Guidelines & Templates</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pdfs.map((pdf) => (
                <PdfViewer
                  key={pdf._id}
                  url={pdf.url}
                  title={pdf.title}
                  height="400px"
                />
              ))}
            </div>
          </div>
        )}

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Paper Submission Form</h2>
          
          {/* Paper Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paper Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter the title of your paper"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Authors */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Authors *
            </label>
            {formData.authors.map((author, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    value={author.name}
                    onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                    placeholder="Author name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={author.email}
                    onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                    placeholder="author@email.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-end">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Affiliation</label>
                    <input
                      type="text"
                      value={author.affiliation}
                      onChange={(e) => handleAuthorChange(index, 'affiliation', e.target.value)}
                      placeholder="Institution/Organization"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  {formData.authors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeAuthor(index)}
                      className="ml-2 p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addAuthor}
              className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Author
            </button>
          </div>

          {/* Corresponding Author */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Corresponding Author *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="correspondingAuthor.name"
                  value={formData.correspondingAuthor.name}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    correspondingAuthor: { ...prev.correspondingAuthor, name: e.target.value }
                  }))}
                  placeholder="Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="correspondingAuthor.email"
                  value={formData.correspondingAuthor.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    correspondingAuthor: { ...prev.correspondingAuthor, email: e.target.value }
                  }))}
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="correspondingAuthor.affiliation"
                  value={formData.correspondingAuthor.affiliation}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    correspondingAuthor: { ...prev.correspondingAuthor, affiliation: e.target.value }
                  }))}
                  placeholder="Affiliation"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Track Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Conference Track *
            </label>
            <select
              name="track"
              value={formData.track}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a track</option>
              <option value="track1">Track 1: Innovative Solutions for Healthcare</option>
              <option value="track2">Track 2: Power, Control, Energy and Intelligent Transportation Technologies</option>
              <option value="track3">Track 3: Artificial Intelligence (AI), IoT and Computer Vision Enabled Technologies</option>
              <option value="track4">Track 4: Green Electronics, VLSI, Communication and Sensor Based Technologies</option>
              <option value="track5">Track 5: IT enabled Management for Social Change</option>
            </select>
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords *
            </label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              placeholder="Enter keywords separated by commas (e.g., AI, healthcare, IoT)"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Abstract *
            </label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={handleInputChange}
              placeholder="Enter your paper abstract (200-300 words)"
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paper File *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <input
                type="file"
                name="paperFile"
                onChange={handleInputChange}
                accept=".pdf,.doc,.docx"
                required
                className="hidden"
                id="paperFile"
              />
              <label htmlFor="paperFile" className="cursor-pointer">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 mb-2">Click to upload your paper</p>
                <p className="text-sm text-gray-500">PDF, DOC, or DOCX files only (Max 10MB)</p>
              </label>
            </div>
          </div>

          {/* Agreement */}
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">
                I confirm that this paper is original, has not been published elsewhere, and all authors have agreed to submit it to IATMSI-2026. I understand that accepted papers will be submitted to IEEE Xplore. *
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Submit Paper
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
