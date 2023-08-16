 import React, { useState } from 'react';
import './App.css';
import TimerSettings from './components/TimerSettings';
import Timer from './components/Timer';

const App: React.FC = () => {
  const [page, setPage] = useState<'settings' | 'timer'>('settings');
  const [timerDuration, setTimerDuration] = useState<number | null>(null);

  const handleStartTimer = (duration: number) => {
    setTimerDuration(duration);
    setPage('timer');
  };

  const renderPage = () => {
    if (page === 'settings') {
      return <TimerSettings onStart={handleStartTimer} />;
    } else if (page === 'timer' && timerDuration !== null) {
      return <Timer duration={timerDuration} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
};

export default App;


 

