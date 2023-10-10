'use client'
import { useState, useEffect } from 'react';

function CountdownTimer() {
  console.log('CountdownTimer() function called');
  const [countdownTime, setCountdownTime] = useState(60);

  useEffect(() => {
    console.log('useEffect establish websocket connection function called');
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      setCountdownTime(parseInt(event.data));
    };

    ws.onopen = () => {
      console.log('WebSocket connection established');
      ws.send(countdownTime.toString());
    };

    return () => {
      console.log('Closing WebSocket connection');
      ws.close();
    };
  }, [countdownTime]);

  useEffect(() => {
    console.log('useEffect lower countdown timer function called');
    const interval = setInterval(() => {
      setCountdownTime((prevCountdownTime) =>
        prevCountdownTime > 0 ? prevCountdownTime - 1 : prevCountdownTime
      );
    }, 1000);

    console.log('Countdown has been lowered')
    return () => clearInterval(interval);
  }, [countdownTime]);

  useEffect(() => {
    async function updateCountdown() {
      console.log('useEffect prisma updateCountdown function called');
      try {
        await fetch('http://localhost:3000/api/countdown', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ seconds: countdownTime.toString() }),
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
