import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUserName('');
    setPassword('');
    console.log("User logged in", { username, password });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30vh',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    input: {
      margin: '10px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '300px',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    heading: {
      marginBottom: '-50px',
      fontSize: '24px',
      color: '#333',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='Username'
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>Login</button>
    </div>
  );
};

export default Login;
