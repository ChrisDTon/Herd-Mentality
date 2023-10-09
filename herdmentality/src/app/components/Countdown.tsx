'use client'
import { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdownTime, setCountdownTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime(countdownTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownTime]);

  useEffect(() => {
    async function updateCountdown() {
      await fetch('/api/countdown', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sec: countdownTime }),
      });
    }

    updateCountdown();
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

export default CountdownTimer