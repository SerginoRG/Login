import React, { useState } from 'react';
import '../css/inscrire.css';
import raikyImage from '../image/raiky.jpg';
import { Link } from "react-router-dom";

function Signup() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="signup-container">
      {/* Logo à gauche */}
      <div className="logo-section">
        <img src={raikyImage} alt="raiky" />
      </div>

      {/* Formulaire à droite */}
      <div className="form-section">
        <h2>Inscription</h2>
        <form id="signupForm" className="grid-form">
          
          {/* Ligne 1 */}
          <div className="input-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" id="username" placeholder="Entrer votre nom d'utilisateur" required />
            <p id="errorUsername" className="error-msg"></p>
          </div>

          <div className="input-group">
            <label htmlFor="email">Adresse Email</label>
            <input type="email" id="email" placeholder="Entrer votre adresse email" required />
            <p id="errorEmail" className="error-msg"></p>
          </div>

          {/* Ligne 2 */}
          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" placeholder="Entrer votre mot de passe" required />
            <p id="errorPassword" className="error-msg"></p>
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input type="password" id="confirmPassword" placeholder="Confirmez votre mot de passe" required />
            <p id="errorConfirmPassword" className="error-msg"></p>
          </div>

          {/* Ligne 3 (pleine largeur) */}
          <div className="input-group full-width">
            <label htmlFor="profileImage">Importer une image</label>
            <input type="file" id="profileImage" accept="image/*" onChange={handleImageChange} />
            {preview && <img src={preview} alt="aperçu" className="preview-img" />}
          </div>

          <button type="submit" className="full-width">S'inscrire</button>
        </form>

        <p className="signup-text">
          Vous avez déjà un compte ? 
          <Link to="/" className="signup-link"> Se connecter</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
