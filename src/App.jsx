import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './routes/Home';
import About from './routes/About';
import ForecastDetails from './routes/ForecastDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/forecast/:date" element={<ForecastDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;