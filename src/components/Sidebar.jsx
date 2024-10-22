import React from 'react';
import './Sidebar.css'; // Make sure to create a corresponding CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Weather Dash</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Search</a></li>
                <li><a href="#clients">About</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;