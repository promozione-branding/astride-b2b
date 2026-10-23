"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
gsap.registerPlugin(ScrollTrigger);

export default function Exhibition() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);
    const decorRef = useRef([]);

    const exhibitions = [
        {
            id: 1,
            name: "INDEXPLUS 2026",
            cards: [
                {
                    image: "/ASTRIDE at INDEXPLUS 2026 (1).png",
                    title: "INDEXPLUS 2026",
                    subtitle: "EXHIBITIONS",
                },
                {
                    image: "/exhibition/1.png",
                    title: "Explore Our Seating",
                    subtitle: "PRODUCT SHOWCASE",
                },
                {
                    image: "/exhibition/2.jpg",
                    title: "Building Connections",
                    subtitle: "MEET & CONNECT",
                },
                {
                    image: "/exhibition/3.png",
                    title: "See It. Feel It.",
                    subtitle: "EXPERIENCE",
                    description:
                        "Experience Astride seating solutions in a real exhibition environment.",
                },
            ],
        },
        {
            id: 2,
            name: "EXHIBITION 2",
            cards: [
                {
                    image: "/exhibition/5.png",
                    title: "Exhibition Highlights",
                    subtitle: "EXHIBITIONS",
                },
                {
                    image: "/exhibition/6.jpg",
                    title: "Explore Our Collection",
                    subtitle: "PRODUCT SHOWCASE",
                },
                {
                    image: "/exhibition/7.jpg",
                    title: "Connecting With Visitors",
                    subtitle: "MEET & CONNECT",
                },
                {
                    image: "/exhibition/8.jpg",
                    title: "Discover Astride",
                    subtitle: "EXPERIENCE",
                    description:
                        "Discover our latest seating innovations and exhibition highlights.",
                },
            ],
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ----------------------------------
               INITIAL STATES
            ---------------------------------- */

            gsap.set(headerRef.current, {
                y: 50,
                opacity: 0,
            });

            gsap.set(cardsRef.current, {
                y: 70,
                opacity: 0,
                scale: 0.96,
            });

            gsap.set(decorRef.current, {
                opacity: 0,
                scale: 0.8,
            });

            /* ----------------------------------
               ENTRANCE ANIMATION
            ---------------------------------- */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                    once: true,
                },
            });

            tl.to(headerRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            })

                .to(
                    decorRef.current,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.5"
                )

                .to(
                    cardsRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.14,
                        ease: "power3.out",
                    },
                    "-=0.65"
                );

            /* ----------------------------------
               PARALLAX
            ---------------------------------- */

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.to(card, {
                    yPercent:
                        index === 0
                            ? -3
                            : index === 1
                                ? -6
                                : index === 2
                                    ? -4
                                    : -7,

                    ease: "none",

                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            });

            /* ----------------------------------
               DECOR PARALLAX
            ---------------------------------- */

            decorRef.current.forEach((item, index) => {
                if (!item) return;

                gsap.to(item, {
                    x: index % 2 === 0 ? 25 : -25,
                    y: index % 2 === 0 ? -20 : 20,
                    ease: "none",

                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    },
                });
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    /* ----------------------------------
       HOVER
    ---------------------------------- */

    const handleEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.045,
            duration: 0.6,
            ease: "power3.out",
        });
    };

    const handleLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
        });
    };

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-white
                py-12
                sm:py-16
            "
        >
            {/* =================================
                BACKGROUND
            ================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-white
                    via-white
                    to-[#f7faf6]
                "
            />

            {/* LEFT GREEN GLOW */}

            <div
                ref={(el) => {
                    if (el) decorRef.current[0] = el;
                }}
                className="
                    pointer-events-none
                    absolute
                    -left-[180px]
                    top-[-180px]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#8ca887]/15
                    blur-3xl
                "
            />

            {/* RIGHT GREEN GLOW */}

            <div
                ref={(el) => {
                    if (el) decorRef.current[1] = el;
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-[160px]
                    top-[20%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#8ca887]/15
                    blur-3xl
                "
            />

            {/* =================================
                CONTAINER
            ================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1440px]
                    px-5
                    sm:px-8
                "
            >
                {/* =================================
                    HEADER
                ================================= */}

                <header
                    ref={headerRef}
                    className="
                        relative
                        z-10
                        mb-7
                        text-center
                        sm:mb-9
                    "
                >
                    <h2
                        className="
                            m-0
                            text-[clamp(2.6rem,4vw,5rem)]
                            font-black
                            leading-[0.9]
                            tracking-[-0.06em]
                            text-[#111]
                        "
                    >
                        ASTRIDE AT

                        <span className="block text-[#1c4b42]">
                            EXHIBITIONS
                        </span>
                    </h2>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-center
                            gap-3
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-[#1b2a26]
                            sm:gap-5
                            sm:text-xs
                            sm:tracking-[0.28em]
                        "
                    >
                        <span>MEET</span>

                        <span className="size-[6px] rounded-full bg-[#b4692b]" />

                        <span>EXPERIENCE</span>

                        <span className="size-[6px] rounded-full bg-[#b4692b]" />

                        <span>DISCOVER</span>
                    </div>

                    <div className="mx-auto mt-4 h-[3px] w-[60px] rounded-full bg-[#b4692b]" />
                </header>

                {/* =================================
                    EXHIBITION GRID
                ================================= */}


                {/* =================================
    EXHIBITION SWIPER
================================= */}

                <div className="relative z-10">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={30}
                        speed={900}
                        loop={exhibitions.length > 1}
                        grabCursor={true}
                        autoHeight={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".exhibition-prev",
                            nextEl: ".exhibition-next",
                        }}
                        pagination={{
                            el: ".exhibition-pagination",
                            clickable: true,
                        }}
                        className="exhibition-swiper"
                    >
                        {exhibitions.map((exhibition) => (
                            <SwiperSlide key={exhibition.id}>

                                <div
                                    className="
                        grid
                        grid-cols-1
                        gap-4
                        lg:grid-cols-[1.7fr_0.72fr_0.72fr]
                        lg:grid-rows-[240px_240px]
                        lg:gap-5
                    "
                                >
                                    {exhibition.cards.map((card, index) => (
                                        <div
                                            key={index}
                                            className={`
                                group
                                relative
                                overflow-hidden
                                bg-[#e9e0d5]
                                shadow-[0_18px_35px_rgba(17,17,17,0.08)]
                                rounded-[22px]
                                lg:rounded-[25px]

                                ${index === 0
                                                    ? "min-h-[390px] lg:row-span-2 lg:min-h-0 lg:rounded-[30px]"
                                                    : ""
                                                }

                                ${index === 1
                                                    ? "min-h-[220px] lg:col-start-2 lg:row-start-1 lg:min-h-0"
                                                    : ""
                                                }

                                ${index === 2
                                                    ? "min-h-[220px] lg:col-start-2 lg:row-start-2 lg:min-h-0"
                                                    : ""
                                                }

                                ${index === 3
                                                    ? "min-h-[390px] lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:min-h-0"
                                                    : ""
                                                }
                            `}
                                        >
                                            {/* IMAGE */}
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                onMouseEnter={handleEnter}
                                                onMouseLeave={handleLeave}
                                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    object-top
                                    transition-transform
                                    duration-700
                                    will-change-transform
                                "
                                            />

                                            {/* OVERLAY */}
                                            {index !== 0 && (
                                                <>
                                                    <div
                                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/60
                                            via-black/10
                                            to-transparent
                                        "
                                                    />

                                                    {/* TEXT */}
                                                    <div
                                                        className="
                                            pointer-events-none
                                            absolute
                                            bottom-5
                                            left-4
                                            right-4
                                            z-10
                                        "
                                                    >
                                                        <p
                                                            className="
                                                m-0
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                tracking-[0.16em]
                                                text-white/80
                                            "
                                                        >
                                                            {card.subtitle}
                                                        </p>

                                                        <h3
                                                            className={`
                                                mt-1
                                                font-bold
                                                leading-tight
                                                text-white
                                                ${index === 3
                                                                    ? "text-[18px]"
                                                                    : "text-[15px]"
                                                                }
                                            `}
                                                        >
                                                            {card.title}
                                                        </h3>

                                                        {card.description && (
                                                            <p
                                                                className="
                                                    mt-1
                                                    text-[10px]
                                                    leading-[1.4]
                                                    text-white/80
                                                "
                                                            >
                                                                {card.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* =================================
        CUSTOM SWIPER CONTROLS
    ================================= */}

                    <div
                        className="
            relative
            z-20
            mt-8
            flex
            items-center
            justify-center
            gap-6
        "
                    >
                        {/* PREVIOUS */}
                        <button
                            type="button"
                            aria-label="Previous exhibition"
                            className="
                exhibition-prev
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#1c4b42]
                text-[#1c4b42]
                transition-all
                duration-300
                hover:bg-[#1c4b42]
                hover:text-white
            "
                        >
                            ←
                        </button>

                        {/* PAGINATION */}
                        <div className="exhibition-pagination !w-auto" />

                        {/* NEXT */}
                        <button
                            type="button"
                            aria-label="Next exhibition"
                            className="
                exhibition-next
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#1c4b42]
                text-[#1c4b42]
                transition-all
                duration-300
                hover:bg-[#1c4b42]
                hover:text-white
            "
                        >
                            →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}