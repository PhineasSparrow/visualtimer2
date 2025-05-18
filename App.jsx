import { useState } from 'react';
import './styles/App.css';

const classes = ['SS', 'ELA', 'Math', 'Science'];

export default function App() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [timeLeft, setTimeLeft] = useState(2400);

  return (
    <div className="app">
      <h1>Cadence Quest</h1>
      <button className="start-button">Start</button>

      <div className="class-selector">
        <h2>Select Class</h2>
        {classes.map((cls) => (
          <button
            key={cls}
            className={`class-btn ${selectedClass === cls ? 'active' : ''}`}
            onClick={() => setSelectedClass(cls)}
          >
            {cls}
          </button>
        ))}
      </div>

      <div className="timer-bar">
        <div className="bar" style={{ width: `${(timeLeft / 2400) * 100}%` }} />
        <span className="timer-text">{`${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
          .toString()
          .padStart(2, '0')}`}</span>
      </div>

      <div className="status-panel">
        <img src="/sprite.png" alt="character" className="character" />
        <div className="stats">
          <p>⭐ Points: 0</p>
          <p>🪙 Coins: 0</p>
          <p>🎚️ Level: 1</p>
        </div>
      </div>

      <button className="break-button">Take a Break</button>
    </div>
  );
}
