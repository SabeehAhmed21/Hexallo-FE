import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                backgroundColor: "#AE6F28",
                color: "#FFF6DF",
                fontFamily: "TT Norms Pro",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 pl-0 pr-0"
                style={{
                    height: "100%",
                    minWidth: 0,
                }}
            >
                {/* First Div - All text content (Copyright + Links) */}
                <div
                    className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-[96px] flex-shrink-0"
                    style={{ minWidth: 0 }}
                >
                    {/* Copyright */}
                    <p
                        className="text-xs md:text-base whitespace-nowrap text-center md:text-left flex-shrink-0"
                        style={{
                            margin: 0,
                            fontFamily: "TT Norms Pro",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            letterSpacing: "0%",
                            color: "#FFF6DF",
                        }}
                    >
                        All rights reserved Hexallo LLC 2023
                    </p>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 flex-shrink-0">
                        <a
                            href="#"
                            className="text-xs sm:text-sm md:text-base whitespace-nowrap"
                            style={{
                                fontFamily: "TT Norms Pro",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "120%",
                                letterSpacing: "0%",
                                color: "#FFF6DF",
                                textDecoration: "none",
                            }}
                        >
                            Privacy policy
                        </a>
                        <a
                            href="#"
                            className="text-xs sm:text-sm md:text-base whitespace-nowrap"
                            style={{
                                fontFamily: "TT Norms Pro",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "120%",
                                letterSpacing: "0%",
                                color: "#FFF6DF",
                                textDecoration: "none",
                            }}
                        >
                            Terms of service
                        </a>
                        <a
                            href="#"
                            className="text-xs sm:text-sm md:text-base whitespace-nowrap"
                            style={{
                                fontFamily: "TT Norms Pro",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "120%",
                                letterSpacing: "0%",
                                color: "#FFF6DF",
                                textDecoration: "none",
                            }}
                        >
                            Contact us
                        </a>
                    </div>
                </div>

                {/* Second Div - Social Media Icons */}
                <div
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0"
                    style={{ minWidth: 0 }}
                >
                    {/* X (Twitter) */}
                    <a href="#" aria-label="X (Twitter)">
                        <FaXTwitter
                            size={20}
                            className="sm:w-6 sm:h-6"
                            style={{ color: "#FFF6DF" }}
                        />
                    </a>

                    {/* LinkedIn */}
                    <a href="#" aria-label="LinkedIn">
                        <Image
                            src="/icons/linked.svg"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                            className="sm:w-6 sm:h-6"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </a>

                    {/* Facebook */}
                    <a href="#" aria-label="Facebook">
                        <Image
                            src="/icons/facebook.svg"
                            alt="Facebook"
                            width={20}
                            height={20}
                            className="sm:w-6 sm:h-6"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </a>

                    {/* Instagram */}
                    <a href="#" aria-label="Instagram">
                        <FaInstagram
                            size={20}
                            className="sm:w-6 sm:h-6"
                            style={{ color: "#FFF6DF" }}
                        />
                    </a>

                    {/* WhatsApp */}
                    <a href="#" aria-label="WhatsApp">
                        <FaWhatsapp
                            size={20}
                            className="sm:w-6 sm:h-6"
                            style={{ color: "#FFF6DF" }}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
