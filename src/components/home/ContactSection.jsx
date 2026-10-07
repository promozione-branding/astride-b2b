"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiMail,
    FiPhone,
    FiMapPin,
} from "react-icons/fi";

export default function ContactSection() {
    return (
        <section className="relative overflow-hidden bg-[#f3f0e9] px-5 py-10 sm:px-8 lg:px-10 lg:py-16">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-black/[0.05]" />
            <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-black/[0.05]" />

            <div className="relative z-10 mx-auto max-w-[1450px]">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
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
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#171717] p-7 text-white sm:p-9 lg:p-10"
                    >
                        {/* Background arc */}

                        <div
                            className="pointer-events-none absolute -bottom-[180px] -right-[180px] h-[500px] w-[500px] rounded-full border border-white/[0.08]"
                        />

                        <div
                            className="pointer-events-none absolute -bottom-[110px] -right-[110px] h-[350px] w-[350px] rounded-full border border-white/[0.05]"
                        />

                        {/* Small label */}

                        <p className="relative z-10 text-[10px] uppercase tracking-[0.22em] text-white/45">
                            ASTRIDE
                        </p>

                        {/* Heading */}

                        <h3
                            className="relative z-10 mt-8 max-w-[350px] font-serif text-[38px] leading-[1] tracking-[-1.5px] text-white sm:text-[44px]"
                        >
                            We’re here
                            <br />
                            to help.
                        </h3>

                        {/* Description */}

                        <p className="relative z-10 mt-6 max-w-[330px] text-[12px] leading-[1.8] text-white/55">
                            Whether you need help choosing a chair or have a
                            question about an existing order, our team is
                            ready to assist.
                        </p>

                        {/* Contact details */}

                        <div className="relative z-10 mt-12 space-y-6">

                            <ContactInfo
                                icon={<FiMail size={16} />}
                                label="Email"
                                value="hello@astride.in"
                            />

                            <ContactInfo
                                icon={<FiPhone size={16} />}
                                label="Phone"
                                value="+91 00000 00000"
                            />

                            <ContactInfo
                                icon={<FiMapPin size={16} />}
                                label="Visit Us"
                                value="New Delhi, India"
                            />

                        </div>

                        {/* =====================================================
        PRODUCT IMAGE
    ===================================================== */}

                        <motion.img
                            src="/5.png"
                            alt="ASTRIDE Chair"
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.25,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            className="pointer-events-none absolute bottom-[-10px] right-[-5px] z-[2] w-[190px] object-contain sm:w-[220px] scale-x-[-1] lg:bottom-[0px] lg:right-[-5px] lg:w-[260px]"
                        />

                        {/* Soft image glow */}

                        <div
                            className="pointer-events-none absolute bottom-[30px] right-[40px] z-[1] h-[180px] w-[180px] rounded-full bg-white/[0.035] blur-3xl"
                        />

                        {/* Bottom text */}

                        <div
                            className="absolute bottom-8 left-7 right-7 z-10 flex items-center justify-between sm:left-9 sm:right-9"
                        >
                            <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                                Premium seating
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                                ASTRIDE
                            </span>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
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
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="rounded-[28px] border border-black/[0.07] bg-white/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8 lg:p-10"
                    >

                        <div className="mb-8 flex items-start justify-between">

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#999]">
                                    Send A Message
                                </p>

                                <h3 className="mt-2 text-[24px] font-medium tracking-[-0.8px] text-[#171717]">
                                    Tell us how we can help.
                                </h3>
                            </div>

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white">
                                <FiArrowUpRight size={18} />
                            </div>

                        </div>

                        <form className="space-y-7">

                            {/* Name + Phone */}

                            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                                <InputField
                                    label="Your Name"
                                    placeholder="Enter your name"
                                    type="text"
                                />

                                <InputField
                                    label="Phone Number"
                                    placeholder="Enter your phone"
                                    type="tel"
                                />

                            </div>

                            {/* Email */}

                            <InputField
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                            />

                            {/* Subject */}

                            <div className="relative">

                                <label className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#888]">
                                    What can we help with?
                                </label>

                                <select
                                    defaultValue=""
                                    className="w-full appearance-none border-b border-black/15 bg-transparent py-3 pr-8 text-[13px] text-[#222] outline-none transition-colors focus:border-black"
                                >
                                    <option value="" disabled>
                                        Select an option
                                    </option>
                                    <option>Product Enquiry</option>
                                    <option>Order Support</option>
                                    <option>Warranty</option>
                                    <option>Delivery</option>
                                    <option>Bulk / Corporate Enquiry</option>
                                    <option>Other</option>
                                </select>

                                <div className="pointer-events-none absolute bottom-3 right-1">
                                    <span className="text-[10px] text-[#777]">
                                        ↓
                                    </span>
                                </div>

                            </div>

                            {/* Message */}

                            <div>

                                <label className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#888]">
                                    Message
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Tell us a little about what you need..."
                                    className="w-full resize-none border-b border-black/15 bg-transparent py-3 text-[13px] text-[#222] outline-none placeholder:text-[#aaa] transition-colors focus:border-black"
                                />

                            </div>

                            {/* Submit */}

                            <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">

                                <p className="max-w-[280px] text-[10px] leading-[1.6] text-[#999]">
                                    By submitting this form, you agree to be
                                    contacted by the ASTRIDE team.
                                </p>

                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-4 rounded-full bg-[#171717] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-black sm:w-auto"
                                >
                                    Send Enquiry

                                    <span
                                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45"
                                    >
                                        <FiArrowUpRight size={14} />
                                    </span>

                                </button>

                            </div>

                        </form>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}


/* ============================================================
   INPUT FIELD
============================================================ */

function InputField({
    label,
    placeholder,
    type = "text",
}) {
    return (
        <div>

            <label className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-black/80">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full border-b border-black/15 bg-transparent py-3 text-[13px] text-[#222] outline-none placeholder:text-black/60 transition-colors focus:border-black"
            />

        </div>
    );
}


/* ============================================================
   CONTACT INFO
============================================================ */

function ContactInfo({
    icon,
    label,
    value,
}) {
    return (
        <div className="flex items-center gap-4">

            <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
            >
                {icon}
            </div>

            <div>

                <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                    {label}
                </p>

                <p className="mt-1 text-[12px] text-white/75">
                    {value}
                </p>

            </div>

        </div>
    );
}