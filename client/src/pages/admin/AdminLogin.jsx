import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAction, logoutAction } from '../../actions/auth.actions';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { useAuthDispatch, useAuthState } from '../../state/auth.state';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useAuthDispatch();
  const { authInfo } = useAuthState();
  const { isAuthenticated } = authInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const success = await loginAction(username, password, dispatch);
    setLoading(false);

    if (success) {
      navigate('/'); // redirect after login
    } else {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    logoutAction(dispatch);
  };

  // Show already logged in message with logout button
  if (isAuthenticated) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: '1rem',
        }}
      >
        <h2>You are already logged in</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div
      className="admin-login-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2>Admin Login</h2>

        <div style={{ marginBottom: '1rem' }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        {error && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
        )}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#646cff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
          }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {loading && <LoadingPage />}
      </form>
    </div>
  );
};

export default AdminLogin;
