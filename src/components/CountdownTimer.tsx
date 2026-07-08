/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(900); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 900; // auto-reset to maintain the conversion urgency
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="inline-flex items-center gap-2 bg-amber-500 text-white font-black px-3 py-1 rounded-full text-xs sm:text-sm animate-pulse shadow-sm">
      <span className="tracking-wide">EXPIRA EM:</span>
      <span className="font-mono text-sm sm:text-base tracking-wider">{formatTime(timeLeft)}</span>
    </div>
  );
}
