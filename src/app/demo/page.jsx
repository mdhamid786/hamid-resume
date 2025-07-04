"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const countdown = getTimeLeft();
      setTimeLeft(countdown);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getTimeLeft = () => {
    const targetDate = new Date("2025-07-25T00:00:00"); // Target date
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) return null;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-center p-6">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-white mb-4 animate-bounce">
        Coming Soon
      </h1>

      {/* YouTube Channel Details */}
      <div className="flex items-center justify-center space-x-4 mb-6">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width={48}
  height={48}
  viewBox="0 0 24 24"
>
  <path
    fill="#f46969"
    d="M2.5 4.5h19c.84 0 1.5.65 1.5 1.5v11.5c0 .85-.66 1.5-1.5 1.5h-19c-.85 0-1.5-.65-1.5-1.5V6c0-.85.65-1.5 1.5-1.5m7.21 4V15l5.71-3.3zM17.25 21H6.65c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10.7c.3 0 .5.2.5.5s-.3.5-.6.5"
  />
</svg>


        <span className="text-white text-lg">My YouTube Channel</span>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {timeLeft ? (
          <div className="text-2xl sm:text-sm text-gray-700">
            <div>
              <span className="font-bold">{timeLeft.days}</span> days{" "}
              <span className="font-bold">{timeLeft.hours}</span> hours{" "}
              <span className="font-bold">{timeLeft.minutes}</span> minutes{" "}
              <span className="font-bold">{timeLeft.seconds}</span> seconds
            </div>
          </div>
        ) : (
          <div className="text-2xl text-red-600">The countdown has ended!</div>
        )}
      </div>

      {/* Subscribe Button */}
      <Link
        href="https://www.youtube.com/@HamidExplore"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-500 transition duration-300"
      >
        Subscribe Now
      </Link>
    </div>
  );
};

export default Page;
