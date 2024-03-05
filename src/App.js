import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [models, setModels] = useState([]);
  const [featuredModels, setFeaturedModels] = useState([]);

  useEffect(() => {
    // Fetch models data from a mock API (JSONPlaceholder)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // For simplicity, using posts as models here
        setModels(response.data);
        // Assume featured models are the first three posts
        setFeaturedModels(response.data.slice(0, 3));
      })
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Models Showcase</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Featured Models</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Browse Models</h2>
          <ul>
            {models.map(model => (
              <li key={model.id}>{model.title}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Featured Models</h2>
          <ul>
            {featuredModels.map(model => (
              <li key={model.id}>{model.title}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 AI Models Showcase</p>
      </footer>
    </div>
  );
}

export default App;
