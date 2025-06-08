import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AuthActions = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Volver atrás
      </button>

      <button
        onClick={logout}
        className="text-sm text-red-600 hover:underline"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default AuthActions;
