"use client";

import React from "react";
import { motion } from "framer-motion";

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";

import {
    FiArrowUpRight,
    FiMail,
    FiPhone,
    FiMapPin,
    FiArrowRight,
} from "react-icons/fi";

const categories = [
    "Office Chairs",
    "Executive Chairs",
    "Ergonomic Chairs",
    "Visitor Chairs",
    "Lounge Chairs",
    "Dining Chairs",
];

const helpfulLinks = [
    "About Us",
    "Our Process",
    "Products",
    "New Arrivals",
    "Best Sellers",
    "Contact Us",
];

const supportLinks = [
    "Help Center",
    "Shipping & Delivery",
    "Returns & Refunds",
    "Warranty",
    "Track Order",
    "FAQs",
];

const socialLinks = [
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "#",
    },
    {
        name: "Facebook",
        icon: FaFacebookF,
        href: "#",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        href: "#",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        href: "#",
    },
    {
        name: "Pinterest",
        icon: FaPinterestP,
        href: "#",
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#111111] text-white">
            <ChairOutlineSVG />

            <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
                <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">

                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        {/* Logo */}

                        <a
                            href="/"
                            className="inline-block"
                        >
                            <img
                                src="/logo.webp"
                                alt="ASTRIDE"
                                className="h-20 w-auto object-contain brightness-0 invert"
                            />
                        </a>


                        {/* Contact */}
                        <div className="mt-2 space-y-3">

                            <a
                                href="mailto:hello@astride.com"
                                className="group flex items-center gap-3 text-[12px] text-white/80 transition-colors hover:text-white"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                                    <FiMail size={14} />
                                </span>

                                hello@astride.com
                            </a>


                            <a
                                href="tel:+911234567890"
                                className="group flex items-center gap-3 text-[12px] text-white/80 transition-colors hover:text-white"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                                    <FiPhone size={14} />
                                </span>

                                +91 12345 67890
                            </a>


                            <div className="flex items-center gap-3 text-[12px] leading-[1.5] text-white/80">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10">
                                    <FiMapPin size={14} />
                                </span>

                                <span>
                                    New Delhi, India
                                </span>
                            </div>

                        </div>

                    </motion.div>


                    {/* =================================================
                        CATEGORIES
                    ================================================= */}

                    <FooterColumn
                        title="Categories"
                        items={categories}
                        delay={0.1}
                    />


                    {/* =================================================
                        HELPFUL LINKS
                    ================================================= */}

                    <FooterColumn
                        title="Helpful Links"
                        items={helpfulLinks}
                        delay={0.2}
                    />


                    {/* =================================================
                        SUPPORT
                    ================================================= */}

                    <FooterColumn
                        title="Support"
                        items={supportLinks}
                        delay={0.3}
                    />

                </div>

                <div className="
                    flex
                    flex-col
                    gap-7
                    pt-4
                    mt-8
border-t border-white/[0.1]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                ">

                    <p className="text-xs text-white/85">
                        © {new Date().getFullYear()} ASTRIDE. All rights reserved.
                    </p>


                    {/* Social Icons */}

                    <div className="flex items-center gap-2">

                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;

                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -4,
                                    }}
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/[0.3]
                                        text-white/85
                                        transition-all
                                        duration-300
                                        hover:border-white
                                        hover:bg-white
                                        hover:text-black
                                    "
                                >
                                    <Icon size={16} />
                                </motion.a>
                            );
                        })}

                    </div>


                    <div className="flex gap-5 text-xs text-white/85">
                        <a
                            href="/privacy-policy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, items, delay = 0 }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.7,
                delay,
            }}
        >
            <h3 className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                {title}
            </h3>

            <ul className="space-y-3">

                {items.map((item) => (
                    <li key={item}>

                        <a
                            href="#"
                            className="
                                group
                                flex
                                w-fit
                                items-center
                                gap-2
                                text-[12px]
                                text-white/85
                                transition-colors
                                duration-300
                                hover:text-white
                            "
                        >
                            <span>
                                {item}
                            </span>

                            <FiArrowUpRight
                                size={11}
                                className="
                                    opacity-0
                                    -translate-x-1
                                    transition-all
                                    duration-300
                                    group-hover:translate-x-0
                                    group-hover:opacity-100
                                "
                            />
                        </a>

                    </li>
                ))}

            </ul>
        </motion.div>
    );
}

function ChairOutlineSVG() {
    return (
        <motion.svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
                pointer-events-none
                absolute
                bottom-[-120px]
                right-[-70px]
                z-0
                h-[500px]
                w-[500px]
                opacity-[0.07]

                sm:h-[580px]
                sm:w-[580px]

                lg:bottom-[-170px]
                lg:right-[-80px]
                lg:h-[650px]
                lg:w-[650px]
            "
            initial={{
                opacity: 0,
                x: 80,
                y: 40,
            }}
            whileInView={{
                opacity: 0.07,
                x: 0,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 1.3,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {/* Backrest */}
            <motion.path
                d="
                    M190 55
                    C205 42 285 42 305 58
                    L325 205
                    C328 220 315 232 300 234
                    L205 234
                    C188 231 178 220 181 204
                    Z
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    pathLength: 0,
                }}
                whileInView={{
                    pathLength: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.4,
                    delay: 0.2,
                }}
            />

            {/* Headrest */}
            <motion.path
                d="
                    M210 35
                    C215 22 235 17 258 17
                    C280 17 300 22 305 35
                    L302 58
                    C285 66 228 66 211 57
                    Z
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    pathLength: 0,
                }}
                whileInView={{
                    pathLength: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1,
                    delay: 0.35,
                }}
            />

            {/* Lumbar support */}
            <motion.path
                d="
                    M207 170
                    C230 153 278 153 301 170
                    C289 200 220 200 207 170
                    Z
                "
                stroke="white"
                strokeWidth="1.5"
                initial={{
                    pathLength: 0,
                }}
                whileInView={{
                    pathLength: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.9,
                    delay: 0.5,
                }}
            />

            {/* Left arm */}
            <path
                d="
                    M190 190
                    L142 190
                    L137 265
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Right arm */}
            <path
                d="
                    M316 190
                    L364 190
                    L369 265
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Seat */}
            <motion.path
                d="
                    M190 235
                    C205 226 300 226 319 237
                    L365 282
                    C371 289 364 298 353 299
                    L177 299
                    C166 298 159 290 165 282
                    Z
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    pathLength: 0,
                }}
                whileInView={{
                    pathLength: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.1,
                    delay: 0.55,
                }}
            />

            {/* Gas lift */}
            <path
                d="
                    M260 300
                    L260 365
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Chair base */}
            <path
                d="
                    M260 365
                    L145 420
                    M260 365
                    L375 420
                    M260 365
                    L260 438
                    M260 365
                    L190 435
                    M260 365
                    L330 435
                "
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Wheels */}
            <circle
                cx="140"
                cy="424"
                r="9"
                stroke="white"
                strokeWidth="1.5"
            />

            <circle
                cx="380"
                cy="424"
                r="9"
                stroke="white"
                strokeWidth="1.5"
            />

            <circle
                cx="260"
                cy="445"
                r="9"
                stroke="white"
                strokeWidth="1.5"
            />

            <circle
                cx="184"
                cy="440"
                r="9"
                stroke="white"
                strokeWidth="1.5"
            />

            <circle
                cx="336"
                cy="440"
                r="9"
                stroke="white"
                strokeWidth="1.5"
            />
        </motion.svg>
    );
}