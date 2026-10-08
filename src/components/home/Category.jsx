"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "Staff Chair",
        title: "Transform",
        highlight: "Your Workspace",
        description:
            "Explore comfortable staff chairs designed to create a professional, supportive, and productive workspace.",
        image: "/categories/6.png",
    },
    {
        id: 2,
        name: "Office Chair",
        title: "Transform",
        highlight: "Your Office",
        description:
            "Discover ergonomic office chairs that combine comfort, functionality, and contemporary design for modern workspaces.",
        image: "/categories/5.webp",
    },
    {
        id: 3,
        name: "Gaming Chair",
        title: "Upgrade",
        highlight: "Your Gaming Setup",
        description:
            "Experience superior comfort and support with gaming chairs designed for long gaming sessions and immersive gameplay.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491683-gaming-chair-with-adjustable-armrest-Green-1b77.webp",
    },
    {
        id: 4,
        name: "Study Chair",
        title: "Create",
        highlight: "Your Study Space",
        description:
            "Bring comfort and focus to your study area with thoughtfully designed chairs made for everyday learning.",
        image: "/categories/7.png",
    },
    {
        id: 5,
        name: "Bar Stool & Cafe Chair",
        title: "Elevate",
        highlight: "Your Bar Area",
        description:
            "Add a stylish and functional touch to your counter or bar area with contemporary bar chairs.",
        image: "/categories/1.webp",
    },
    {
        id: 6,
        name: "Staff Chair",
        title: "Transform",
        highlight: "Your Workspace",
        description:
            "Explore comfortable staff chairs designed to create a professional, supportive, and productive workspace.",
        image: "/categories/6.png",
    },
    {
        id: 7,
        name: "Office Chair",
        title: "Transform",
        highlight: "Your Office",
        description:
            "Discover ergonomic office chairs that combine comfort, functionality, and contemporary design for modern workspaces.",
        image: "/categories/5.webp",
    },
    {
        id: 8,
        name: "Gaming Chair",
        title: "Upgrade",
        highlight: "Your Gaming Setup",
        description:
            "Experience superior comfort and support with gaming chairs designed for long gaming sessions and immersive gameplay.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491683-gaming-chair-with-adjustable-armrest-Green-1b77.webp",
    },
    {
        id: 9,
        name: "Study Chair",
        title: "Create",
        highlight: "Your Study Space",
        description:
            "Bring comfort and focus to your study area with thoughtfully designed chairs made for everyday learning.",
        image: "/categories/7.png",
    },
    {
        id: 10,
        name: "Bar Stool & Cafe Chair",
        title: "Elevate",
        highlight: "Your Bar Area",
        description:
            "Add a stylish and functional touch to your counter or bar area with contemporary bar chairs.",
        image: "/categories/1.webp",
    },
    {
        id: 11,
        name: "Staff Chair",
        title: "Transform",
        highlight: "Your Workspace",
        description:
            "Explore comfortable staff chairs designed to create a professional, supportive, and productive workspace.",
        image: "/categories/6.png",
    },
    {
        id: 12,
        name: "Office Chair",
        title: "Transform",
        highlight: "Your Office",
        description:
            "Discover ergonomic office chairs that combine comfort, functionality, and contemporary design for modern workspaces.",
        image: "/categories/5.webp",
    },
    {
        id: 13,
        name: "Gaming Chair",
        title: "Upgrade",
        highlight: "Your Gaming Setup",
        description:
            "Experience superior comfort and support with gaming chairs designed for long gaming sessions and immersive gameplay.",
        image: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491683-gaming-chair-with-adjustable-armrest-Green-1b77.webp",
    },
    {
        id: 14,
        name: "Study Chair",
        title: "Create",
        highlight: "Your Study Space",
        description:
            "Bring comfort and focus to your study area with thoughtfully designed chairs made for everyday learning.",
        image: "/categories/7.png",
    },
    {
        id: 15,
        name: "Bar Stool & Cafe Chair",
        title: "Elevate",
        highlight: "Your Bar Area",
        description:
            "Add a stylish and functional touch to your counter or bar area with contemporary bar chairs.",
        image: "/categories/1.webp",
    },
];

