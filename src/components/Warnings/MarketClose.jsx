import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const MarketClose = ({ timeZone }) => {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const updateCountdown = () => {
            const now = DateTime.now().setZone(timeZone);
            const dayOfWeek = now.weekday; // Monday = 1, Sunday = 7
            const hourOfDay = now.hour;
            let nextOpenTime;

            if (dayOfWeek >= 1 && dayOfWeek <= 6) {
                if (hourOfDay >= 1 && hourOfDay < 2) {
                    nextOpenTime = now.plus({ hours: 1 }).startOf("hour");
                } else if (dayOfWeek === 6 && hourOfDay >= 1) {
                    nextOpenTime = now.startOf("week").plus({ weeks: 1 }).set({ weekday: 1, hour: 2 });
                } else {
                    nextOpenTime = null;
                }
            } else {
                nextOpenTime = now.startOf("week").plus({ days: 1 }).set({ hour: 2 });
            }

            if (nextOpenTime) {
                const diff = nextOpenTime.diff(now, ["days", "hours", "minutes", "seconds"]).toObject();
                setCountdown(
                    `${diff.days ? `${Math.floor(diff.days)}d ` : ""}${diff.hours ? `${Math.floor(diff.hours)}h ` : ""
                    }${diff.minutes ? `${Math.floor(diff.minutes)}m ` : ""}${Math.floor(diff.seconds)}s`
                );
            } else {
                setCountdown("Market Open");
            }
        };

        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <>
            {/* Diagonal white banner with rotated marquee effect */}
            <div className="absolute top-0 -left-44 w-[70%] xl:w-[60%] 2xl:w-[40%] h-[30%] z-50 flex items-center justify-center">
                {/* Rotated White Banner */}
                <div
                    className="absolute w-full h-16 2xl:h-24 bg-white"
                    style={{
                        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                        transform: "rotate(140deg)",
                    }}
                />

                {/* Marquee Wrapper with Rotation */}
                <div className="absolute w-full overflow-hidden" style={{ transform: "rotate(-40deg)" }}>
                    <span className="text-black text-lg xl:text-xl 2xl:text-4xl font-medium whitespace-nowrap inline-block animate-marquee1">
                        Market closed! Opens in {countdown}
                    </span>
                </div>
            </div>
        </>
    );
};

export default MarketClose;
