"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiPlus,
    FiMinus,
    FiArrowUpRight,
} from "react-icons/fi";

const faqs = [
    {
        id: "01",
        question: "Which ASTRIDE chair should I choose?",
        answer:
            "The right chair depends on how you use it, your preferred sitting position and the level of support you need. Explore our ergonomic, executive and everyday seating collections to find the right fit.",
    },
    {
        id: "02",
        question: "Are ASTRIDE chairs ergonomic?",
        answer:
            "Yes. Our ergonomic chairs are designed around everyday comfort, posture support and adjustability, helping you create a more comfortable working environment.",
    },
    {
        id: "03",
        question: "How long does delivery take?",
        answer:
            "Delivery timelines can vary depending on the product and your location. You will receive the relevant delivery information when placing your order.",
    },
    {
        id: "04",
        question: "Do ASTRIDE chairs come with a warranty?",
        answer:
            "Yes. Warranty coverage depends on the specific chair model. Please check the product details or contact our support team for the warranty applicable to your chair.",
    },
    {
        id: "05",
        question: "Can I return or exchange my chair?",
        answer:
            "Our return and exchange policy depends on the product and order conditions. Contact our support team with your order details and we will guide you through the process.",
    },
    {
        id: "06",
        question: "How can I contact ASTRIDE support?",
        answer:
            "You can contact our support team through the contact details provided on our website. Our team can assist with product questions, orders, delivery and after-sales support.",
    },
];

export default function FAQSection() {
    const [active, setActive] = useState(0);

    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="relative overflow-hidden bg-[#eeeae2]">

            {/* =====================================================
                BACKGROUND IMAGE
            ===================================================== */}

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/banner/4.png')",
                }}
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-[#eeeae2]/10" />

            {/* Left readability gradient */}
            <div
                className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-[#f4f0e8]/95 via-[#f4f0e8]/85 to-transparent"
            />

            {/* Bottom soft fade */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/[0.08] to-transparent"
            />

            {/* Decorative circle */}
            <div
                className="pointer-events-none absolute -left-[220px] top-[-220px] h-[550px] w-[550px] rounded-full border border-black/[0.05]"
            />

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">

                <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">

                    {/* =================================================
                        LEFT — FAQ
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -60,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative"
                    >
                        {/* Small label */}
                        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#777]">
                            Frequently Asked Questions
                        </p>

                        <h2
                            className="max-w-[520px] font-serif text-[44px] leading-[0.94] tracking-[-2px] text-[#171717] sm:text-[56px] lg:text-[66px]"
                        >
                            Everything you
                            <br />
                            need to know.
                        </h2>

                        <div
                            className="mt-5 overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/75 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.08)]"
                        >

                            {faqs.map((faq, index) => {
                                const isOpen = active === index;

                                return (
                                    <motion.div
                                        key={faq.id}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.1,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            delay: index * 0.06,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="border-b border-black/[0.08] last:border-b-0"
                                    >

                                        {/* QUESTION */}

                                        <button
                                            onClick={() =>
                                                toggleFAQ(index)
                                            }
                                            className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                                        >

                                            {/* Number */}

                                            <span
                                                className={`
                                                    flex
                                                    h-9
                                                    w-9
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    text-[10px]
                                                    tracking-[0.08em]
                                                    transition-all
                                                    duration-300
                                                    ${isOpen
                                                        ? "bg-[#171717] text-white"
                                                        : "bg-[#eeebe4] text-[#777]"
                                                    }
                                                `}
                                            >
                                                {faq.id}
                                            </span>

                                            {/* Question */}

                                            <span
                                                className="flex-1 text-[14px] font-medium tracking-[-0.2px] text-[#222] sm:text-[15px]"
                                            >
                                                {faq.question}
                                            </span>

                                            {/* Icon */}

                                            <span
                                                className={`
                                                    flex
                                                    h-9
                                                    w-9
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    transition-all
                                                    duration-300
                                                    ${isOpen
                                                        ? "border-[#171717] bg-[#171717] text-white"
                                                        : "border-black/15 text-[#222] group-hover:bg-black group-hover:text-white"
                                                    }
                                                `}
                                            >
                                                {isOpen ? (
                                                    <FiMinus size={14} />
                                                ) : (
                                                    <FiPlus size={14} />
                                                )}
                                            </span>

                                        </button>

                                        {/* ANSWER */}

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-6 pl-[68px] pr-8 sm:pl-[78px]">

                                                        <motion.p
                                                            initial={{
                                                                y: -8,
                                                            }}
                                                            animate={{
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                            }}
                                                            className="max-w-[560px] text-[12px] leading-[1.75] text-[#707070] sm:text-[13px]"
                                                        >
                                                            {faq.answer}
                                                        </motion.p>

                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </motion.div>
                                );
                            })}

                        </div>
                    </motion.div>

                    {/* =================================================
                        RIGHT — EMPTY SPACE / PRODUCT IMAGE AREA
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 70,
                            scale: 0.97,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative hidden min-h-[620px] lg:block"
                    >

                        {/* Product label */}

                        <div
                            className="absolute bottom-8 right-5 z-20 flex items-center gap-3 rounded-full border border-white/40 bg-white/50 px-4 py-2 backdrop-blur-md"
                        >
                            <span className="h-2 w-2 rounded-full bg-black" />

                            <span className="text-[10px] uppercase tracking-[0.18em] text-[#333]">
                                ASTRIDE Seating
                            </span>
                        </div>

                        {/* Decorative vertical line */}

                        <div
                            className="absolute right-0 top-10 h-40 w-px bg-black/10"
                        />

                    </motion.div>

                </div>

            </div>
        </section>
    );
}