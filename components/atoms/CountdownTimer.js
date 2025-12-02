"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 6,
        minutes: 5,
        seconds: 30,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value) => String(value).padStart(2, "0");

    return (
        <div>
            <p className="text-red-600 text-sm font-medium mb-3">
                Offer ends in...
            </p>
            <div className="flex gap-2">
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">
                        {formatTime(timeLeft.days)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Days</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">
                        {formatTime(timeLeft.hours)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Hr</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">
                        {formatTime(timeLeft.minutes)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Mins</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">
                        {formatTime(timeLeft.seconds)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Sec</div>
                </div>
            </div>
        </div>
    );
}
