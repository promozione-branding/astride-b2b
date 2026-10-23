
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const clients = [
    { id: 1, name: "B2X", image: "/clients/1.webp", className: "object-contain" },
    { id: 2, name: "Kidzania", image: "/clients/2.webp", className: "object-contain" },
    { id: 3, name: "VLCC", image: "/clients/3.png", className: "object-cover" },
    { id: 4, name: "Modicare Ltd", image: "/clients/4.png", className: "object-cover" },
    { id: 5, name: "Embassy of Spain", image: "/clients/5.png" },
    { id: 6, name: "Ceasefire", image: "/clients/ceasefire.png" },
    { id: 7, name: "Regenersis", image: "/clients/regenersis.png" },
    { id: 8, name: "Madhusudhan Ghee", image: "/clients/madhusudhan.png" },
    { id: 9, name: "Vedanta Foundation", image: "/clients/vedanta.png" },
    { id: 10, name: "Oyo Rooms", image: "/clients/oyo.png" },
    { id: 11, name: "GMR", image: "/clients/gmr.png" },
    { id: 12, name: "Cipla", image: "/clients/cipla.png" },
    { id: 13, name: "Mahindra & Mahindra", image: "/clients/mahindra.png" },
    { id: 14, name: "Vivo Mobile", image: "/clients/vivo.png" },
    { id: 15, name: "Paytm", image: "/clients/paytm.png" },
    { id: 16, name: "HT Times", image: "/clients/ht-times.png" },
    { id: 17, name: "Redbus Ibibo Group", image: "/clients/redbus.png" },
];

export default function Client() {
    const swiperRef = useRef(null);

    return (
        <section className="relative overflow-hidden bg-white py-12 md:py-15 border-b border-[#b4e717]">
            <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div>
                        <div className="mb-2 flex items-center gap-3">
                            <span className="h-[3px] w-10 bg-[#B4E717]" />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black">
                                Our Clients
                            </span>
                        </div>

                        <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
                            Brands That{" "}
                            <span className="relative inline-block">
                                Trust Us
                                {/* <span className="absolute bottom-0 left-0 -z-0 h-[10px] w-full bg-[#B4E717]/60" /> */}
                            </span>
                            <span className="text-[#B4E717]">.</span>
                        </h2>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="Previous clients"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-black transition-all duration-300 hover:border-[#B4E717] hover:bg-[#B4E717]"
                        >
                            <ArrowLeft size={19} />
                        </button>

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            aria-label="Next clients"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B4E717] text-black transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            <ArrowRight size={19} />
                        </button>
                    </div>
                </motion.div>

                {/* Swiper */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                        speed={850}
                        grabCursor={true}
                        autoplay={{
                            delay: 2200,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={16}
                        slidesPerView={2}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 18,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 22,
                            },
                        }}
                        className="!py-5"
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={client.id} className="!h-auto">
                                <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#B4E717] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">

                                    {/* Hover Background */}
                                    <div className="absolute inset-x-0 bottom-0 h-0 bg-[#B4E717] transition-all duration-500 group-hover:h-full" />

                                    {/* Corner Icon */}
                                    <div className="absolute right-3 top-3 z-10 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <ArrowUpRight size={18} className="text-black" />
                                    </div>

                                    {/* Logo */}
                                    <div className="relative z-10 flex h-[95px] w-full items-center justify-center">
                                        <div className="relative h-[80px] w-full transition-transform duration-500 group-hover:scale-110">
                                            <Image
                                                src={client.image}
                                                alt={`${client.name} logo`}
                                                fill
                                                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 180px"
                                                className={client.className || "object-contain"}
                                            />
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="relative z-10 my-4 h-px w-10 bg-neutral-200 transition-all duration-500 group-hover:w-16 group-hover:bg-black/30" />

                                    {/* Name */}
                                    <h3 className="relative z-10 text-center text-sm font-bold leading-5 text-black md:text-[15px]">
                                        {client.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Bottom Section */}
                <div className="mt-5 flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-neutral-200" />
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                        Trusted by leading organizations
                    </p>
                    <span className="h-px w-12 bg-neutral-200" />
                </div>
            </div>
        </section>
    );
}
