import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import RegisterForm from '../features/auth/RegisterForm';
import '../styles/auth.css';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  // Cambiar estado si cambia la URL
  useEffect(() => {
    if (location.pathname === '/register') {
      setIsRegisterActive(true);
    } else {
      setIsRegisterActive(false);
    }
  }, [location.pathname]);

  // Cambiar estado + redirigir al pulsar el botón
  const handleToggle = (register) => {
    if (register) {
      setIsRegisterActive(true);
      navigate('/register');
    } else {
      setIsRegisterActive(false);
      navigate('/login');
    }
  };

  return (
    <div className={`container ${isRegisterActive ? 'right-panel-active' : ''}`}>
      {/* Formulario Login */}
      <div className="form-container sign-in">
        <LoginForm />
      </div>

      {/* Formulario Registro */}
      <div className="form-container sign-up">
        <RegisterForm />
      </div>

      {/* Panel derecho */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h2>¡Bienvenido de nuevo! 🐾</h2>
            <p>Introduce tus datos para acceder a tu cuenta</p>
            <button onClick={() => handleToggle(false)}>Iniciar sesión</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h2>¿Nuevo por aquí?</h2>
            <p>Crea una cuenta para empezar a disfrutar de PetCare</p>
            <button onClick={() => handleToggle(true)}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;