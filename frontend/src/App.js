import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';

function App() {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/search', { email, number: number.replace(/-/g, '') });
      setResults(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container mt-4">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Results:</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.email} - {result.number}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className='mt-3'>
        <hr />
        <div>
          <label className='form-label'>Email:</label>
          <input
            type="email"
            value={email}
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='form-label'>Number:</label>
          <InputMask
            mask="99-99-99"
            value={number}
            className='form-control'
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit" className='btn btn-primary mt-3' disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default App;