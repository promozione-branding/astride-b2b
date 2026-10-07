"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function CategorySlider() {
    const categories = [
        {
            id: 1,
            name: "Staff Chair",
            title: "Transform",
            highlight: "Your Workspace",
            description:
                "Explore comfortable staff chairs designed to create a professional, supportive, and productive workspace.",
            image: "/categories/Modern Black Ergonomic Chair Showcase (1).png",
        },
        {
            id: 2,
            name: "Office Chair",
            title: "Transform",
            highlight: "Your Office",
            description:
                "Discover ergonomic office chairs that combine comfort, functionality, and contemporary design for modern workspaces.",
            image: "/categories/Minimalist Ergonomic Office Chair Showcase (1).png",
        },
        {
            id: 3,
            name: "Gaming Chair",
            title: "Upgrade",
            highlight: "Your Gaming Setup",
            description:
                "Experience superior comfort and support with gaming chairs designed for long gaming sessions and immersive gameplay.",
            image: "/categories/Minimalist Black Ergonomic Chair (1).png",
        },
        {
            id: 5,
            name: "Bar Stool & Cafe Chair",
            title: "Elevate",
            highlight: "Your Bar Area",
            description:
                "Add a stylish and functional touch to your counter or bar area with contemporary bar chairs.",
            image: "/categories/Modern Black Leather Bar Stool (1).png",
        },
        {
            id: 4,
            name: "Study Chair",
            title: "Create",
            highlight: "Your Study Space",
            description:
                "Bring comfort and focus to your study area with thoughtfully designed chairs made for everyday learning.",
            image: "/categories/Modern Black Ergonomic Chair Showcase (1).png",
        },
    ];

    return (
        <section className="w-full bg-white px-6 py-12 md:px-12 lg:px-24">

            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-[36px] font-semibold leading-tight tracking-[-1.5px] text-[#071a3d] md:text-[40px]">
                    Our categories
                </h2>

                <p className="mt-2 text-[17px] tracking-[0.5px] text-[#777]">
                    Lots of new products and product collections
                </p>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={800}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                className="category-button"
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <Link href={"/products"} className="group flex justify-center">

                            <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full">

                                {/* Image */}
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/15" />

                                {/* Category Name */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="rounded-full bg-white px-6 py-2.5 text-[18px] font-semibold text-[#071a3d] shadow-sm transition-all duration-300 group-hover:px-7"
                                    >
                                        {category.name}
                                    </span>
                                </div>

                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Hide navigation buttons */}
            <style jsx global>{`
                .category-button .swiper-button-next,
                .category-button .swiper-button-prev {
                    display: none;
                }
            `}</style>

        </section>
    );
}