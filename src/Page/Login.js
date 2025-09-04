import React from 'react';
import '../css/login.css';
import raikyImage from '../image/raiky.jpg';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container"> 
      <div className="logo"> 
        <img src={raikyImage} alt="raiky" /> 
      </div>
      <div className="login-container"> 
        <h2>Connexion</h2>
        <form id="loginForm">
          <div className="input-group"> 
            <label htmlFor="username">Nom d'utilisateur ou adresse Email</label>
            <input type="text" id="username" placeholder="Entrer votre nom d'utilisateur ou adresse Email" required /> 
            <p id="errorUsername" className="error-msg"></p> 
          </div>

          <div className="input-group"> 
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" placeholder="Entrer votre mot de passe" required /> 
            <p id="errorPassword" className="error-msg"></p> 
          </div>

          <button type="submit">Se connecter</button>
        </form>

        <div className="auth-links">
          <a href="#forgot" className="forgot-link">Mot de passe oublié ?</a>

          <p className="signup-text">
            Vous n'avez pas de compte ?{" "}
            <Link to="/signup" className="signup-link">S'inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
