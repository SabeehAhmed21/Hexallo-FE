import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#AE6F28",
                color: "#FFF6DF",
                fontFamily: "TT Norms Pro, sans-serif",
                height: "44px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "2rem",
                    paddingLeft: "70px",
                    paddingRight: "70px",
                    width: "100%",
                    height: "100%",
                }}
            >
                {/* Left - Copyright */}
                <div>
                    <p style={{ margin: 0, fontSize: "16px", fontWeight: 400 }}>
                        All rights reserved Hexallo LLC 2023
                    </p>
                </div>

                {/* Navigation Links - positioned to the left */}
                <div
                    style={{
                        display: "flex",
                        gap: "2rem",
                        alignItems: "center",
                        marginLeft: "4rem",
                    }}
                >
                    <a
                        href="#"
                        style={{
                            color: "#FFF6DF",
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: 400,
                        }}
                    >
                        Privacy policy
                    </a>
                    <a
                        href="#"
                        style={{
                            color: "#FFF6DF",
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: 400,
                        }}
                    >
                        Terms of service
                    </a>
                    <a
                        href="#"
                        style={{
                            color: "#FFF6DF",
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: 400,
                        }}
                    >
                        Contact us
                    </a>
                </div>

                {/* Right - Social Media Icons */}
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        marginLeft: "auto",
                    }}
                >
                    {/* X (Twitter) */}
                    <a href="#" aria-label="X (Twitter)">
                        <FaXTwitter size={24} style={{ color: "#FFF6DF" }} />
                    </a>

                    {/* LinkedIn */}
                    <a href="#" aria-label="LinkedIn">
                        <Image
                            src="/icons/linked.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </a>

                    {/* Facebook */}
                    <a href="#" aria-label="Facebook">
                        <Image
                            src="/icons/facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </a>

                    {/* Instagram */}
                    <a href="#" aria-label="Instagram">
                        <FaInstagram size={24} style={{ color: "#FFF6DF" }} />
                    </a>

                    {/* WhatsApp */}
                    <a href="#" aria-label="WhatsApp">
                        <FaWhatsapp size={24} style={{ color: "#FFF6DF" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
