"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function FurnitureRules() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f8f7f3] px-5 py-8 sm:px-8 lg:px-7 lg:py-9">

            {/* Subtle paper texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
            radial-gradient(
              circle at 20% 20%,
              rgba(120,110,95,.16) 0.7px,
              transparent 0.8px
            )
          `,
                    backgroundSize: "8px 8px",
                }}
            />

            <div className="relative mx-auto max-w-[1365px]">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative z-20 mb-3 text-[27px] font-bold leading-none tracking-[-0.7px] text-[#171717] sm:text-[29px]"
                >
                    Rules for choosing furniture
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[40%_60%] lg:gap-5">
                    <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[650px]">
                        <motion.svg
                            viewBox="0 0 520 580"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                rotate: -8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 1.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="absolute left-1/2 top-8 z-[1] h-[480px] w-[430px] -translate-x-1/2 sm:top-10 sm:h-[550px] sm:w-[480px] lg:left-0 lg:translate-x-0"
                        >
                            <motion.path
                                fill="#E8E2D8"
                                d="
                  M285 15
                  C260 75 268 111 319 139
                  C366 164 438 183 452 230
                  C464 273 421 303 370 316
                  C304 333 247 348 233 394
                  C219 438 258 478 300 507
                  C335 531 339 558 311 575
                  L164 575
                  C176 539 172 507 132 474
                  C88 438 38 411 25 365
                  C11 313 49 275 91 245
                  C137 213 180 191 180 149
                  C180 112 145 85 126 60
                  C111 40 118 21 131 0
                  Z
                "
                                animate={{
                                    d: [
                                        `
                    M285 15
                    C260 75 268 111 319 139
                    C366 164 438 183 452 230
                    C464 273 421 303 370 316
                    C304 333 247 348 233 394
                    C219 438 258 478 300 507
                    C335 531 339 558 311 575
                    L164 575
                    C176 539 172 507 132 474
                    C88 438 38 411 25 365
                    C11 313 49 275 91 245
                    C137 213 180 191 180 149
                    C180 112 145 85 126 60
                    C111 40 118 21 131 0
                    Z
                    `,
                                        `
                    M270 15
                    C247 70 255 109 309 139
                    C357 166 427 188 443 232
                    C459 277 414 305 362 322
                    C299 343 245 355 230 399
                    C217 442 253 479 296 510
                    C327 532 332 557 305 575
                    L158 575
                    C172 539 167 505 126 473
                    C81 438 32 410 20 365
                    C9 317 44 278 86 245
                    C131 210 173 188 173 148
                    C173 111 141 85 121 60
                    C105 39 112 20 126 0
                    Z
                    `,
                                    ],
                                    transition: {
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                    },
                                }}
                            />
                        </motion.svg>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="absolute left-1/2 top-[285px] z-[2] h-[135px] w-[430px] -translate-x-1/2 rotate-[7deg] rounded-[50%] bg-[#e8e2d8] sm:top-[350px] sm:h-[155px] sm:w-[520px] lg:left-0 lg:translate-x-0"
                        />

                        <motion.img
                            src="https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491682-gaming-chair-with-adjustable-armrest-White-3491.webp"
                            alt="Modern wooden chair"
                            initial={{
                                opacity: 0,
                                y: 80,
                                x: -25,
                                scale: 0.86,
                                rotate: -3,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                x: 0,
                                scale: 1,
                                rotate: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 1.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.015,
                                rotate: 0.5,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeOut",
                                },
                            }}
                            className="absolute left-1/2 top-[60px] z-[5] w-[330px] -translate-x-1/2 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.07)] sm:top-[75px] sm:w-[300px] lg:left-[70px] lg:translate-x-0"
                        />

                        <div className="absolute bottom-[25px] left-[20px] z-[6] h-[115px] w-[150px] sm:bottom-[45px] lg:left-[45px] lg:bottom-[65px]">

                            {[
                                "left-[8px] top-[18px] h-[17px] w-[25px]",
                                "left-[53px] top-[4px] h-[25px] w-[14px]",
                                "left-[84px] top-[30px] h-[17px] w-[25px]",
                                "left-[18px] top-[57px] h-[30px] w-[18px]",
                                "left-[64px] top-[67px] h-[18px] w-[28px]",
                                "left-[108px] top-[80px] h-[40px] w-[30px]",
                            ].map((classes, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{ once: false }}
                                    transition={{
                                        delay: 0.65 + index * 0.1,
                                        duration: 0.4,
                                        type: "spring",
                                    }}
                                    className={`
                    absolute
                    ${classes}
                    rounded-full
                    bg-[#a58e7e]
                    rotate-[-25deg]
                  `}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pt-1">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: false,
                                amount: 0.25,
                            }}
                        >

                            <motion.h3
                                variants={fadeUp}
                                className="max-w-[710px] text-[16px] font-bold leading-[1.45] text-[#171717] sm:text-[17px]"
                            >
                                Whether living on your own or with a family, your living room
                                is an important space.
                            </motion.h3>


                            <motion.p
                                variants={fadeUp}
                                className="mt-4 max-w-[710px] text-[14px] leading-[1.65] tracking-[0.1px] text-[#777] sm:text-[15px]"
                            >
                                This room is where your family spends time together, and it is
                                the room most of your guests will spend the majority of their
                                time in. Choosing furniture that creates a pleasant, welcoming
                                appearance while holding up against the wear and tear of
                                everyday life is the key in getting this space to work for
                                your needs.
                            </motion.p>


                            {/* =========================================
                  BULLETS
              ========================================= */}

                            <motion.ul
                                variants={containerVariants}
                                className="mt-5 flex flex-col gap-3.5"
                            >

                                {[
                                    "Choose items in a single color scheme and style",
                                    "Consider the area of the room",
                                    "Do not buy unnecessary pieces of furniture",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={fadeRight}
                                        className="flex items-center gap-2.5 text-[14px] text-[#777] sm:text-[15px]"
                                    >
                                        <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#f29a56]"
                                        />

                                        {item}
                                    </motion.li>
                                ))}

                            </motion.ul>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 60,
                                scale: 0.94,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="relative mt-7 h-[250px] w-full overflow-hidden rounded-[100px] bg-[#222] shadow-[0_18px_45px_rgba(0,0,0,0.06)] sm:h-[310px] sm:rounded-[150px] lg:h-[357px] lg:w-180 lg:rounded-[200px]"
                        >
                            {/* YouTube */}
                            <iframe
                                src="https://www.youtube.com/embed/1weP2jgyQrs?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1"
                                title="SØLREM furniture collection"
                                className="absolute inset-0 h-full w-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}