export default function CategoryShowcase() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeCategory = categories[activeIndex];

    return (
        <section className="w-full overflow-hidden bg-white py-10 md:py-12 lg:py-15">
            <div className="mx-auto grid min-h-[450px] w-[92%] max-w-7xl grid-cols-1 items-center lg:grid-cols-[44%_56%]">

                {/* ================= LEFT CONTENT ================= */}
                <div className="relative z-10 px-0 lg:pr-12">
                    <div
                        key={activeCategory.id}
                        className="animate-[categoryText_.7s_ease]"
                    >
                        {/* Heading */}
                        <h2 className="max-w-[700px] text-[42px] font-medium leading-[1.04] tracking-[-2px] text-[#111] sm:text-[50px] md:text-[56px] lg:text-[80px]">

                            <span className="font-serif font-normal italic">
                                {activeCategory.name}
                            </span>

                            <br />

                            <span className="font-sans font-medium not-italic text-2xl sm:text-4xl">
                                {activeCategory.title} {activeCategory.highlight}
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-2 max-w-[510px] text-[13px] leading-[1.45] text-[#4d4d4d] sm:text-[14px] md:text-[15px]">
                            {activeCategory.description}
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex items-center gap-4">
                            <Link href={"/products"}
                                className="rounded-full border border-[#222] bg-[#222] px-6 py-3 flex items-center gap-3 text-sm text-white transition-all duration-300 hover:bg-black"
                            >
                                Explore <ArrowRight size={15} />
                            </Link>

                            <button className="bg-white flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 border-black text-sm hover:bg-black hover:text-white">
                                Inquiry Now  <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>

                    {/* ================= PROGRESS ================= */}
                    <div className="mt-14 flex w-[190px] items-center gap-3">

                        <span className="text-[10px] text-[#777]">
                            {String(activeIndex + 1).padStart(2, "0")}
                        </span>

                        <div className="relative h-[1px] w-[105px] overflow-hidden bg-[#ddd]">
                            <div
                                className="absolute left-0 top-0 h-full bg-[#111] transition-all duration-500"
                                style={{
                                    width: `${((activeIndex + 1) /
                                        categories.length) *
                                        100
                                        }%`,
                                }}
                            />
                        </div>

                        <span className="text-[10px] text-[#999]">
                            {String(categories.length).padStart(2, "0")}
                        </span>

                    </div>
                </div>

                {/* ================= RIGHT SWIPER ================= */}
                <div className="relative mt-10 h-[430px] w-full sm:h-[500px] lg:mt-0 lg:h-[560px]">

                    <Swiper
                        modules={[Autoplay, EffectCreative]}
                        effect="creative"

                        creativeEffect={{
                            limitProgress: 1,

                            // Previous slide completely disappears
                            prev: {
                                translate: ["-100%", 0, 0],
                                scale: 0.8,
                                opacity: 0,
                            },

                            // Only next slide appears on right
                            next: {
                                translate: ["48%", 0, -100],
                                scale: 0.62,
                                opacity: 0.45,
                            },
                        }}

                        speed={900}
                        loop={true}
                        slidesPerView={1}

                        grabCursor={true}
                        resistance={true}
                        resistanceRatio={0.65}

                        watchSlidesProgress={true}

                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}

                        className="category-swiper !h-full !w-full !overflow-visible"
                    >

                        {categories.map((category) => (
                            <SwiperSlide
                                key={category.id}
                                className="!flex !h-full !w-full !items-center !justify-center !overflow-visible"
                            >
                                <div className="relative flex h-full w-full items-center justify-center">

                                    {/* PRODUCT SHADOW */}
                                    <div
                                        className="pointer-events-none absolute bottom-[80px] left-1/2 z-0 h-[30px] w-[50%] -translate-x-1/2 rounded-full bg-black/[0.07] blur-[18px]"
                                    />

                                    {/* ACTIVE / NEXT PRODUCT */}
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        draggable="false"
                                        className="relative z-10 h-auto max-h-[420px] w-[84%] select-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.11)] sm:max-h-[475px] sm:w-[80%] lg:max-h-[510px] lg:w-[82%]"
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {/* NEXT ARROW */}
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next category"
                        className="group absolute bottom-[65px] right-1 z-30 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#d4d4d4] bg-white text-[#222] shadow-[0_5px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-x-1 hover:border-[#111] hover:bg-[#111] hover:text-white active:scale-90"
                    >
                        <ArrowRight
                            size={19}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-[2px]"
                        />
                    </button>


                    {/* HIDE ALL OTHER SLIDES */}

                </div>
            </div>

            {/* ================= MOBILE CATEGORY NAME ================= */}
            <div className="mt-2 flex justify-center lg:hidden">
                <span className="text-[11px] uppercase tracking-[2px] text-[#777]">
                    {activeCategory.name}
                </span>
            </div>

        </section>
    );
}