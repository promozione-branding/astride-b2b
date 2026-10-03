
"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const reviews = [
    {
        id: 1,
        rating: "4.9",
        title: <>Beautiful<br />Home<br />Quality Life</>,
        description:
            "Sustainable production, eco-conscious materials and environmentally responsible manufacturing for your home.",
        videoText: <>Changed my posture completely in just 2 weeks. Best purchase of 2024.<br />Only responsibly sourced<br />wood, premium fabrics, and<br />durable hardware.</>,
        linkText: "Learn More",
        chairImage: "/5.png",
        videoId: "54IyaNt-2vo",
        videoThumbnail: "https://img.youtube.com/vi/54IyaNt-2vo/maxresdefault.jpg",
    },
    {
        id: 2,
        rating: "4.9",
        title: <>Designed<br />For<br />Better Living</>,
        description:
            "Thoughtfully designed chairs combining comfort, timeless aesthetics and quality craftsmanship for everyday living.",
        videoText: <>The lumbar support is insane. Zero back pain after 10-hour sessions. <br />Crafted for everyday<br />comfort with carefully<br />selected materials.</>,
        linkText: "Learn More",
        chairImage: "/6.png",
        videoId: "36wb7ZDNdZg",
        videoThumbnail: "https://img.youtube.com/vi/36wb7ZDNdZg/maxresdefault.jpg",
    },
    {
        id: 3,
        rating: "4.9",
        title: <>Comfort<br />Meets<br />Character</>,
        description:
            "A refined balance of ergonomic comfort, premium construction and contemporary design made for modern spaces.",
        videoText: <>The ultimate chair for long work sessions and intense gaming. <br />Discover the comfort,<br />details and thoughtful<br />design behind the chair.</>,
        linkText: "Learn More",
        chairImage: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785219955488-alpha-adjustable-bar-stool-chair-for-caf-and-home-Black-2342.webp",
        videoId: "--rKEoktpGw",
        videoThumbnail: "https://img.youtube.com/vi/--rKEoktpGw/maxresdefault.jpg",
    },
];

export default function ReviewSection() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="review-section relative w-full overflow-hidden bg-[#f5f4f1]">
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                allowTouchMove
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
                className="review-swiper w-full"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewSlide review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        aria-label={`Go to slide ${index + 1} `}
                        className={`h - [5px] rounded - full transition - all duration - 500 ${activeIndex === index
                            ? "w-[32px] bg-[#ad6428]"
                            : "w-[8px] bg-[#ad6428]/30"
                            } `}
                    />
                ))}
            </div>
        </section>
    );
}

