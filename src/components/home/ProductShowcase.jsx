"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";

import "swiper/css";

const products = [
    {
        id: "01",
        name: "Staff Chair",
        title: "Staff Chair",
        description:
            "The ASTRIDE® Staff Chair is a practical and durable seating solution designed to meet the everyday requirements of modern offices, workstations, educational institutions, and commercial environments.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157137-staff-chair-Black-e127.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157138-staff-chair-Black-0ce1.webp",
        tagline: ["Sculptural Design", "Everyday Comfort", "Built to Last"],
    },
    {
        id: "02",
        name: "Mesh Back",
        title: "Staff Chair",
        description:
            "The ASTRIDE® Granate Mesh Back Staff Chair is a versatile and ergonomic office seating solution designed to enhance comfort, productivity, and workplace efficiency.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1781251090021-mesh-back-staff-chair-modular-furn-Black-83ac.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1781251090030-mesh-back-staff-chair-modular-furn-Black-af12.webp",
        tagline: ["Minimal Form", "Refined Details", "Built to Last"],
    },
    {
        id: "03",
        name: "High Back",
        title: "Office Chair",
        description:
            "ASTRIDE Mavic High Back Ergonomic Office Chair for Work | 2D Adjustable Soft PU Armrest | 1D Adjustable Lumbar Support | Adjustable Soft Foam Headrest | 9+ Hours Comfort | BIS CERTIFIED (DIY, WHITE).",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785413863849-high-back-office-chair-Black-6889.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785413863884-high-back-office-chair-Black-30ed.webp",
        tagline: ["Smart Storage", "Modern Living", "Timeless Style"],
    },
    {
        id: "04",
        name: "Flex Pro",
        title: "Office Chair",
        description:
            "The ASTRIDE® Flex Pro Office Chair is a premium ergonomic seating solution designed to deliver exceptional comfort, flexibility, and support for professionals working in modern office and home environments.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785222040553-flex-pro-office-chair-with-3d-adjustable-headrest-2d-adjustable-soft-armest-Black-0992.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785222040558-flex-pro-office-chair-with-3d-adjustable-headrest-2d-adjustable-soft-armest-Black-5deb.webp",
        tagline: ["Sculptural Design", "Everyday Comfort", "Built to Last"],
    },
    {
        id: "05",
        name: "Gaming Chair",
        title: "Gaming Chair",
        description:
            "The ASTRIDE® Gaming Chair with Adjustable Armrest is a high-performance ergonomic seating solution designed for gamers, streamers, professionals, and creators who spend extended hours at their desks.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491676-gaming-chair-with-adjustable-armrest-Red-a842.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491681-gaming-chair-with-adjustable-armrest-Red-f826.webp",
        tagline: ["Soft Comfort", "Quiet Luxury", "Made to Rest"],
    },
    {
        id: "06",
        name: "High Back",
        title: "Gaming Chair",
        description:
            "The ASTRIDE® High Back Gaming Chair is a premium ergonomic gaming and workstation chair engineered for professional gamers, streamers, creators, and power users who spend extended hours seated.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785221322764-high-back-gaming-chair-Black-d3b1.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785410315305-high-back-gaming-chair-Black-3a48.webp",
        tagline: ["Smart Design", "Work in Style", "Built to Last"],
    },
    {
        id: "07",
        name: "Airsense Mid",
        title: "Study Chair",
        description:
            "The ASTRIDE® Airsense Mid Back Ergonomic Office Chair is designed to provide superior comfort, ergonomic support, and flexibility for professionals, students, and remote workers.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785216199963-astride-airsense-mid-back-office-chair-for-work-from-homestudy-chair-height-adjustable-revolving-chair-with-tilt-lock-heavy-duty-metal-base-black-Black-ec7a.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785216199969-astride-airsense-mid-back-office-chair-for-work-from-homestudy-chair-height-adjustable-revolving-chair-with-tilt-lock-heavy-duty-metal-base-black-Black-faf4.webp",
        tagline: ["Compact Form", "Versatile Use", "Modern Living"],
    },
    {
        id: "08",
        name: "Ace Mid",
        title: "Study Chair",
        description:
            "The ASTRIDE® Ace Mid Back Office Chair is a versatile and ergonomic seating solution designed to provide comfort, support, and productivity across home offices, study rooms, and professional workspaces.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218360619-astride-ace-mid-back-office-chair-for-work-from-homestudy-chair-height-adjustable-revolving-chair-with-tilt-lock-heavy-duty-nylon-base-Black-26d1.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218360622-astride-ace-mid-back-office-chair-for-work-from-homestudy-chair-height-adjustable-revolving-chair-with-tilt-lock-heavy-duty-nylon-base-Black-58f9.webp",
        tagline: ["Outdoor Living", "Lasting Quality", "Modern Form"],
    },
    {
        id: "09",
        name: "Adjustable Stool",
        title: "BAR STOOLS & CAFE CHAIR",
        description:
            "The ASTRIDE® Adjustable Swivel Bar Stool is a versatile and contemporary seating solution designed to enhance the comfort and style of modern homes, cafés, restaurants, bars, and commercial spaces.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785219416299-adjustable-swivel-bar-stool-Black-1773.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785219416306-adjustable-swivel-bar-stool-Black-663e.webp",
        tagline: ["Outdoor Living", "Lasting Quality", "Modern Form"],
    },
    {
        id: "10",
        name: "Rapid Modern",
        title: "BAR STOOLS & CAFE CHAIR",
        description:
            "The ASTRIDE® Rapid Modern High Bar Chair is a stylish and functional seating solution designed to complement modern dining areas, bars, and commercial spaces.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785220469709-rapid-modern-high-bar-chair-for-dining-and-bar-counter-Black-a2b8.webp",
        preview: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785220469711-rapid-modern-high-bar-chair-for-dining-and-bar-counter-Black-1ddf.webp",
        tagline: ["Outdoor Living", "Lasting Quality", "Modern Form"],
    },
];

