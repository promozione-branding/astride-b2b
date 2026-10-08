"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Exhibition() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);
    const decorRef = useRef([]);

    const boothImage =
        "https://scontent-del2-2.xx.fbcdn.net/v/t39.30808-6/768546163_943147022136160_3565381334172006970_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s997vfEInyoQ7kNvwEaplDd&_nc_oc=AdoJGGrxRVFjXtwU4XCpmdirAoKBy6egNACgLeF3QjaMDaxYiVRSMbAKBxt2PeOE44E&_nc_zt=23&_nc_ht=scontent-del2-2.xx&_nc_gid=OK_MsKvwVZoXaAM2sKg38g&_nc_ss=7b2a8&oh=00_AQP8A114oM2gko4pNUKcbjn-0oxOA65DeRn-CyGgM-xsjA&oe=6ACD36BD";

    const cards = [
        {
            image: boothImage,
            title: "EXHIBITIONS",
            description:
                "Showcasing innovative seating solutions across leading industry platforms.",
            large: true,
        },
        {
            image: "/exhibition/1.png",
            title: "PRODUCT SHOWCASE",
            description: "Explore our seating solutions.",
        },
        {
            image: "/exhibition/2.jpg",
            title: "MEET & CONNECT",
            description: "Building meaningful industry connections.",
        },
        {
            image: "/exhibition/3.png",
            title: "EXPERIENCE",
            description: "See it. Feel it. Experience Astride.",
            tall: true,
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

                        <span className="block text-[#b4692b]">
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

                <div
                    className="
                        relative
                        z-10
                        grid
                        grid-cols-1
                        gap-4

                        lg:grid-cols-[1.7fr_0.72fr_0.72fr]
                        lg:grid-rows-[240px_240px]
                        lg:gap-5
                    "
                >
                    {/* =================================
                        CARD 1 — LARGE
                    ================================= */}

                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[0] = el;
                        }}
                        className="
                            group
                            relative
                            min-h-[390px]
                            overflow-hidden
                            rounded-[26px]
                            bg-[#e9e0d5]
                            shadow-[0_22px_45px_rgba(17,17,17,0.09)]

                            lg:row-span-2
                            lg:min-h-0
                            lg:rounded-[30px]
                        "
                    >
                        <img
                            src={cards[0].image}
                            alt="Astride exhibition booth"
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                            className="
                                absolute
                                inset-[-3%]
                                size-[106%]
                                object-cover
                                will-change-transform
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/30
                                via-transparent
                                to-black/[0.02]
                            "
                        />

                        {/* INFO CARD */}

                        <div
                            className="
                                absolute
                                bottom-5
                                left-5
                                right-5
                                z-10
                                flex
                                items-center
                                gap-3
                                rounded-[18px]
                                border
                                border-white/50
                                bg-white/[0.94]
                                p-3
                                shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                                backdrop-blur-md
                                sm:left-6
                                sm:right-auto
                                sm:max-w-[440px]
                                sm:p-4
                            "
                        >
                            {/* ICON */}

                            <div
                                className="
                                    grid
                                    size-[48px]
                                    shrink-0
                                    place-items-center
                                    rounded-[13px]
                                    bg-gradient-to-br
                                    from-[#b4692b]
                                    to-[#a45c21]
                                "
                            >
                                <span
                                    className="
                                        relative
                                        size-[22px]
                                        rounded-[5px]
                                        border-2
                                        border-white
                                    "
                                />
                            </div>

                            <div>
                                <h3
                                    className="
                                        m-0
                                        text-[18px]
                                        font-black
                                        tracking-[-0.04em]
                                        text-[#111]
                                        sm:text-[22px]
                                    "
                                >
                                    EXHIBITIONS
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        mb-0
                                        max-w-[310px]
                                        text-[10px]
                                        leading-[1.45]
                                        text-[#30453f]
                                        sm:text-xs
                                    "
                                >
                                    Showcasing innovative seating solutions
                                    across leading industry platforms.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =================================
                        CARD 2 — SMALL TOP
                    ================================= */}

                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[1] = el;
                        }}
                        className="
                            group
                            relative
                            min-h-[220px]
                            overflow-hidden
                            rounded-[22px]
                            bg-[#0c2d25]
                            shadow-[0_18px_35px_rgba(17,17,17,0.08)]

                            lg:col-start-2
                            lg:row-start-1
                            lg:min-h-0
                            lg:rounded-[25px]
                        "
                    >
                        <img
                            src={cards[1].image}
                            alt="Astride product showcase"
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                            className="
                                absolute
                                inset-[-3%]
                                size-[106%]
                                object-cover
                                will-change-transform
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/55
                                via-black/10
                                to-transparent
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-4
                                left-4
                                right-4
                                z-10
                            "
                        >
                            <p
                                className="
                                    m-0
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.16em]
                                    text-white/75
                                "
                            >
                                PRODUCT SHOWCASE
                            </p>

                            <h3
                                className="
                                    mt-1
                                    text-[15px]
                                    font-bold
                                    leading-tight
                                    text-white
                                "
                            >
                                Explore Our Seating
                            </h3>
                        </div>
                    </div>

                    {/* =================================
                        CARD 3 — SMALL BOTTOM
                    ================================= */}

                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[2] = el;
                        }}
                        className="
                            group
                            relative
                            min-h-[220px]
                            overflow-hidden
                            rounded-[22px]
                            bg-[#ddd]
                            shadow-[0_18px_35px_rgba(17,17,17,0.08)]

                            lg:col-start-2
                            lg:row-start-2
                            lg:min-h-0
                            lg:rounded-[25px]
                        "
                    >
                        <img
                            src={cards[2].image}
                            alt="Astride exhibition visitors"
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                            className="
                                absolute
                                inset-[-3%]
                                size-[106%]
                                object-cover
                                will-change-transform
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/55
                                via-black/10
                                to-transparent
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-4
                                left-4
                                right-4
                                z-10
                            "
                        >
                            <p
                                className="
                                    m-0
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.16em]
                                    text-white/75
                                "
                            >
                                MEET & CONNECT
                            </p>

                            <h3
                                className="
                                    mt-1
                                    text-[15px]
                                    font-bold
                                    leading-tight
                                    text-white
                                "
                            >
                                Building Connections
                            </h3>
                        </div>
                    </div>

                    {/* =================================
                        CARD 4 — TALL RIGHT
                    ================================= */}

                    <div
                        ref={(el) => {
                            if (el) cardsRef.current[3] = el;
                        }}
                        className="
                            group
                            relative
                            min-h-[390px]
                            overflow-hidden
                            rounded-[22px]
                            bg-[#ddd]
                            shadow-[0_18px_35px_rgba(17,17,17,0.08)]

                            lg:col-start-3
                            lg:row-start-1
                            lg:row-span-2
                            lg:min-h-0
                            lg:rounded-[25px]
                        "
                    >
                        <img
                            src={cards[3].image}
                            alt="Astride exhibition experience"
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                            className="
                                absolute
                                inset-[-3%]
                                size-[106%]
                                object-cover
                                will-change-transform
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/60
                                via-black/5
                                to-transparent
                            "
                        />

                        <div
                            className="
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
                                EXPERIENCE
                            </p>

                            <h3
                                className="
                                    mt-1
                                    text-[18px]
                                    font-black
                                    leading-tight
                                    text-white
                                "
                            >
                                See It. Feel It.
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-[10px]
                                    leading-[1.4]
                                    text-white/80
                                "
                            >
                                Experience Astride seating solutions
                                in a real exhibition environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}