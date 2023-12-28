import React from 'react';
import './countdown-text.scss';

interface CountdownTextProps {
  seconds: number;
}

const CountdownText: React.FC<CountdownTextProps> = ({ seconds }) => {

  if (seconds) {
    return (
      <p key={seconds} className="countdown-text__seconds">
        {seconds}
      </p>
    );
  }

  return (
    <div key={seconds} className="countdown-text">
      <p className="countdown-text__word blue">Pronti</p>
      <p className="countdown-text__word">Partenza</p>
      <p className="countdown-text__word">Via!</p>
    </div>
  );
};

export default CountdownText;
