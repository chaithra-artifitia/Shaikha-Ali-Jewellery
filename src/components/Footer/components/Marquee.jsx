import React from 'react';

const Marquee = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-yellow overflow-hidden relative'>
      <div className="top-0 left-full animate-marquee">
        <p className="text-black text-lg xl:text-xl 2xl:text-3xl italic font-medium xl:font-normal flex items-center whitespace-nowrap">
          Know the latest Gold News, Gold rate, Gold price in India, Go Know the latest G
        </p>
      </div>
    </div>
  );
}

export default Marquee;
