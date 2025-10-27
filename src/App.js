import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{
      backgroundColor: '#EFE9D9',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'IM Fell DW Pica', serif"
    }}>
      <h1 style={{
        position: 'absolute',
        top: '2rem',
        fontSize: '2rem',
        color: '#100A14',
        margin: 0
      }}>
        
      </h1>
      
      <div className="rotating-text" style={{
        width: '150px',
        height: '150px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fontSize="10pt" fill="#100A14" fontFamily="'IM Fell DW Pica', serif">
            <textPath href="#circlePath" startOffset="0%">
               In progress  ·  In progress  ·  In progress  ·  In progress  ·  In progress  ·  In progress  ·  In progress 
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