function ReviewSlide({ review }) {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <div className="relative h-[620px] w-full overflow-hidden px-5 py-6 sm:h-[650px] sm:px-8 lg:h-[680px] lg:px-[5vw]">

            {/* RATING */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute left-[5vw] top-8 z-20"
            >
                <div className="flex items-center gap-2 rounded-full border border-[#9a5a27]/60 bg-[#f5f4f1] px-3 py-1.5">
                    <span className="text-base font-medium text-[#70431e]">
                        {review.rating}*
                    </span>
                    <span className="text-base text-[#70431e]">
                        Customer Rating
                    </span>
                </div>
            </motion.div>

            {/* HEADING */}
            <div className="absolute left-[42%] top-7 z-10 w-[48%] sm:left-[43%] lg:left-[35%]">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="font-serif text-[48px] leading-[0.9] tracking-[-2px] text-[#b4692b] sm:text-[65px] md:text-[76px] lg:text-[85px]"
                >
                    {review.title}
                </motion.h2>
            </div>

            <motion.a
                href="/products"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-[5vw] top-8 z-30 flex h-[85px] w-[85px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#a9601d] to-[#f28b00] text-white shadow-xl sm:h-[95px] sm:w-[95px]"
            >
                <span className="text-center text-xs font-medium uppercase leading-tight tracking-wide">
                    Let's
                    <br />
                    <span className="mt-0.5 flex items-center gap-1">
                        Shop! <ArrowRight size={14} />
                    </span>
                </span>
            </motion.a>

            {/* CHAIR IMAGE */}
            <div className="absolute bottom-[-5px] left-[-30px] z-20 w-[58%] sm:left-[-20px] sm:w-[53%] lg:bottom-0 lg:left-[-65px] lg:w-[53%]">
                <motion.div
                    initial={{ opacity: 0, x: -100, y: 70, scale: 0.88 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                >
                    <motion.div
                        animate={{
                            scaleX: [1, 0.92, 1],
                            opacity: [0.15, 0.1, 0.15],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[5%] left-[15%] h-[25px] w-[65%] rounded-full bg-black blur-2xl"
                    />

                    <motion.img
                        src={review.chairImage}
                        alt="ASTRIDE chair"
                        className="relative z-10 h-[480px] w-full object-contain sm:h-[540px] lg:h-[590px]"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="absolute right-[15%] top-[290px] z-20 max-w-[290px] sm:top-[310px] lg:right-[25%] lg:top-[300px]"
            >
                <p className="text-[12px] leading-[1.6] text-[#171717] sm:text-[13px]">
                    {review.description}
                </p>
            </motion.div>

            {/* VIDEO CARD DESKTOP */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.65 }}
                className="absolute bottom-[45px] right-40 z-40 hidden h-[250px] w-[320px] overflow-hidden rounded-[12px] border border-[#e2ddd6] bg-white shadow-sm md:block lg:w-140"
            >
                <div className="flex h-full">
                    <div className="relative h-full w-[55%] overflow-hidden bg-[#ead5bf]">
                        {!videoOpen ? (
                            <>
                                <img
                                    src={review.videoThumbnail}
                                    alt="Chair video"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <button
                                    onClick={() => setVideoOpen(true)}
                                    aria-label="Play video"
                                    className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-white"
                                >
                                    <span className="ml-1">▶</span>
                                </button>
                            </>
                        ) : (
                            <div className="relative h-full w-full">
                                <iframe
                                    src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&rel=0`}
                                    title="Chair video"
                                    className="absolute inset-0 h-full w-full"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                                <button
                                    onClick={() => setVideoOpen(false)}
                                    className="absolute right-1 top-1 z-20 rounded-full bg-black/70 px-2 text-white"
                                >
                                    ×
                                </button>
                            </div >
                        )}
                    </div >

                    <div className="flex flex-1 flex-col justify-between px-3 py-3">
                        <p className="text-base leading-[1.4] text-[#2d2118]">
                            {review.videoText}
                        </p>
                        <button
                            onClick={() => setVideoOpen(true)}
                            className="w-fit border-b border-[#a76328] pb-0.5 text-[11px] text-[#9c5d27]"
                        >
                            {review.linkText}
                        </button>
                    </div>
                </div >
            </motion.div >

            {/* MOBILE VIDEO CARD */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-[55px] left-1/2 z-50 w-[calc(100%-40px)] -translate-x-1/2 overflow-hidden rounded-xl border border-[#ded7cf] bg-white shadow-md md:hidden"
            >
                <div className="flex h-[105px]">
                    <div className="relative w-[48%] bg-[#e7b27e]">
                        {!videoOpen ? (
                            <>
                                <img
                                    src={review.videoThumbnail}
                                    alt="Chair video"
                                    className="h-full w-full object-cover"
                                />
                                <button
                                    onClick={() => setVideoOpen(true)}
                                    className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-white"
                                >
                                    ▶
                                </button>
                            </>
                        ) : (
                            <iframe
                                src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&rel=0`}
                                title="Chair review"
                                className="h-full w-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between px-3 py-2.5">
                        <p className="text-[9px] leading-[1.35] text-[#2c241f]">
                            {review.videoText}
                        </p>
                        <button
                            onClick={() => setVideoOpen(true)}
                            className="w-fit border-b border-[#a76328] text-[10px] text-[#9c5d27]"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </ motion.div>
        </div >
    );
}