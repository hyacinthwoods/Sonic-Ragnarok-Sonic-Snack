import React, { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {backendData === null ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
