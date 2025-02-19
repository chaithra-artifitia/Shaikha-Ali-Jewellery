import React from 'react';

const SentimentSection = ({ ratio }) => {

    return (
        <div
            className="w-full bg-dark h-fit pl-6 py-2 flex flex-col"
            style={{ clipPath: "polygon(0% 0%, 89% 0%, 100% 100%, 0% 100%)" }}
        >
            <div className='w-10/12'>
                {/* Labels */}
                <div className="flex justify-between mb-2 2xl:mb-3">
                    <span className="text-white text-xs xl:text-base 2xl:text-2xl font-medium">BUYERS</span>
                    <span className="text-light_red text-xs xl:text-base 2xl:text-2xl">{ratio?.chgValue}</span>
                    <span className="text-white text-xs xl:text-base 2xl:text-2xl font-medium">SELLERS</span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-1 bg-gray-800">
                    <div
                        className="absolute left-0 h-full bg-light_blue"
                        style={{ width: `${ratio?.Buyers}` }}
                    ></div>
                    <div
                        className="absolute right-0 h-full bg-light_red"
                        style={{
                            width: `${Number(ratio?.Buyers?.match(/\d+/)[0])
                                ? 100 - Number(ratio?.Buyers?.match(/\d+/)[0])
                                : 0}%`
                        }}
                    ></div>
                </div>

                {/* Percentages under the bar */}
                <div className="flex justify-between items-center mt-2">
                    <span className="text-light_blue text-xs xl:text-base 2xl:text-2xl">{ratio?.Buyers}</span>
                    <span className="text-light_red text-xs xl:text-lg 2xl:text-2xl">
                        {Number(ratio?.Buyers?.match(/\d+/)[0])
                            ? 100 - Number(ratio?.Buyers?.match(/\d+/)[0])
                            : 0}
                        %
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SentimentSection;
