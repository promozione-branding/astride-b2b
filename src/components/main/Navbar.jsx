
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
    Home,
    Info,
    Newspaper,
    CircleUserRound,
    Menu,
    X,
    ArrowUpRight,
    ChevronDown,
} from "lucide-react";
import { GiOfficeChair } from "react-icons/gi";
import EnquiryPopup from "../EnquiryPopup";
import { categorySlugs } from "../../../data/category-slugs";

const navItems = [
    {
        name: "Home",
        icon: Home,
        href: "/",
    },
    {
        name: "Categories",
        icon: GiOfficeChair,
        href: "/category",
        dropdown: [
            {
                name: "Staff Chairs",
                href: `/category/${categorySlugs["Staff Chairs"]}`,
            },
            {
                name: "Office Chairs",
                href: `/category/${categorySlugs["Office Chairs"]}`,
            },
            {
                name: "Gaming Chairs",
                href: `/category/${categorySlugs["Gaming Chairs"]}`,
            },
            {
                name: "Study Chairs",
                href: `/category/${categorySlugs["Study Chairs"]}`,
            },
            {
                name: "Bar Stools & Cafe Chair",
                href: `/category/${categorySlugs["Bar Stools & Cafe Chairs"]}`,
            },
        ],
    },
    {
        name: "About",
        icon: Info,
        href: "/about-us",
        dropdown: [
            { name: "Our Story", href: "/about-us#our-story" },
            { name: "Who we are", href: "/about-us#who-we-are" },
            { name: "Our Philosophy", href: "/about-us#our-philosophy" },
            { name: "Team", href: "/about-us#team" },
        ],
    },
    {
        name: "Our Articles",
        icon: Newspaper,
        href: "/our-articles",
    },
    {
        name: "Contact",
        icon: CircleUserRound,
        href: "/contact-us",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
     const [enquiryOpen, setEnquiryOpen] = useState(false);

    // Homepage can be transparent at the top.
    // Every other route starts with a white navbar.
    const isHomePage = pathname === "/";
    const useWhiteNavbar = !isHomePage || scrolled;

    // Update navbar state while scrolling and when routes change.
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    // Close mobile menu after navigation.
    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    // Prevent background scrolling when mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
                <motion.nav
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative mx-auto flex h-[60px] w-full max-w-[1600px] items-center justify-between rounded-[22px] px-5 transition-all duration-300 md:h-[88px] md:px-10 lg:px-12 ${
                        useWhiteNavbar
                            ? "bg-white shadow-lg shadow-black/5 backdrop-blur-xl"
                            : "bg-black/30 "
                    }`}
                >
                    {/* LEFT LOGO */}
                    <Link
                        href="/"
                        aria-label="Go to homepage"
                        className="relative z-10 flex h-12 w-[110px] shrink-0 items-center md:h-20 md:w-[140px]"
                    >
                        <Image
                            src="/logo5.png"
                            alt="Logo"
                            fill
                            priority
                            sizes="140px"
                                                        className={`object-contain transition-all duration-300 ${
                                useWhiteNavbar
                                    ? "brightness-100 invert-0"
                                    : "brightness-0 invert"
                            }`}
                        />
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex xl:gap-10">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/" &&
                                    pathname.startsWith(item.href)) ||
                                (item.dropdown &&
                                    item.dropdown.some((subItem) =>
                                        pathname.startsWith(
                                            subItem.href.split("?")[0].split("#")[0]
                                        )
                                    ));

                            return (
                                <div
                                    key={item.name}
                                    className="group relative"
                                >
                                    <Link
                                        href={item.href}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        className={`relative flex items-center gap-1.5 whitespace-nowrap py-3 text-[14px] font-medium transition-colors duration-300 xl:text-[15px] ${
                                            useWhiteNavbar
                                                ? "text-black/75 hover:text-black"
                                                : "text-white/85 hover:text-white"
                                        }`}
                                    >
                                        {item.name}

                                        {item.dropdown && (
                                            <ChevronDown
                                                size={15}
                                                className="transition-transform duration-300 group-hover:rotate-180"
                                            />
                                        )}

                                        <span
                                            className={`absolute bottom-[6px] left-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                                                isActive ? "w-full" : "w-0"
                                            } ${
                                                useWhiteNavbar
                                                    ? "bg-[#b4e717]"
                                                    : "bg-white"
                                            }`}
                                        />
                                    </Link>

                                    {/* DESKTOP DROPDOWN */}
                                    {item.dropdown && (
                                        <div className="invisible absolute left-1/2 top-full z-50 w-[250px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                            <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#fff] p-2 shadow-xl shadow-black/10">
                                                {item.dropdown.map(
                                                    (subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium text-[#1c4b42] transition-all duration-200 hover:bg-[#b4e717] "
                                                        >
                                                            {subItem.name}

                                                            <ArrowUpRight
                                                                size={15}
                                                                className="opacity-0 transition-all duration-200 group-hover/item:opacity-100"
                                                            />
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT BUTTONS */}
                    <div className="relative z-10 flex items-center gap-3">
                        <button
                            onClick={() => setEnquiryOpen(true)}
                            className={`hidden h-[48px] items-center justify-center gap-3 rounded-full px-7 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 md:flex ${
                                useWhiteNavbar
                                    ? "bg-[#b4e717] text-black hover:bg-neutral-100"
                                    : "bg-white text-black hover:bg-neutral-200"
                            }`}
                        >
                            Contact Us
                            <ArrowUpRight size={18} />
                        </button>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label={
                                menuOpen ? "Close menu" : "Open menu"
                            }
                            aria-expanded={menuOpen}
                            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                                useWhiteNavbar
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            {menuOpen ? (
                                <X size={23} />
                            ) : (
                                <Menu size={23} />
                            )}
                        </button>
                    </div>
                </motion.nav>
                <EnquiryPopup
                isOpen={enquiryOpen}
                onClose={() => setEnquiryOpen(false)}
            />

            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                        />

                        {/* MENU PANEL */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="fixed left-3 right-3 top-[94px] z-50 max-h-[calc(100dvh-110px)] overflow-y-auto rounded-[24px] border border-black/10 bg-white p-5 shadow-2xl md:left-5 md:right-5 lg:hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon;

                                    const isActive =
                                        pathname === item.href ||
                                        (item.href !== "/" &&
                                            pathname.startsWith(item.href));

                                    const isExpanded =
                                        openDropdown === item.name;

                                    return (
                                        <div key={item.name}>
                                            <div
                                                className={`flex items-center rounded-xl transition-colors ${
                                                    isActive
                                                        ? "bg-black text-white"
                                                        : "text-black hover:bg-neutral-100"
                                                }`}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
                                                    className="flex flex-1 items-center gap-3 px-4 py-4 text-[15px] font-medium"
                                                >
                                                    <Icon size={19} />
                                                    {item.name}
                                                </Link>

                                                {item.dropdown ? (
                                                    <button
                                                        type="button"
                                                        aria-label={`Toggle ${item.name} dropdown`}
                                                        aria-expanded={isExpanded}
                                                        onClick={() =>
                                                            setOpenDropdown(
                                                                isExpanded
                                                                    ? null
                                                                    : item.name
                                                            )
                                                        }
                                                        className="flex h-12 w-12 items-center justify-center"
                                                    >
                                                        <ChevronDown
                                                            size={18}
                                                            className={`transition-transform duration-300 ${
                                                                isExpanded
                                                                    ? "rotate-180"
                                                                    : ""
                                                            }`}
                                                        />
                                                    </button>
                                                ) : (
                                                    <ArrowUpRight
                                                        size={17}
                                                        className="mr-4"
                                                    />
                                                )}
                                            </div>

                                            {/* MOBILE SUBMENU */}
                                            <AnimatePresence initial={false}>
                                                {item.dropdown &&
                                                    isExpanded && (
                                                        <motion.div
                                                            initial={{
                                                                height: 0,
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                height: "auto",
                                                                opacity: 1,
                                                            }}
                                                            exit={{
                                                                height: 0,
                                                                opacity: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.25,
                                                            }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-6 space-y-1 border-l border-black/15 py-2 pl-4">
                                                                {item.dropdown.map(
                                                                    (subItem) => (
                                                                        <Link
                                                                            key={
                                                                                subItem.name
                                                                            }
                                                                            href={
                                                                                subItem.href
                                                                            }
                                                                            onClick={() =>
                                                                                setMenuOpen(
                                                                                    false
                                                                                )
                                                                            }
                                                                            className="block rounded-lg px-3 py-3 text-sm text-black/70 transition-colors hover:bg-black hover:text-white"
                                                                        >
                                                                            {
                                                                                subItem.name
                                                                            }
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* MOBILE CONTACT BUTTON */}
                            <div className="mt-5 border-t border-black/10 pt-5">
                                <Link
                                    href="/contact-us"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#b4e717] text-sm font-semibold text-black transition hover:bg-neutral-200"
                                >
                                    Contact Us
                                    <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
