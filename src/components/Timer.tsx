import React, { useState, useEffect } from 'react';
import Header from './Header'
import waveImg from '../assets/images/timer.png'
import timerMain from '../assets/images/timer-main.png'
import './Timer.css'

interface TimerProps {
  duration: number;
}

const Timer: React.FC<TimerProps> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handlePauseResume = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTimeLeft(duration);
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
       <div className="timer_top">
        <img src={waveImg} alt="" />
      </div>
      <div onClick={() => window.location.reload()}>
        <Header title='Timer'/>
      </div>
      <div className="timer_content">
    <div>
      <img src={timerMain} alt="" />
    </div>
     <div className='container'>
     <div className="time-left">{formatTime(timeLeft)}</div>
      <div className="timer-controls">
        <button onClick={handlePauseResume}>
          {isRunning ? 'Pause' : 'Resume'}
        </button>
       </div>
     </div>
      </div>
    </div>
  );
};

export default Timer;