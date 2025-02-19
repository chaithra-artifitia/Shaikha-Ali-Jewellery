import React from 'react';

const NoInternet = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className="bg-[#202741] p-12 flex justify-center items-center flex-col text-white gap-8 rounded-xl shadow-lg shadow-blue-900/20">
        {/* Custom SVG Icon */}
        <div className="w-40 h-40">
          <svg viewBox="0 0 100 100">
            {/* Base WiFi Icon */}
            <g fill="none" stroke="white" strokeWidth="4">
              {/* WiFi Waves */}
              <path d="M20,65 Q50,35 80,65" className="wave1" opacity="0.3">
                <animate 
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur="2s"
                  repeatCount="indefinite" 
                />
              </path>
              <path d="M30,75 Q50,55 70,75" className="wave2" opacity="0.5">
                <animate 
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="2s"
                  begin="0.3s"
                  repeatCount="indefinite" 
                />
              </path>
              {/* Center Dot */}
              <circle cx="50" cy="80" r="4" fill="white" />
            </g>
            
            {/* X Mark */}
            <g stroke="red" strokeWidth="4">
              <line x1="65" y1="35" x2="80" y2="50">
                <animate 
                  attributeName="x2"
                  values="65;80;65"
                  dur="1s"
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="y2"
                  values="35;50;35"
                  dur="1s"
                  repeatCount="indefinite" 
                />
              </line>
              <line x1="80" y1="35" x2="65" y2="50">
                <animate 
                  attributeName="x2"
                  values="80;65;80"
                  dur="1s"
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="y2"
                  values="35;50;35"
                  dur="1s"
                  repeatCount="indefinite" 
                />
              </line>
            </g>
          </svg>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-wide">
            No Internet Connection
          </h2>
          <p className="text-gray-300">
            Make sure WiFi or cellular data is turned on and try again
          </p>
          
          {/* Retry Button */}
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Retry Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoInternet;