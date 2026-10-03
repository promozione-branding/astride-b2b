"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
    const sectionRef = useRef(null);
    const chairRef = useRef(null);
    const modernRef = useRef(null);
    const chairTextRef = useRef(null);
    const valuesRef = useRef(null);
    const paragraphRef = useRef(null);
    const badgesRef = useRef(null);

    const fullText =
        "We design and present a premium collection of chairs with the best comfort, high quality, and contemporary design.";

    const [typedText, setTypedText] = useState("");

    /*
    |--------------------------------------------------------------------------
    | Typing Effect
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        let interval;
        let timeout;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let index = 0;

                    timeout = setTimeout(() => {
                        interval = setInterval(() => {
                            if (index < fullText.length) {
                                setTypedText(fullText.slice(0, index + 1));
                                index++;
                            } else {
                                clearInterval(interval);
                            }
                        }, 35);
                    }, 500);

                    observer.disconnect();
                }
            },
            {
                threshold: 0.35,
            }
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | GSAP Scroll Animation
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(chairRef.current, {
                y: 500,
                opacity: 0,
                scale: 0.88,
            });

            gsap.set(modernRef.current, {
                x: -180,
                opacity: 0,
            });

            gsap.set(chairTextRef.current, {
                x: -120,
                opacity: 0,
            });

            gsap.set(valuesRef.current, {
                x: 180,
                opacity: 0,
            });

            gsap.set(paragraphRef.current, {
                x: -100,
                opacity: 0,
            });

            gsap.set(".about-badge", {
                x: 100,
                opacity: 0,
            });

            /*
            |--------------------------------------------------------------------------
            | Main Timeline
            |--------------------------------------------------------------------------
            */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Chair comes from bottom
            tl.to(chairRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.35,
                ease: "power4.out",
            });

            // Left title
            tl.to(
                modernRef.current,
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.9"
            );

            tl.to(
                chairTextRef.current,
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.7"
            );

            // Right title
            tl.to(
                valuesRef.current,
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.7"
            );

            // Paragraph
            tl.to(
                paragraphRef.current,
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );

            // Badges
            tl.to(
                ".about-badge",
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                "-=0.4"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full overflow-hidden bg-[#f1f3f2] py-12 lg:min-h-[900px] lg:pb-16 pt-0"
        >
            {/* Background subtle gradient */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-white/40 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#dfe4df]/50 blur-[120px]" />
            </div>

            <div className="relative mx-auto h-full min-h-[760px] w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">

                {/* =========================================================
                    TOP LEFT PARAGRAPH
                ========================================================== */}
                <div
                    ref={paragraphRef}
                    className="absolute left-5 top-8 z-30 w-[270px] sm:left-10 sm:w-[310px] lg:left-12 lg:top-40 lg:w-[350px]"
                >
                    <p className="font-sans text-[15px] font-medium leading-[1.65] tracking-wide text-[#142322] sm:text-[16px] lg:text-[17px]">
                        {typedText}
                        <span className="ml-1 inline-block h-[18px] w-[2px] animate-pulse bg-[#142322] align-middle" />
                    </p>
                </div>

                {/* =========================================================
                    VALUES
                ========================================================== */}
                <div
                    ref={valuesRef}
                    className="absolute right-4 top-12 z-30 sm:right-8 lg:right-20 lg:top-45"
                >
                    <h2
                        className="
                        font-sans
                        text-[62px]
                        font-[900]
                        leading-[0.78]
                        tracking-[-0.065em]
                        text-[#102321]
                        sm:text-[85px]
                        md:text-[105px]
                        lg:text-[135px]
                        xl:text-[155px]
                    "
                    >
                        VALUES
                    </h2>
                </div>

                {/* =========================================================
                    CHAIR
                ========================================================== */}
                <div
                    ref={chairRef}
                    className="
                        absolute
                        left-1/2
                        top-[115px]
                        z-10
                        w-[500px]
                        -translate-x-1/2
                        sm:top-[125px]
                        sm:w-[600px]
                        md:w-[700px]
                        lg:top-[90px]
                        lg:w-[750px]
                        xl:w-[800px]
                    "
                >
                    <div className="relative aspect-[1/1] w-full">
                        <Image
                            src="/categories/1.webp"
                            alt="Modern Chair"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 600px, 800px"
                        />
                    </div>
                </div>

                {/* =========================================================
                    MODERN CHAIR TITLE
                ========================================================== */}
                <div
                    ref={modernRef}
                    className="
                        absolute
                        left-0
                        z-20
                        lg:left-0
                        lg:bottom-30
                    "
                >
                    <h1
                        className="
                        font-sans
                        text-[75px]
                        font-[950]
                        leading-[0.78]
                        tracking-[-0.065em]
                        text-[#102321]
                        sm:text-[100px]
                        md:text-[120px]
                        lg:text-[140px]
                        xl:text-[160px]
                    "
                    >
                        MODERN
                    </h1>
                </div>

                <div
                    ref={chairTextRef}
                    className="
                        absolute
                        left-0
                        z-20
                       lg:bottom-0
                    "
                >
                    <h2
                        className="
                        font-sans
                        text-[75px]
                        font-[950]
                        leading-[0.78]
                        tracking-[-0.065em]
                        text-[#102321]
                        sm:text-[100px]
                        md:text-[120px]
                        lg:text-[140px]
                        xl:text-[160px]
                    "
                    >
                        CHAIR
                    </h2>
                </div>

                {/* =========================================================
                    BADGES
                ========================================================== */}
                <div
                    ref={badgesRef}
                    className="
                        absolute
                        right-4
                        z-30
                        flex
                        w-[185px]
                        flex-col
                        gap-4
                        sm:right-8
                        sm:w-[210px]
                        lg:right-8
                    bottom-10
                        lg:w-[220px]
                    "
                >
                    <motion.div
                        className="about-badge rounded-full bg-[#ffd8cc] px-5 py-3 text-center"
                        whileHover={{
                            scale: 1.05,
                            x: -5,
                        }}
                    >
                        <span className="font-sans text-[10px] font-bold tracking-wide text-[#1b2827] sm:text-[11px]">
                            PERSONALIZED FIRST
                        </span>
                    </motion.div>

                    <motion.div
                        className="about-badge rounded-full bg-[#b7ff20] px-5 py-3 text-center"
                        whileHover={{
                            scale: 1.05,
                            x: -5,
                        }}
                    >
                        <span className="font-sans text-[10px] font-bold tracking-wide text-[#1b2827] sm:text-[11px]">
                            SUSTAINABLE & ETHICAL
                        </span>
                    </motion.div>

                    <motion.div
                        className="about-badge rounded-full bg-white/80 px-5 py-3 text-center shadow-sm"
                        whileHover={{
                            scale: 1.05,
                            x: -5,
                        }}
                    >
                        <span className="font-sans text-[10px] font-bold tracking-wide text-[#1b2827] sm:text-[11px]">
                            COMFORT THAT LASTS
                        </span>
                    </motion.div>
                </div>

                {/* =========================================================
                    BOTTOM DECORATIVE LINE
                ========================================================== */}
                <div className="absolute bottom-5 left-0 right-0 px-5 sm:px-10">
                    <div className="h-[1px] w-full bg-[#102321]/15" />
                </div>
            </div>
        </section>
    );
}