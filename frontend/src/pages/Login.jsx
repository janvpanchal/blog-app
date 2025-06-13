import { useState } from 'react';

function NewUserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder logic for new user login
    if (username && password) {
      alert(`Welcome, ${username}! You are logged in.`);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>New User Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Create a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '80px auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'Arial'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #aaa'
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default NewUserLogin;
