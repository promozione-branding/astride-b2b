"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
    {
        image: "/banner/1.png",
        tag: "OFFICE COLLECTION",
        title: "Work in",
        highlight: "Comfort.",
        description:
            "Premium office chairs designed for long hours, better posture and effortless comfort.",
    },
    {
        image: "/banner/2.png",
        tag: "GAMING COLLECTION",
        title: "Game without",
        highlight: "Limits.",
        description:
            "Experience immersive comfort and bold design with our premium gaming chairs.",
    },
];

export default function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[650px] w-full overflow-hidden bg-black text-white">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative h-full w-full">
                        {({ isActive }) => (
                            <div className="relative h-full w-full overflow-hidden">
                                {/* Background */}
                                <div
                                    className={`absolute inset-0 transition-transform duration-[7000ms] ease-out ${isActive ? "scale-110" : "scale-100"
                                        }`}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        priority={index === 0}
                                        className="object-cover object-center"
                                    />
                                </div>

                                {/* Dark overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" /> */}

                                {/* Bottom gradient */}
                                {/* <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" /> */}

                                {/* Content */}
                                <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16">
                                    <div
                                        className={`max-w-[650px] transition-all duration-[1200ms] ease-out ${isActive
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                            }`}
                                    >
                                        {/* Small heading */}
                                        <p
                                            className={`mb-5 text-sm font-medium tracking-[0.35em] text-white/70 transition-all delay-200 duration-1000 ${isActive
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-10 opacity-0"
                                                }`}
                                        >
                                            {slide.tag}
                                        </p>

                                        {/* Main heading */}
                                        <h1
                                            className={`text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl transition-all delay-300 duration-1000 ${isActive
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-16 opacity-0"
                                                }`}
                                        >
                                            {slide.title}
                                            <br />
                                            <span className="font-semibold">
                                                {slide.highlight}
                                            </span>
                                        </h1>

                                        {/* Description */}
                                        <p
                                            className={`mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base transition-all delay-500 duration-1000 ${isActive
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-8 opacity-0"
                                                }`}
                                        >
                                            {slide.description}
                                        </p>

                                        {/* Button */}
                                        <div
                                            className={`mt-9 transition-all delay-700 duration-1000 ${isActive
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-8 opacity-0"
                                                }`}
                                        >
                                            <Link
                                                href="/shop"
                                                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-black hover:text-white hover:ring-1 hover:ring-white"
                                            >
                                                Explore Collection

                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                                                    <ArrowUpRight
                                                        size={17}
                                                    />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}