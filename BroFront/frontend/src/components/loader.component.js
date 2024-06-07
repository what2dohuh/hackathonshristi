import React from 'react';
import '../styles/loader.css';
const LoaderComponent = ({ text = 'Loading...' }) => {
    return (
        <div>
               <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">{text}</p>
    </div>
        </div>
    );
}

export default LoaderComponent;
