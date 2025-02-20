import React from 'react';

const Marquee = ({ news, goldNews, adminData }) => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-yellow overflow-hidden relative'>
      <div className="top-0 left-full animate-marquee">

        {(!adminData?.isNewsEnable && Object.keys(goldNews).length > 0) ? (
          <p className="text-black text-lg xl:text-xl 2xl:text-3xl italic font-medium xl:font-normal flex items-center whitespace-nowrap">
            <span>Gold Price News</span>&nbsp;&nbsp;:&nbsp;&nbsp;
            <span>{goldNews?.title}</span>
          </p>
        ) : (
          news?.map((item, index) => (
            <p key={item._id} className="text-black text-lg xl:text-xl 2xl:text-3xl italic font-medium xl:font-normal flex items-center whitespace-nowrap">
              <span className="font-bold">{item.newsTitle}</span>&nbsp;&nbsp;:&nbsp;&nbsp;
              <span>{item.newsDetails}</span>
              {index !== news.length - 1 && <span className="px-6">|</span>}
            </p>
          ))
        )}
      </div>
    </div >
  );
}

export default Marquee;
