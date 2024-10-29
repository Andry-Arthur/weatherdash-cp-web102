import React from 'react';
import './Sidebar.css'; // Make sure to create a corresponding CSS file for styling
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Weather Dash</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#services">Search</a></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;