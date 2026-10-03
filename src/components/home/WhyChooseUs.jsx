"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const features = [
    {
        number: "01",
        title: "Eco-Friendly Materials",
        description:
            "We use sustainably sourced wood and eco-conscious finishes to protect your home.",
        image: "/1.png",
    },
    {
        number: "02",
        title: "Tailored Just for You",
        description:
            "Choose from a wide range of customizable options to match your style and space.",
        image: "/2.png",
    },
    {
        number: "03",
        title: "Exceptional Comfort",
        description:
            "Ergonomic seating designed to deliver lasting comfort and support every day.",
        image: "/3.png",
    },
    {
        number: "04",
        title: "Timeless Design",
        description:
            "Modern silhouettes and premium finishes that elevate every interior.",
        image: "/4.png",
    },
];

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prev) => (prev - 1 + features.length) % features.length
        );
    };

    const active = features[activeIndex];
    const next = features[(activeIndex + 1) % features.length];

    return (
        <section className="relative w-full overflow-hidden bg-[#f8f7f3] text-[#171717]">

            <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-16 lg:py-16">

                {/* LEFT CONTENT */}
                <div className="flex items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-28"
                    >
                        <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.3em] text-[#999]">
                            Why Choose ASTRIDE
                        </span>

                        <h2 className="max-w-[500px] text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            Crafting
                            <br />
                            Timeless
                            <br />
                            Furniture
                        </h2>

                        <p className="mt-6 max-w-[340px] text-sm text-[#777]">
                            At ASTRIDE, every piece is crafted with precision and care,
                            combining thoughtful design with everyday comfort to create
                            furniture that lasts.
                        </p>

                        <Link
                            href="/products"
                            className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#333]"
                        >
                            Explore Collection

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT CARD AREA */}
                <div className="min-w-0">

                    {/* CARDS */}
                    <div className="flex h-[330px] items-start gap-3 sm:h-[430px] sm:gap-4 lg:h-[460px]">

                        {/* ACTIVE LARGE CARD */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.number}
                                initial={{
                                    opacity: 0,
                                    x: 40,
                                    scale: 0.92,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -30,
                                    scale: 0.94,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative h-full min-w-0 flex-[1.15] overflow-hidden rounded-[18px] bg-[#e5e3df] sm:rounded-[22px]"
                            >
                                <Image
                                    src={active.image}
                                    alt={active.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 65vw, 35vw"
                                    className="object- transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/55" />

                                <div className="absolute left-4 right-3 top-5 z-10 sm:left-6 sm:right-5 sm:top-7">
                                    <h3 className="text-base font-semibold leading-tight text-white sm:text-xl">
                                        {active.title}
                                    </h3>

                                    <p className="mt-2 max-w-[220px] text-[9px] leading-[1.5] text-white/85 sm:text-xs sm:leading-5">
                                        {active.description}
                                    </p>
                                </div>

                                <span className="absolute bottom-4 right-5 text-4xl font-light tracking-[-0.08em] text-white/90 sm:bottom-6 sm:right-7 sm:text-5xl">
                                    {active.number}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        {/* NEXT SMALL CARD */}
                        <div className="relative h-full min-w-0 flex-1">
                            <motion.div
                                key={`next-${next.number}`}
                                initial={{ opacity: 0, x: 25 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                                className="group relative h-[86%] min-w-0 flex-1 overflow-hidden rounded-[18px] bg-[#e5e3df] sm:rounded-[22px]"
                            >
                                <Image
                                    src={next.image}
                                    alt={next.title}
                                    fill
                                    sizes="(max-width: 768px) 35vw, 25vw"
                                    className="object- transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/55" />

                                <div className="absolute left-3 right-2 top-4 z-10 sm:left-5 sm:right-4 sm:top-6">
                                    <h3 className="text-sm font-semibold leading-tight text-white sm:text-lg">
                                        {next.title}
                                    </h3>

                                    <p className="mt-2 max-w-[220px] text-[8px] leading-[1.5] text-white/80 sm:text-[10px] sm:leading-4">
                                        {next.description}
                                    </p>
                                </div>

                                <span className="absolute bottom-3 right-4 text-3xl font-light text-white/90 sm:bottom-5 sm:right-5 sm:text-4xl">
                                    {next.number}
                                </span>
                            </motion.div>

                            <div className="flex justify-center gap-3 mt-4">

                                <button
                                    type="button"
                                    onClick={prevSlide}
                                    aria-label="Previous card"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
                                >
                                    <ArrowLeft size={16} />
                                </button>

                                <button
                                    type="button"
                                    onClick={nextSlide}
                                    aria-label="Next card"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
                                >
                                    <ArrowRight size={16} />
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* NAVIGATION UNDER CARDS */}
                    {/* <div className="mt-5 flex justify-end gap-3 sm:mt-6">

                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Previous card"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next card"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            <ArrowRight size={16} />
                        </button>

                    </div> */}
                </div>
            </div>
        </section>
    );
}