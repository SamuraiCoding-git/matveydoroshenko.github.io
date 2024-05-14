import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <video autoPlay muted loop style={{ position: "fixed", right: 0, bottom: 0, minWidth: "100%", minHeight: "100%" }}>
          <source src="assets/video/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio autoPlay loop>
          <source src="/assets/audio/background.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1>Welcome to Our Website</h1>
        </div>
      </div>
  );
}

export default App;
