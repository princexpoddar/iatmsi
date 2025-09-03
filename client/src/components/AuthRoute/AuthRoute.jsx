import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthState, useAuthDispatch } from '../../state/auth.state';
import { fetchUserInfoAction } from '../../actions/auth.actions';
import APP_ROUTES from '../../constants/appRoutes.constants';
import LoadingPage from '../LoadingPage/LoadingPage';

const AuthRoute = ({ children }) => {
  const { authInfo } = useAuthState();
  const dispatch = useAuthDispatch();

  const { isAuthenticated, data, loading, error, token } = authInfo;

  const currentUrl = window.location.origin + window.location.pathname;
  const redirectToUrl = APP_ROUTES.ADMIN.LOGIN + '?redirection_url=' + currentUrl;

  useEffect(() => {
    if (token && !data && !loading && !error) {
      fetchUserInfoAction(dispatch);
    }
  }, [token, data, loading, error, dispatch]);

  // Show loading while fetching user info
  if (loading || (isAuthenticated && !data)) {
    return <LoadingPage />;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectToUrl} replace />;
  }

  // Render children if authenticated and user data is loaded
  return children;
};

export default AuthRoute;
