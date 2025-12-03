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
            <p
                style={{
                    color: "#DC2626",
                    fontSize: "14px",
                    fontWeight: 500,
                    marginBottom: "12px",
                    fontFamily: "Montserrat, sans-serif",
                }}
            >
                Offer ends in...
            </p>
            <div className="flex gap-2">
                <div
                    className="bg-white rounded-lg text-center"
                    style={{
                        padding: "12px",
                        boxShadow:
                            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#484848",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        {formatTime(timeLeft.days)}
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            color: "#5B5F62",
                            marginTop: "4px",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        Days
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg text-center"
                    style={{
                        padding: "12px",
                        boxShadow:
                            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#484848",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        {formatTime(timeLeft.hours)}
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            color: "#5B5F62",
                            marginTop: "4px",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        Hr
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg text-center"
                    style={{
                        padding: "12px",
                        boxShadow:
                            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#484848",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        {formatTime(timeLeft.minutes)}
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            color: "#5B5F62",
                            marginTop: "4px",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        Mins
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg text-center"
                    style={{
                        padding: "12px",
                        boxShadow:
                            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#484848",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        {formatTime(timeLeft.seconds)}
                    </div>
                    <div
                        style={{
                            fontSize: "12px",
                            color: "#5B5F62",
                            marginTop: "4px",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        Sec
                    </div>
                </div>
            </div>
        </div>
    );
}
