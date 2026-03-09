import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const API = "https://authnexus-duus.onrender.com/api/auth";

  const registerUser = async () => {
    try {
      const res = await axios.post(`${API}/register`, { email: email, password: password })
      setMessage("User registered successfully");
    }
    catch (err) {
      setMessage(err.response?.data?.message || "Error registering user");
    }
  };

  const loginUser = async () => {
    try {
      const res = await axios.post(`${API}/login`, { email: email, password: password });
      localStorage.setItem("token", res.data.token);
      setMessage("User logged in successfully");
    }
    catch (err) {
      setMessage(err.response?.data?.message || "Error logging in");
    }
  };
  
  return (
    <div className="container">
      <h1>Authentication App</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="buttons">
        <button onClick={registerUser}>Register</button>
        <button onClick={loginUser}>Login</button>
      </div>
      <p>{message}</p>
    </div>
  )
};
export default App;
