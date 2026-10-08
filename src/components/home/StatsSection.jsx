"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    Package,
    Users,
    CalendarDays,
    Star,
} from "lucide-react";

const stats = [
    {
        value: 500000,
        suffix: "+",
        label: "Orders delivered",
        icon: Package,
    },
    {
        value: 400000,
        suffix: "+",
        label: "Happy customers",
        icon: Users,
    },
    {
        value: 12,
        suffix: "",
        label: "Years experience",
        icon: CalendarDays,
    },
    {
        value: 4.8,
        suffix: "",
        label: "Customer rating",
        icon: Star,
        decimals: 1,
    },
];

export default function StatsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f4f4f2]">
            <div
                className="relative min-h-[760px] w-full bg-cover bg-center bg-no-repeat sm:min-h-[820px] lg:min-h-[650px]"
                style={{
                    backgroundImage:
                        "url('/banner/3.png')",
                }}
            >
                {/* =====================================================
                    CONTENT WRAPPER
                ===================================================== */}

                <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1700px] flex-col px-5 py-10 sm:px-8 lg:min-h-[650px] lg:px-[5vw] lg:py-14">
                    {/* =================================================
                        RIGHT SIDE CONTENT
                    ================================================= */}

                    <div
                        className="ml-auto flex w-full flex-col sm:max-w-[650px] lg:w-[54%] lg:max-w-[780px]"
                    >
                        {/* =================================================
                            STAT CARDS
                        ================================================= */}

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={stat.label}
                                    stat={stat}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* =================================================
                            AVAILABLE ON
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mt-5 flex min-h-[145px] w-full flex-col items-center justify-center rounded-[24px] border border-black/[0.08] bg-white/90 px-6 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md lg:min-h-[155px] lg:rounded-[26px]"
                        >
                            {/* Heading */}
                            <div className="flex w-full items-center justify-center gap-4">
                                <span className="h-px flex-1 max-w-[130px] bg-black/20" />

                                <span className="font-serif text-[15px] tracking-[0.05em] text-[#222]">
                                    Available on
                                </span>

                                <span className="h-px flex-1 max-w-[130px] bg-black/20" />
                            </div>

                            {/* Marketplace */}
                            <div className="mt-5 flex items-center justify-center gap-7 sm:gap-12">
                                {/* Amazon */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    className="flex cursor-pointer flex-col items-center"
                                >
                                    <span className="font-sans text-[34px] font-bold leading-none tracking-[-1.5px] text-black sm:text-[42px]">
                                        amazon
                                    </span>

                                    <div className="relative mt-[-1px] h-[8px] w-[78px]">
                                        <span className="absolute left-[8px] top-0 h-[3px] w-[62px] rotate-[3deg] rounded-full bg-[#ff9900]" />
                                        <span className="absolute right-0 top-[-2px] text-[13px] font-bold text-[#ff9900]">
                                            ›
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Divider */}
                                <div className="h-[50px] w-px bg-black/20" />

                                {/* Flipkart */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    className="flex cursor-pointer items-center gap-2"
                                >
                                    <span className="font-sans text-[31px] font-bold italic tracking-[-1px] text-[#2874f0] sm:text-[38px]">
                                        Flipkart
                                    </span>

                                    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#ffc900]">
                                        <span className="text-[22px] font-black text-[#2874f0]">
                                            f
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ stat, index }) {
    const Icon = stat.icon;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 55,
                scale: 0.96,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: -5,
                boxShadow:
                    "0 20px 50px rgba(0,0,0,0.10)",
            }}
            className="group relative flex min-h-[150px] items-center overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/90 px-5 py-6 backdrop-blur-md transition-shadow duration-500 sm:min-h-[160px] lg:min-h-[175px] lg:px-7"
        >
            {/* Subtle hover background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-black/[0.025] via-transparent to-black/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* =====================================================
                ICON
            ===================================================== */}

            <motion.div
                initial={{
                    scale: 0,
                    rotate: -15,
                }}
                whileInView={{
                    scale: 1,
                    rotate: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.12 + 0.15,
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                }}
                className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#171717] text-white sm:h-[68px] sm:w-[68px]"
            >
                <Icon
                    strokeWidth={1.5}
                    className="h-[27px] w-[27px]"
                />
            </motion.div>

            {/* =====================================================
                NUMBER + LABEL
            ===================================================== */}

            <div className="relative z-10 ml-5">
                <div
                    className="font-serif text-[40px] leading-[0.9] tracking-[-2px] text-[#151515] sm:text-[46px] lg:text-[52px]"
                >
                    <CountUp
                        end={stat.value}
                        duration={2.4}
                        decimals={stat.decimals || 0}
                        enableScrollSpy
                        scrollSpyOnce
                        separator=","
                    />

                    <span>{stat.suffix}</span>
                </div>

                <div className="mt-3 font-sans text-[12px] tracking-[0.01em] text-[#555] sm:text-[13px]">
                    {stat.label}
                </div>

                {/* Small underline */}
                <motion.div
                    initial={{
                        width: 0,
                    }}
                    whileInView={{
                        width: 38,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.12 + 0.35,
                    }}
                    className="mt-3 h-[2px] bg-black"
                />
            </div>
        </motion.div>
    );
}