"use client";

import React from "react";
import { motion } from "framer-motion";

const processItems = [
    {
        id: "01",
        title: "Thoughtful Design",
        description:
            "Every ASTRIDE chair begins with a thoughtful design focused on comfort, proportion and timeless aesthetics.",
        type: "background",
        image: "/9.png",
    },

    {
        id: "02",
        title: "Premium Materials",
        description:
            "We carefully select quality fabrics, durable structures and refined finishes to create chairs made for everyday living.",
        type: "chair",
        chairImage: "/5.png",
    },

    {
        id: "03",
        title: "Expert Craftsmanship",
        description:
            "Skilled craftsmen bring every detail together with precision, creating a chair that feels as beautiful as it looks.",
        type: "background",
        image: "/7.png",
    },

    {
        id: "04",
        title: "Comfort Engineering",
        description:
            "From seat depth to back support, every element is carefully considered to provide a comfortable and balanced sitting experience.",
        type: "chair",
        chairImage: "/chair10_FitWell.webp",
    },

    {
        id: "05",
        title: "Detail & Finishing",
        description:
            "Fine stitching, carefully finished edges and beautifully refined surfaces complete the ASTRIDE experience.",
        type: "background",
        image: "/8.png",
    },

    {
        id: "06",
        title: "Quality Assured",
        description:
            "Every chair goes through careful inspection before it becomes part of your home, workspace or everyday environment.",
        type: "chair",
        chairImage: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785216659282-high-back-bar-chair-Brown-3418.webp",
    },
];

export default function ChairProcessSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f7f7f5] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1450px]">

                {/* =====================================================
                    SECTION HEADER
                ===================================================== */}

                <div className="mb-10 flex items-end justify-between sm:mb-12 lg:mb-14">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -60,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#777] sm:text-[11px]">
                            Our Process
                        </p>

                        <h2 className="font-serif text-[38px] leading-[0.95] tracking-[-1.8px] text-[#171717] sm:text-[50px] lg:text-[64px]">
                            How We Create
                            <br />
                            Premium ASTRIDE Chairs
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                        }}
                        className="hidden sm:block"
                    >
                        <button className="group flex items-center gap-3 font-sans text-[12px] text-[#222]">
                            <span>Explore Our Process</span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                                →
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* =====================================================
                    3 × 2 GRID
                ===================================================== */}

                <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
                    {processItems.map((item, index) => (
                        <ProcessCard
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TechnicalChairSVG({ index }) {
    return (
        <motion.svg
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -right-[65px] -top-[50px] z-[1] h-[330px] w-[430px]"
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <motion.path
                d="M 55 260 A 145 145 0 0 1 345 260"
                stroke="#111"
                strokeWidth="1.2"
                strokeDasharray="4 7"
                strokeLinecap="round"
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
                    duration: 1.3,
                    delay: index * 0.08 + 0.2,
                    ease: "easeOut",
                }}
            />
        </motion.svg>
    );
}

function ProcessCard({ item, index }) {
    const isBackground = item.type === "background";

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: -4,
            }}
            className={`
                group
                relative
                h-[310px]
                overflow-hidden
                rounded-[8px]
                border
                border-black/[0.07]
                ${isBackground ? "bg-black" : "bg-[#eeeeeb]"}
            `}
        >
            {/* =====================================================
                BACKGROUND IMAGE CARD
            ===================================================== */}

            {isBackground && (
                <>
                    <motion.img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{
                            scale: 1,
                        }}
                        whileHover={{
                            scale: 1.07,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />

                    {/* Extra hover overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/10"
                        initial={{
                            opacity: 0,
                        }}
                        whileHover={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                    />

                    {/* Number */}
                    <div className="absolute left-5 top-5 z-10">
                        <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 px-2 font-sans text-[10px] text-white backdrop-blur-md">
                            {item.id}
                        </span>
                    </div>

                    {/* Arrow */}
                    <motion.div
                        className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md"
                        whileHover={{
                            rotate: 45,
                            scale: 1.1,
                        }}
                    >
                        ↗
                    </motion.div>

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                        <motion.h3
                            initial={{
                                y: 15,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08 + 0.15,
                            }}
                            className="font-sans text-[21px] font-medium leading-[1.05] tracking-[-0.5px] text-white"
                        >
                            {item.title}
                        </motion.h3>

                        <p className="mt-3 max-w-[330px] font-sans text-[11px] leading-[1.55] text-white/75 sm:text-[12px]">
                            {item.description}
                        </p>

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            whileInView={{
                                width: 35,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08 + 0.35,
                            }}
                            className="mt-4 h-[1px] bg-white"
                        />
                    </div>
                </>
            )}

            {/* =====================================================
                CHAIR PNG CARD
            ===================================================== */}

            {!isBackground && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f2] via-[#eeeeeb] to-[#e5e5df]" />

                    {/* =====================================================
            LARGE SOFT CIRCLE
        ===================================================== */}

                    <motion.div
                        initial={{
                            scale: 0.7,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1,
                            delay: index * 0.08,
                        }}
                        className="absolute right-[-80px] top-[-80px] z-[0] h-[250px] w-[250px] rounded-full border border-black/[0.1]"
                    />

                    {/* =====================================================
            SECOND CIRCLE
        ===================================================== */}

                    <div
                        className="absolute bottom-[-120px] left-[-100px] z-[0] h-[260px] w-[260px] rounded-full border border-black/[0.2]"
                    />

                    {/* Decorative circle */}
                    <motion.div
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                        }}
                        className="absolute right-[-70px] top-[-70px] h-[220px] w-[220px] rounded-full border border-black/[0.2]"
                    />

                    {/* Second decorative circle */}
                    <div className="absolute bottom-[-100px] left-[-80px] h-[220px] w-[220px] rounded-full border border-black/[0.1]" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 z-20">
                        <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-black/10 bg-white/60 px-2 font-sans text-[10px] text-[#222] backdrop-blur-sm">
                            {item.id}
                        </span>
                    </div>

                    {/* Arrow */}
                    <motion.div
                        className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[#222] backdrop-blur-sm"
                        whileHover={{
                            rotate: 45,
                            scale: 1.1,
                        }}
                    >
                        ↗
                    </motion.div>

                    {/* =================================================
                        CHAIR PNG
                    ================================================= */}

                    <motion.img
                        src={item.chairImage}
                        alt="ASTRIDE Chair"
                        className="absolute bottom-0 right-[0px] z-[5] w-[40%] max-w-[190px] object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.16)]"
                        initial={{
                            opacity: 0,
                            x: 50,
                            y: 30,
                            rotate: 3,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            rotate: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: index * 0.08 + 0.15,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: -2,
                            x: -5,
                        }}
                    />

                    {/* =================================================
                        TEXT
                    ================================================= */}

                    <div className="absolute bottom-0 left-0 z-10 w-[70%] p-5 sm:p-6">
                        <motion.h3
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08 + 0.2,
                            }}
                            className="font-sans text-[21px] font-medium leading-[1.05] tracking-[-0.5px] text-[#171717]"
                        >
                            {item.title}
                        </motion.h3>

                        <motion.p
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08 + 0.28,
                            }}
                            className="mt-3 max-w-[250px] font-sans text-[11px] leading-[1.55] text-[#666] sm:text-[12px]"
                        >
                            {item.description}
                        </motion.p>

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            whileInView={{
                                width: 35,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08 + 0.4,
                            }}
                            className="mt-4 h-[1px] bg-[#222]"
                        />
                    </div>
                </>
            )}
        </motion.article>
    );
}