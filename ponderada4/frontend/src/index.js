import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Importing ReactDOM correctly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const DATA = [
  { id: "", name: "", completed: true },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

// Aqui é feito o login 
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // Assuming login is successful, call onLogin to switch to the App
    axios.post("http://44.204.85.74/user/login_new", {
      user: username,
      password: password
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data =='Login inválido'){
          alert("Login falhou");
        }else {
          onLogin();
        }
      })
      .catch(function (error) {
        alert("Dados incorretos"); // Changed error message for clarity
      });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function renderApp() {
  root.render(
    <React.StrictMode>
      <App tasks={DATA} />
    </React.StrictMode>
  );
}

root.render(
  <React.StrictMode>
    <LoginPage onLogin={renderApp} /> {/* Removed extra parentheses */}
  </React.StrictMode>
);

reportWebVitals();