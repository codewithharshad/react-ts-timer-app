import React, { useState } from 'react';
import './TimerSetting.css';
import Header from './Header';
import waveImg from '../assets/images/timerSetting.svg';
import clockImg from '../assets/images/clock-img.png';

interface TimerSettingsProps {
  onStart: (duration: number) => void;
}

const TimerSettings: React.FC<TimerSettingsProps> = ({ onStart }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    onStart(totalSeconds);
  };

  const handleHoursChange = (value: number) => {
    setHours(Math.min(Math.max(value, 0), 24));
  };

  const handleMinutesChange = (value: number) => {
    setMinutes(Math.min(Math.max(value, 0), 59));
  };

  const handleSecondsChange = (value: number) => {
    setSeconds(Math.min(Math.max(value, 0), 59));
  };

  return (
    <div className="timer-settings">
      <div className="timer-settings_top">
        <img src={waveImg} alt="" />
      </div>
      <Header title="Set the Timer" />
      <div className="timer-settings_img">
        <img src={clockImg} alt="" />
      </div>
      <div className="time-stick-bottom">
        <div className="time-inputs">
          <div>
            <span>Hours</span>
            <input
              type="number"
              value={hours}
              onChange={(e) => handleHoursChange(Number(e.target.value))}
            />
          </div>
          <div>
            <span>Minutes</span>
            <input
              type="number"
              value={minutes}
              onChange={(e) => handleMinutesChange(Number(e.target.value))}
            />
          </div>
          <div>
            <span>Seconds</span>
            <input
              type="number"
              value={seconds}
              onChange={(e) => handleSecondsChange(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
};

export default TimerSettings;
