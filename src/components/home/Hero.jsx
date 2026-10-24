
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  ArrowUpRight,
  Armchair,
  ShieldCheck,
  Settings,
  UsersRound,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
 
  {
    image: "/banner/bannerr5.webp",
    tag: "GAMING COLLECTION",
    tagColor: "#000000",
    title: "Designed for",
    titleColor: "#171717",
    highlight: "Every Workspace.",
    highlightColor: "#f39224",
    description:
      "Discover seating designed for comfort, focus, everyday performance.",
    descriptionColor: "#000000",
    featureColor: "#171717",
  },
   {
    image: "/banner/5.png",
    tag: "OFFICE COLLECTION",
    tagColor: "#ffffff",
    title: "Comfort Drives",
    titleColor: "#ffffff",
    highlight: "Better Work.",
    highlightColor: "#f39224",
    description:
      "Ergonomic seating solutions for modern workplaces.",
    descriptionColor: "#ffffff",
    featureColor: "#ffffff",
  },
];

const features = [
  {
    icon: Armchair,
    title: "Ergonomic",
    subtitle: "Design",
  },
  {
    icon: ShieldCheck,
    title: "Long Lasting",
    subtitle: "Durability",
  },
  {
    icon: Settings,
    title: "Premium",
    subtitle: "Quality",
  },
  {
    icon: UsersRound,
    title: "Ideal for",
    subtitle: "Workspaces",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate h-[80vh] min-h-[600px] max-h-[900px] w-full overflow-hidden bg-white sm:h-[95vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slide.image} className="h-full">
            {({ isActive }) => (
              <div className="relative h-full w-full overflow-hidden bg-white">
                {/* Background image with subtle zoom */}
                <div
                  className={`absolute inset-0 transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.tag} - ${slide.title.replace(
                      "<br />",
                      " "
                    )} ${slide.highlight}`}
                    fill
                    priority={slideIndex === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Soft gradient for left-side readability */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-white/25 via-white/10 to-transparent"
                />

                {/* Main content */}
                <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center px-6 sm:px-10 md:px-14  ">
                  <div
                    className={`w-full max-w-[580px] transition-all duration-1000 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {/* Collection tag */}
                    <p
                      style={{ color: slide.tagColor }}
                      className={`mb-5 text-xs font-semibold tracking-[0.25em] transition-all delay-200 duration-700 sm:text-sm ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                    >
                      {/* {slide.tag} */}
                    </p>

                    {/* Main heading */}
                    <h1
                      style={{ color: slide.titleColor }}
                      className={`text-4xl font-medium leading-[1.02] tracking-[-0.045em] transition-all delay-300 duration-1000 sm:text-5xl md:text-[48px] ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-10 opacity-0"
                      }`}
                    >
                      {slide.title.split("<br />").map((line, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))}

                     <span
  style={{ color: slide.highlightColor }}
  className="mt-1 block font-semibold"
>
  {slide.highlight.split("<br />").map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </React.Fragment>
  ))}
</span>
                    </h1>

                    {/* Description */}
                    <p
                      style={{ color: slide.descriptionColor }}
                      className={`mt-6 max-w-[390px] text-base leading-relaxed transition-all delay-500 duration-700 sm:text-lg ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* Features strip */}
                    <div
                      style={{ color: slide.featureColor }}
                      className={`mt-10 grid max-w-[440px] grid-cols-4 divide-x divide-current/25 transition-all delay-700 duration-700 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      {features.map(
                        ({ icon: Icon, title, subtitle }) => (
                          <div
                            key={title}
                            className="flex min-w-0 flex-col items-center justify-center px-1.5 text-center sm:px-0"
                          >
                            <Icon
                              size={29}
                              strokeWidth={1.5}
                              className="mb-2 h-6 w-6 sm:h-6 sm:w-6"
                            />

                            <span className="text-[10px] font-medium leading-tight sm:text-xs md:text-sm">
                              {title}
                            </span>

                            <span className="mt-0.5 text-[10px] leading-tight sm:text-xs md:text-sm">
                              {subtitle}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    {/* CTA button */}
                    <div
                      className={`mt-8 transition-all delay-[850ms] duration-700 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      <Link
                        href="/shop"
                        className="group inline-flex items-center gap-5 rounded-full bg-[#f39224] py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#df7c13] sm:py-2.5 sm:pl-8"
                      >
                        Explore Our Range

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#171717] transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight size={20} />
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
