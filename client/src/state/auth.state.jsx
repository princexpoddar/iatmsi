import { createContext, useContext, useReducer } from 'react';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

const storedToken = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');

const initialState = {
  authInfo: {
    isAuthenticated: !!storedToken,
    data: storedUser ? JSON.parse(storedUser) : null,
    loading: false,
    error: null,
    token: storedToken || null,
  },
};


function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        authInfo: {
          ...state.authInfo,
          loading: true,
          error: null,
        },
      };

    case LOGIN_ERROR:
      return {
        ...state,
        authInfo: {
          isAuthenticated: false,
          data: null,
          token: null,
          loading: false,
          error: action.payload,
        },
      };

    case LOGIN_SUCCESS: {
      const { token, user } = action.payload;

      if (token) localStorage.setItem('token', token);
      if (user) localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        authInfo: {
          isAuthenticated: true,
          data: user || state.authInfo.data,
          token: token || state.authInfo.token,
          loading: false,
          error: null,
        },
      };
    }

    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('User');
      
      return {
        ...state,
        authInfo: {
          isAuthenticated: false,
          data: null,
          token: null,
          loading: false,
          error: null,
        },
      };

    default:
      return state;
  }
}


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}

export function useAuthState() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthState must be used within an AuthProvider');
  return context.state;
}

export function useAuthDispatch() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthDispatch must be used within an AuthProvider');
  return context.dispatch;
}
