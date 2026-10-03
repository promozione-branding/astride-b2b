"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

import {
    FiArrowUpRight,
    FiMenu,
    FiX,
} from "react-icons/fi";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Top of page
            if (currentScrollY <= 20) {
                setScrolled(false);
                setShowNav(true);
            }
            // Scrolling down
            else if (currentScrollY > lastScrollY) {
                setScrolled(true);
                setShowNav(false);
            }
            // Scrolling up
            else if (currentScrollY < lastScrollY) {
                setScrolled(true);
                setShowNav(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about-us",
        },
        {
            name: "Products",
            href: "/products",
        },
        {
            name: "Our Articles",
            href: "/our-articles",
        },
        {
            name: "Contact",
            href: "/contact-us",
        },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed left-0 top-0 z-[9999] w-full bg-white text-black"
            >
                {/* ================================================= */}
                {/* TOP BAR */}
                {/* ================================================= */}

                <div
                    className={`relative z-30 border-b border-black/10 bg-white transition-shadow duration-500 ${scrolled
                            ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                            : "shadow-none"
                        }`}
                >
                    <div className="relative mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-6 lg:px-10">

                        {/* LEFT SOCIAL ICONS */}

                        <div className="hidden items-center gap-2 lg:flex">
                            <a
                                href="tel:+919999999999"
                                className="rounded-full border bg-white p-2.5 transition-all duration-300 hover:bg-black hover:text-white"
                            >
                                <FaPhoneAlt size={15} />
                            </a>

                            <a
                                href="mailto:info@example.com"
                                className="rounded-full border bg-white p-2.5 transition-all duration-300 hover:bg-black hover:text-white"
                            >
                                <FaEnvelope size={14} />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="rounded-full border bg-white p-2.5 transition-all duration-300 hover:bg-black hover:text-white"
                            >
                                <FaFacebookF size={13} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="rounded-full border bg-white p-2.5 transition-all duration-300 hover:bg-black hover:text-white"
                            >
                                <FaInstagram size={15} />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="rounded-full border bg-white p-2.5 transition-all duration-300 hover:bg-black hover:text-white"
                            >
                                <FaLinkedinIn size={14} />
                            </a>

                            <a
                                href="#"
                                aria-label="Youtube"
                                className="rounded-full border bg-white p-2.5 transition-all duration-300 hover:bg-black hover:text-white"
                            >
                                <FaYoutube size={15} />
                            </a>
                        </div>

                        {/* CENTER LOGO */}

                        <Link
                            href="/"
                            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.04,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                                className="relative h-[80px] w-48"
                            >
                                <Image
                                    src="/logo.webp"
                                    alt="Logo"
                                    fill
                                    priority
                                    sizes="170px"
                                    className="object-contain"
                                />
                            </motion.div>
                        </Link>

                        {/* RIGHT QUOTE */}

                        <div className="ml-auto">
                            <Link
                                href="/contact"
                                className="group relative flex items-center overflow-hidden bg-black px-6 py-3 text-[13px] font-semibold text-white"
                            >
                                <span className="absolute inset-0 origin-left scale-x-0 bg-neutral-800 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                                <span className="relative z-10">
                                    Get a Quote
                                </span>

                                <FiArrowUpRight
                                    size={17}
                                    className="relative z-10 ml-3 transition-transform duration-300 group-hover:rotate-45"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ================================================= */}
                {/* SECOND NAVIGATION BAR - HIDE ON SCROLL DOWN */}
                {/* ================================================= */}

                <motion.div
                    initial={false}
                    animate={{
                        y: showNav ? 0 : -100,
                        opacity: showNav ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 top-[72px] z-20 hidden w-full border-b border-black/10 bg-white lg:block"
                >
                    <nav className="mx-auto flex h-[62px] max-w-[1500px] items-center justify-center px-6">
                        <div className="flex items-center gap-12">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{
                                        opacity: 0,
                                        y: -8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.15 + index * 0.07,
                                        duration: 0.4,
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="group relative block py-5 text-[14px] font-medium tracking-wide"
                                    >
                                        <span className="transition-opacity duration-300 group-hover:opacity-60">
                                            {item.name}
                                        </span>

                                        <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </nav>
                </motion.div>

                {/* ================================================= */}
                {/* MOBILE HEADER */}
                {/* ================================================= */}

                <div className="flex h-[70px] items-center justify-between bg-white px-6 lg:hidden">

                    <Link href="/">
                        <div className="relative h-[45px] w-[130px]">
                            <Image
                                src="/logo.webp"
                                alt="Logo"
                                fill
                                priority
                                sizes="130px"
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    <button
                        onClick={() =>
                            setMobileOpen(!mobileOpen)
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"
                        aria-label="Toggle navigation"
                    >
                        <AnimatePresence mode="wait">
                            {mobileOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{
                                        rotate: -90,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        rotate: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        rotate: 90,
                                        opacity: 0,
                                    }}
                                >
                                    <FiX size={22} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{
                                        rotate: 90,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        rotate: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        rotate: -90,
                                        opacity: 0,
                                    }}
                                >
                                    <FiMenu size={22} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* ================================================= */}
                {/* MOBILE MENU */}
                {/* ================================================= */}

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0,
                            }}
                            animate={{
                                height: "calc(100vh - 70px)",
                                opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute left-0 top-[70px] w-full overflow-hidden bg-white lg:hidden"
                        >
                            <div className="flex h-full flex-col px-6 py-8">

                                <div>
                                    {navItems.map(
                                        (item, index) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{
                                                    opacity: 0,
                                                    x: -25,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        0.1 +
                                                        index * 0.08,
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() =>
                                                        setMobileOpen(false)
                                                    }
                                                    className="flex items-center justify-between border-b border-black/10 py-5 text-xl font-medium"
                                                >
                                                    {item.name}

                                                    <FiArrowUpRight
                                                        size={20}
                                                    />
                                                </Link>
                                            </motion.div>
                                        )
                                    )}
                                </div>

                                <Link
                                    href="/contact"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                    className="mt-8 flex w-full items-center justify-center bg-black px-6 py-4 text-sm font-semibold text-white"
                                >
                                    Get a Quote

                                    <FiArrowUpRight
                                        size={18}
                                        className="ml-2"
                                    />
                                </Link>

                                <div className="mt-auto border-t border-black/10 pt-6">

                                    <a
                                        href="tel:+919999999999"
                                        className="mb-3 flex items-center gap-3 text-sm"
                                    >
                                        <FaPhoneAlt size={12} />
                                        +91 99999 99999
                                    </a>

                                    <a
                                        href="mailto:info@example.com"
                                        className="flex items-center gap-3 text-sm"
                                    >
                                        <FaEnvelope size={13} />
                                        info@example.com
                                    </a>

                                    <div className="mt-5 flex gap-3">
                                        <a
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
                                        >
                                            <FaFacebookF size={12} />
                                        </a>

                                        <a
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
                                        >
                                            <FaInstagram size={13} />
                                        </a>

                                        <a
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
                                        >
                                            <FaLinkedinIn size={12} />
                                        </a>

                                        <a
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
                                        >
                                            <FaYoutube size={13} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Desktop header space */}
            <div className="hidden h-[72px] lg:block" />

            {/* Mobile header space */}
            <div className="h-[70px] lg:hidden" />
        </>
    );
}