export default function ProductShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const activeProduct = products[activeIndex];

    const handleProductClick = (index) => {
        setActiveIndex(index);
        swiperRef.current?.slideToLoop(index);
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#f2f3f3] text-[#111] border border-black/6">

            <div className="mx-auto flex max-w-[1600px] flex-col px-5 pt-6 sm:px-10 lg:px-16">

                {/* MAIN PRODUCT DISPLAY */}
                <div className="relative grid flex-1 grid-cols-1 items-center gap-5 pb-6 pt-5 lg:grid-cols-3 lg:gap-0 lg:py-6">

                    {/* LEFT PRODUCT INFORMATION */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProduct.id}
                            initial={{ opacity: 0, x: -35 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -25 }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative z-20 order-2 max-w-[600px] lg:order-1"
                        >
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-black/45">
                                {activeProduct.title}
                            </p>

                            <h1 className="max-w-[550px] text-5xl font-light leading-[0.98] tracking-[-0.065em] sm:text-6xl text-nowrap lg:text-[clamp(55px,5.8vw,90px)]">
                                {activeProduct.name}
                            </h1>

                            <p className="mt-6 max-w-[370px] text-xs leading-6 text-black/55 sm:text-sm sm:leading-7">
                                {activeProduct.description}
                            </p>

                            <Link
                                href="/products"
                                className="group mt-7 inline-flex items-center gap-4 rounded-full bg-black px-6 py-3.5 text-[11px] font-medium text-white transition-all duration-300 hover:bg-[#333]"
                            >
                                Discover Product

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </span>
                            </Link>

                            {/* PRODUCT FEATURES */}
                            <div className="mt-9 flex max-w-[360px] divide-x divide-black/15 border-t border-black/10 pt-5">
                                {activeProduct.tagline.map((tag, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 px-3 first:pl-0"
                                    >
                                        <span className="mb-2 block h-1 w-1 rounded-full bg-[#c9a227]" />

                                        <p className="text-[9px] leading-4 text-black/70 sm:text-[10px]">
                                            {tag}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* MAIN CENTER PRODUCT IMAGE */}
                    <div className="relative order-1 flex h-[350px] ml-20 items-center justify-center sm:h-[440px] lg:order-2 lg:h-full lg:min-h-0">

                        {/* Soft background glow */}
                        <div className="absolute left-[45%] top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[75px] sm:h-[450px] sm:w-[450px]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id}
                                initial={{
                                    opacity: 0,
                                    x: 100,
                                    scale: 0.82,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -100,
                                    scale: 0.9,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 z-10"
                            >
                                <Image
                                    src={activeProduct.image}
                                    alt={activeProduct.name}
                                    fill
                                    priority={activeIndex === 0}
                                    sizes="(max-width: 768px) 90vw, 55vw"
                                    className="object-contain object-center drop-shadow-[0_25px_25px_rgba(0,0,0,0.10)]"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT PRODUCT PREVIEW */}
                    <div className="absolute right-0 top-[17%] z-20 hidden w-[190px] lg:block xl:right-10 xl:w-[220px]">

                        <div className="relative h-[145px] overflow-hidden rounded-sm bg-[#dededb] xl:h-[200px]">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProduct.id}
                                    initial={{ opacity: 0, scale: 1.08 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.45 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={activeProduct.preview}
                                        alt={`${activeProduct.name} detail`}
                                        fill
                                        sizes="220px"
                                        className="object-"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        <div className="bg-white px-3 py-4">
                            <p className="text-[10px] leading-[1.6] text-black/55">
                                Thoughtfully designed details and refined
                                craftsmanship bring comfort and character
                                to every space.
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM PRODUCT SWIPER */}
                <div className="relative z-30 mt-auto border-t border-black/10">

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        navigation={{
                            prevEl: ".product-prev",
                            nextEl: ".product-next",
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        slidesPerView={2.5}
                        spaceBetween={0}
                        speed={800}
                        watchOverflow={false}
                        breakpoints={{
                            480: {
                                slidesPerView: 3.5,
                            },
                            640: {
                                slidesPerView: 4.5,
                            },
                            768: {
                                slidesPerView: 5.5,
                            },
                            1024: {
                                slidesPerView: 8,
                            },
                        }}
                        className="product-selector !overflow-visible"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={product.id}>
                                <button
                                    type="button"
                                    onClick={() => handleProductClick(index)}
                                    className={`relative flex h-[110px] w-full flex-col items-start border-r border-black/10 px-3 py-3 text-left transition-colors duration-300 sm:h-[125px] sm:px-4 ${activeIndex === index
                                        ? "bg-black text-white"
                                        : "bg-transparent text-black hover:bg-white"
                                        }`}
                                >
                                    <span
                                        className={`mb-1 text-[8px] font-semibold ${activeIndex === index
                                            ? "text-[#c9a227]"
                                            : "text-black/40"
                                            }`}
                                    >
                                        {product.id}
                                    </span>

                                    <span className="line-clamp-1 text-[10px] font-semibold sm:text-xs">
                                        {product.name}
                                    </span>

                                    <div className="relative mt-auto h-[55px] w-full sm:h-[65px]">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            sizes="120px"
                                            className={`object-contain transition-transform duration-500 ${activeIndex === index
                                                ? "scale-110"
                                                : "scale-100"
                                                }`}
                                        />
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* PREVIOUS BUTTON */}
                    <button
                        type="button"
                        aria-label="Previous product"
                        className="product-prev absolute -left-3 top-1/2 z-40 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition hover:bg-black hover:text-white sm:-left-4"
                    >
                        <ArrowLeft size={14} />
                    </button>

                    {/* NEXT BUTTON */}
                    <button
                        type="button"
                        aria-label="Next product"
                        className="product-next absolute -right-3 top-1/2 z-40 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition hover:bg-black hover:text-white sm:-right-4"
                    >
                        <ArrowRight size={14} />
                    </button>

                </div>

            </div>
        </section>
    );
}