import React from 'react';

const DateDetail = () => {

    // Formatting functions
    const formatDate = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const formatDay = new Date().toLocaleDateString("en-GB", { weekday: "long" });

    const formatTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-dark_green border border-dark_sky rounded-sm">
            <span className='text-4xl 2xl:text-6xl font-bold mb-2 2xl:mb-4'>{formatTime}</span>
            <span className='text-xl 2xl:text-4xl font-normal uppercase' style={{ letterSpacing: "0.1em" }}>{formatDay}</span>
            <span className='text-xl 2xl:text-4xl font-normal'>{formatDate}</span>
        </div>
    );
}

export default DateDetail;
