"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

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
    const targetDate = new Date("2025-02-25T00:00:00"); // Target date: 1 month countdown from today
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
      <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s animate__zoomIn">
        Coming Soon
      </h1>

      {/* YouTube Channel Details */}
      <div className="flex items-center justify-center space-x-4 mb-6">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="105.94"
  height={24}
  viewBox="0 0 512 116"
>
  <path
    fill="#f00"
    d="M159.89 17.93a20.55 20.55 0 0 0-14.471-14.47C132.73 0 81.666 0 81.666 0S30.6.105 17.913 3.565a20.55 20.55 0 0 0-14.47 14.47c-3.838 22.545-5.327 56.896.105 78.538a20.55 20.55 0 0 0 14.47 14.47c12.688 3.46 63.753 3.46 63.753 3.46s51.065 0 63.753-3.46a20.55 20.55 0 0 0 14.47-14.47c4.047-22.576 5.295-56.906-.105-78.642"
  />
  <path fill="#fff" d="m65.413 81.788l42.362-24.536l-42.362-24.537z" />
  <path
    fill="#282828"
    d="M491.237 33.24c5.557 0 9.751 1.048 12.687 3.04q4.404 2.989 6.292 9.438c1.258 4.299 1.782 10.17 1.782 17.72v12.269H485.05v3.774l.42 10.381c.314 2.307.839 3.985 1.677 5.033c.84 1.049 2.202 1.573 3.985 1.573c2.412 0 4.09-.943 4.928-2.83c.944-1.888 1.363-5.034 1.468-9.333l13.946.839c.105.629.105 1.468.105 2.516c0 6.606-1.783 11.535-5.453 14.785s-8.703 4.928-15.309 4.928c-7.969 0-13.526-2.516-16.672-7.444C471 95 469.322 87.24 469.322 76.86V64.172c.356-17.825 3.491-30.88 21.915-30.932m-193.88 1.363v52.533c0 3.146.314 5.453 1.048 6.816c1.489 2.915 5.348 2.17 7.445.734a8.4 8.4 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65 65 0 0 1-.133-3.492V34.603zm82.732 0v52.533c0 3.146.314 5.453 1.048 6.816c1.49 2.915 5.348 2.17 7.445.734a8.4 8.4 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65 65 0 0 1-.133-3.492V34.603zM250.8 33.24c5.243 0 9.542 1.048 12.688 3.25c3.145 2.202 5.557 5.558 7.025 10.171c1.468 4.614 2.202 10.8 2.202 18.455v10.38c0 7.655-.734 13.737-2.202 18.35c-1.468 4.615-3.775 7.97-7.025 10.172c-3.25 2.097-7.655 3.25-13.107 3.25c-5.663.105-10.067-1.048-13.317-3.145c-3.25-2.202-5.558-5.558-6.92-10.171c-1.364-4.614-1.993-10.696-1.993-18.35V65.22c0-7.655.734-13.946 2.307-18.56c1.573-4.718 3.984-8.074 7.34-10.17c3.355-2.098 7.654-3.251 13.002-3.251m181.822-28.73v37.748h.105c1.468-2.726 3.355-4.928 5.977-6.606a14.8 14.8 0 0 1 8.283-2.516c3.88 0 6.816 1.048 9.018 3.04c2.202 2.098 3.775 5.348 4.718 9.857c.915 4.368 1.435 10.409 1.467 18.027l.001.743v11.324c0 10.59-1.363 18.455-3.88 23.488c-2.62 5.033-6.605 7.55-12.058 7.55c-3.04 0-5.767-.734-8.283-2.097a14.7 14.7 0 0 1-5.35-5.392l-.208-.376h-.314l-1.678 6.816h-13.317V4.51zm-64.173 3.67V21.18h-15.938v85.039h-15.728V21.181H320.74V8.18zm-172.909 0l.01.04c.153.681 2.273 10.106 4.605 21.087l.184.87l.278 1.315l.186.883l.093.443l.186.888l.093.445l.185.891l.27 1.303c1.575 7.604 3.078 15.23 3.977 20.698h.42c.861-4.905 2.112-11.182 3.446-17.591l.35-1.674q.263-1.258.53-2.512l.274-1.297a2039 2039 0 0 1 5.597-25.444l.03-.135l.048-.21h16.043l-18.56 66.165v31.771h-15.833V74.448h-.105l-18.35-66.27zm54.945 36.175c-2.202 0-3.67 1.154-4.613 3.566s-1.363 6.081-1.363 11.22v22.334c0 5.243.419 9.122 1.258 11.43q1.259 3.46 4.718 3.46q3.303 0 4.719-3.46c.944-2.308 1.363-6.187 1.363-11.43V59.139c0-5.138-.42-8.913-1.363-11.22c-.944-2.411-2.517-3.565-4.719-3.565m184.968 2.098c-1.278 1.18-2.187 2.635-2.728 4.454l-.103.369v40.684c1.3 2.202 3.146 3.67 6.396 3.775q2.516 0 4.09-1.887q1.572-1.887 2.201-6.292q.605-4.227.629-11.644v-9.956c0-5.662-.21-9.961-.524-13.002c-.42-3.041-.943-5.243-1.887-6.501c-1.825-2.622-5.767-2.59-8.074 0m55.47-2.412q-2.675.157-3.776 1.573c-.838 1.048-1.363 2.621-1.677 4.928c-.309 2.26-.415 10.16-.42 10.476v5.148h11.744v-4.54v.087c-.007 1.587-.04-.921-.112-4l-.01-.414c-.066-2.706-.162-5.723-.297-6.757c-.315-2.412-.84-4.09-1.678-5.033c-.839-.944-2.097-1.468-3.775-1.468"
  />
</svg>

        <p className="text-2xl text-gray-200 animate__animated animate__bounceIn animate__delay-2s">
          Subscribe to <strong>@hamidExplore</strong> for Exciting Content!
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s transform transition duration-500 hover:scale-105">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Countdown to Launch:</h2>
        
        {timeLeft ? (
          <div className="text-3xl font-bold text-gray-700">
            <span className="text-blue-600">{timeLeft.days}</span> Days{" "}
            <span className="text-blue-600">{timeLeft.hours}</span> Hours{" "}
            <span className="text-blue-600">{timeLeft.minutes}</span> Minutes{" "}
            <span className="text-blue-600">{timeLeft.seconds}</span> Seconds
          </div>
        ) : (
          <div className="text-xl text-green-600 font-semibold">Launch Time Reached!</div>
        )}

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{
              width: timeLeft ? `${(100 * (timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds)) / 2592000}%` : "100%",
            }}
          />
        </div>
        
        {/* 1 Month Left Special Effect */}
        {timeLeft && timeLeft.days === 30 && (
          <div className="mt-4 text-xl font-semibold text-yellow-500 animate__animated animate__flash animate__infinite">
            Only 1 Month Left!
          </div>
        )}
      </div>

      {/* Call to Action with Hover Effect */}
      

      <Link href="https://www.youtube.com/@HamidExplore">
      <button
        className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-400 transform transition duration-300 ease-in-out hover:scale-105"
      >
        Subscribe my channel!
      </button>
      </Link>
      

    </div>
  );
}

export default Page;
