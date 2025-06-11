import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('token');
  const user = JSON.parse(sessionStorage.getItem('user'));

  const isAuthenticated = !!token && !!user;
  const role = user?.role || null;

  const login = (userData, token) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('token', token);
  };

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return {
    user,
    token,
    role,
    isAuthenticated,
    login,
    logout
  };
};

export default useAuth;
