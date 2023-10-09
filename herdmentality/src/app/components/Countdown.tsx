'use client'
import { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdownTime, setCountdownTime] = useState(60);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
  
    ws.onmessage = (event) => {
      setCountdownTime(parseInt(event.data));
    };
  
    return () => ws.close();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime((prevCountdownTime) => prevCountdownTime - 1);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);  

  useEffect(() => {
    async function updateCountdown() {
      try {
        await fetch('/api/auth/countdown', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ seconds: countdownTime }),
        });
      } catch (error) {
        console.error(error);
      }
    }

    updateCountdown();
  }, [countdownTime]);
  
  useEffect(() => {
    if (countdownTime <= 0) {
      window.location.href = '/game/matching/';
    }
  }, [countdownTime]);  

  return (
    <>
      <div className="flex flex-col p-2 bg-neutral justify-center items-center rounded-box text-neutral-content">
        <h1 className="countdown font-mono text-5xl">
          {countdownTime}
        </h1>
        sec
      </div>
    </>
  );
}

export default CountdownTimer;
