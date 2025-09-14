import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../../state/auth.state';
import APP_ROUTES from '../../constants/appRoutes.constants';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { authInfo } = useAuthState();

  const adminPages = [
    {
      title: 'Keynote Talks',
      description: 'Manage keynote speakers and their presentations',
      route: APP_ROUTES.ADMIN.KEYNOTE_TALKS,
      icon: '🎤',
      color: 'bg-blue-500'
    },
    {
      title: 'Conference Program',
      description: 'Manage authors and conference program details',
      route: APP_ROUTES.ADMIN.CONFERENCE_PROGRAM,
      icon: '📚',
      color: 'bg-green-500'
    },
    {
      title: 'Important Dates',
      description: 'Manage important conference dates and deadlines',
      route: APP_ROUTES.ADMIN.IMPORTANT_DATES,
      icon: '📅',
      color: 'bg-purple-500'
    },
      {
        title: 'Document Management',
        description: 'Manage all documents and file links',
        route: APP_ROUTES.ADMIN.PDF_MANAGEMENT,
        icon: '📄',
        color: 'bg-orange-500'
      }
  ];

  const handleLogout = () => {
    // This will be handled by the parent component or context
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {authInfo.data?.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Manage Conference Content</h2>
          <p className="text-gray-600">Select a section to edit and manage conference information</p>
        </div>

        {/* Admin Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminPages.map((page, index) => (
            <div
              key={index}
              onClick={() => navigate(page.route)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${page.color} rounded-lg flex items-center justify-center text-2xl mr-4`}>
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>Manage</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Management Sections</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">Active</div>
              <div className="text-sm text-gray-600">Admin Status</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Access Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
