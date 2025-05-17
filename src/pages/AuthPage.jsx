import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import "../styles/LoginRegister.css";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [registro, setRegistro] = useState({
    name: '',
    username: '',
    password: ''
  });

  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const handleSignUpClick = () => setIsRightPanelActive(true);
  const handleSignInClick = () => setIsRightPanelActive(false);

  const handleRegisterChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', registro);
      console.log('Registro exitoso:', response.data);
      alert('Bienvenido a PetCare, revisa tu correo por favor...');
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Se ha producido un error durante el registro. Intenta de nuevo más tarde.');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', login);
      const { token, name, username, role } = response.data;

      // Guardar en sessionStorage
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify({ name, username, role }));

      alert('Iniciando sesión...');

      // Redirección por rol
      if (role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else if (role === 'CLIENTE') {
        navigate('/client/dashboard');
      } else if (role === 'EMPLEADO') {
        navigate('/employee/dashboard');
      } else {
        alert('Rol no reconocido.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales inválidas. Intenta de nuevo.');
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Crear cuenta</h1>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={registro.name}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="email"
            name="username"
            placeholder="Correo electrónico"
            value={registro.username}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={registro.password}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1>Iniciar sesión</h1>
          <input
            type="email"
            name="username"
            placeholder="Correo electrónico"
            value={login.username}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={login.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>¡Te damos la bienvenida!</h1>
            <p>Inicia sesión para acceder a tu cuenta de PetCare</p>
            <button className="hidden" onClick={handleSignInClick}>Iniciar sesión</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>¡Bienvenido amigo!</h1>
            <p>Regístrate para comenzar a cuidar de tus mascotas con PetCare</p>
            <button className="hidden" onClick={handleSignUpClick}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
