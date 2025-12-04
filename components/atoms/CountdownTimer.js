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
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#D00E28",
                    marginBottom: "27px",
                }}
            >
                Offer ends in...
            </p>
            <div className="flex" style={{ gap: "30px" }}>
                <div className="flex flex-col items-center">
                    <div
                        className="bg-white text-center flex items-center justify-center"
                        style={{
                            width: "71px",
                            height: "70px",
                            borderRadius: "10px",
                            paddingTop: "18px",
                            paddingRight: "14px",
                            paddingBottom: "18px",
                            paddingLeft: "14px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.16)",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                color: "#484848",
                                fontFamily: "Montserrat, sans-serif",
                                lineHeight: "1",
                            }}
                        >
                            {formatTime(timeLeft.days)}
                        </div>
                    </div>
                    <div
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            letterSpacing: "0%",
                            color: "#484848",
                            textAlign: "center",
                            marginTop: "8px",
                        }}
                    >
                        Days
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        className="bg-white text-center flex items-center justify-center"
                        style={{
                            width: "71px",
                            height: "70px",
                            borderRadius: "10px",
                            paddingTop: "18px",
                            paddingRight: "14px",
                            paddingBottom: "18px",
                            paddingLeft: "14px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.16)",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                color: "#484848",
                                fontFamily: "Montserrat, sans-serif",
                                lineHeight: "1",
                            }}
                        >
                            {formatTime(timeLeft.hours)}
                        </div>
                    </div>
                    <div
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            letterSpacing: "0%",
                            color: "#484848",
                            textAlign: "center",
                            marginTop: "8px",
                        }}
                    >
                        Hr
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        className="bg-white text-center flex items-center justify-center"
                        style={{
                            width: "71px",
                            height: "70px",
                            borderRadius: "10px",
                            paddingTop: "18px",
                            paddingRight: "14px",
                            paddingBottom: "18px",
                            paddingLeft: "14px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.16)",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                color: "#484848",
                                fontFamily: "Montserrat, sans-serif",
                                lineHeight: "1",
                            }}
                        >
                            {formatTime(timeLeft.minutes)}
                        </div>
                    </div>
                    <div
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            letterSpacing: "0%",
                            color: "#484848",
                            textAlign: "center",
                            marginTop: "8px",
                        }}
                    >
                        Mins
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        className="bg-white text-center flex items-center justify-center"
                        style={{
                            width: "71px",
                            height: "70px",
                            borderRadius: "10px",
                            paddingTop: "18px",
                            paddingRight: "14px",
                            paddingBottom: "18px",
                            paddingLeft: "14px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.16)",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                color: "#484848",
                                fontFamily: "Montserrat, sans-serif",
                                lineHeight: "1",
                            }}
                        >
                            {formatTime(timeLeft.seconds)}
                        </div>
                    </div>
                    <div
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            letterSpacing: "0%",
                            color: "#484848",
                            textAlign: "center",
                            marginTop: "8px",
                        }}
                    >
                        Sec
                    </div>
                </div>
            </div>
        </div>
    );
}
