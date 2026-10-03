"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiCheck,
    FiExternalLink,
    FiX,
} from "react-icons/fi";

/* ============================================================
   CERTIFICATE DATA
============================================================ */

const CERTS_DATA = [
    {
        title: "ISO 9001:2015",
        subtitle:
            "Quality management system for the manufacturing and supply of revolving chairs.",
        whyTitle: "WHY ASTRIDE IS BETTER THAN COMPETITORS?",
        whyPoints: [
            {
                title: "Standardized Quality",
                desc: "Unlike generic brands with volatile quality, Astride implements ISO-audited repeatable assembly lines.",
            },
            {
                title: "Defect-Free Guarantee",
                desc: "Our certified production workflow virtually eliminates component mismatches and visual flaws.",
            },
            {
                title: "Strict Quality Control",
                desc: "Every batch undergoes rigorous quality-gate tests before leaving our manufacturing unit.",
            },
            {
                title: "Traceable Supply Chain",
                desc: "Every nut, bolt, and cylinder is traceable back to certified premium tier-1 raw material suppliers.",
            },
            {
                title: "Continuous Audits",
                desc: "Annual external ISO audits ensure our manufacturing methods evolve with the latest engineering advancements.",
            },
        ],
        pdfUrl: "/Pdf/pdf_2.pdf",
        regNo: "Reg: 25EQQW45",
    },

    {
        title: "ANSI BIFMA X5.1",
        subtitle:
            "General-purpose office chair durability standard, 2017 (R2022).",
        whyTitle: "WHY ASTRIDE IS BETTER THAN COMPETITORS?",
        whyPoints: [
            {
                title: "Ten-Year Durability",
                desc: "Astride swivels and tilts withstand 120,000+ extreme load cycles vs. competitors' quick wear.",
            },
            {
                title: "Heavyweight Safety",
                desc: "Armrests, backrests, and premium cylinders secure heavy payloads without breaking or leaking.",
            },
            {
                title: "Advanced Anti-Topple",
                desc: "Built with high-spec stability margins to prevent tipping at any dynamic tilt configurations.",
            },
            {
                title: "Structural Integrity",
                desc: "Drop-test verified to withstand high impacts without compromising the chair's core framework.",
            },
            {
                title: "Eco-Friendly Material",
                desc: "Constructed with low-emission materials conforming to BIFMA chemical safety standard checks.",
            },
        ],
        pdfUrl: "/Pdf/BIFMA.pdf",
        regNo: "Standard Compliance",
    },

    {
        title: "BIS Certified",
        subtitle:
            "Bureau of Indian Standards compliance for premium seating ergonomics and safety.",
        whyTitle: "WHY ASTRIDE IS BETTER THAN COMPETITORS?",
        whyPoints: [
            {
                title: "National Standards",
                desc: "Rigorous testing to meet Indian statutory benchmarks for structural safety.",
            },
            {
                title: "Enhanced Ergonomics",
                desc: "Specifically certified for physiological support during long working hours.",
            },
            {
                title: "Material Integrity",
                desc: "Non-toxic, premium fire-retardant foam and high-grade plastics verified by BIS lab tests.",
            },
            {
                title: "Climate Resilience",
                desc: "Materials tested to endure India's high humidity and temperature variations without degrading.",
            },
            {
                title: "Optimized Dimensions",
                desc: "Dimensions optimized specifically for the average body heights and seating preferences of Indian professionals.",
            },
        ],
        pdfUrl: "/Pdf/BIS_Test_Report.pdf",
        regNo: "BIS Test Report",
    },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function CertificatesSection() {
    const [active, setActive] = useState(0);
    const [pdfOpen, setPdfOpen] = useState(false);

    const certificate = CERTS_DATA[active];

    return (
        <section className="relative overflow-hidden bg-[#f4f2ed] px-5 py-12 sm:px-8 lg:px-10 lg:py-15">

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-[250px]
                    -top-[250px]
                    h-[600px]
                    w-[600px]
                    rounded-full
                    border
                    border-black/[0.045]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-[300px]
                    -left-[250px]
                    h-[650px]
                    w-[650px]
                    rounded-full
                    border
                    border-black/[0.045]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[50%]
                    top-[45%]
                    h-[300px]
                    w-[300px]
                    -translate-x-1/2
                    rounded-full
                    bg-white/40
                    blur-[100px]
                "
            />

            {/* =====================================================
                MAIN WRAPPER
            ===================================================== */}

            <div className="relative z-10 mx-auto max-w-[1450px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        mb-14
                        flex
                        flex-col
                        justify-between
                        gap-8
                        lg:flex-row
                        lg:items-end
                    "
                >

                    <div>

                        <p
                            className="
                                mb-4
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.25em]
                                text-[#777]
                            "
                        >
                            Certifications & Standards
                        </p>

                        <h2
                            className="
                                max-w-[700px]
                                font-serif
                                text-[46px]
                                leading-[0.94]
                                tracking-[-2px]
                                text-[#171717]
                                sm:text-[60px]
                                lg:text-[72px]
                            "
                        >
                            Built on standards.
                            <br />
                            Made for trust.
                        </h2>

                    </div>

                    <p
                        className="
                            max-w-[330px]
                            text-[12px]
                            leading-[1.8]
                            text-[#777]
                        "
                    >
                        Every ASTRIDE chair is developed with a focus on
                        quality, durability, safety and consistent
                        manufacturing standards.
                    </p>

                </motion.div>

                {/* =================================================
                    CERTIFICATE SELECTOR
                ================================================= */}

                <motion.div
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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                    className="
                        mb-8
                        flex
                        overflow-x-auto
                        rounded-[18px]
                        border
                        border-black/[0.08]
                        bg-white/50
                        p-1
                        backdrop-blur-sm
                    "
                >

                    {CERTS_DATA.map((cert, index) => {

                        const isActive = active === index;

                        return (
                            <button
                                key={cert.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`
                                    group
                                    relative
                                    flex
                                    min-w-[210px]
                                    flex-1
                                    items-center
                                    gap-4
                                    rounded-[14px]
                                    px-5
                                    py-5
                                    text-left
                                    transition-all
                                    duration-300
                                    sm:px-7
                                    ${
                                        isActive
                                            ? "bg-[#171717] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                                            : "text-[#777] hover:bg-black/[0.03]"
                                    }
                                `}
                            >

                                <span
                                    className={`
                                        text-[10px]
                                        tracking-[0.15em]
                                        ${
                                            isActive
                                                ? "text-white/45"
                                                : "text-black/30"
                                        }
                                    `}
                                >
                                    0{index + 1}
                                </span>

                                <span
                                    className={`
                                        text-[12px]
                                        font-medium
                                        ${
                                            isActive
                                                ? "text-white"
                                                : "text-[#555]"
                                        }
                                    `}
                                >
                                    {cert.title}
                                </span>

                                {isActive && (
                                    <motion.span
                                        layoutId="activeCertificate"
                                        className="
                                            absolute
                                            bottom-0
                                            left-5
                                            right-5
                                            h-[2px]
                                            rounded-full
                                            bg-white
                                        "
                                    />
                                )}

                            </button>
                        );
                    })}

                </motion.div>

                {/* =================================================
                    ACTIVE CERTIFICATE
                ================================================= */}

                <AnimatePresence mode="wait">

                    <motion.div
                        key={active}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.55,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            grid
                            grid-cols-1
                            gap-8
                            lg:grid-cols-[0.8fr_1.2fr]
                        "
                    >

                        {/* =================================================
                            LEFT — CERTIFICATE PREVIEW
                        ================================================= */}

                        <div
                            className="
                                relative
                                min-h-[520px]
                                overflow-hidden
                                rounded-[28px]
                                bg-[#171717]
                                p-6
                                sm:p-8
                            "
                        >

                            {/* Decorative circles */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-[220px]
                                    -right-[220px]
                                    h-[520px]
                                    w-[520px]
                                    rounded-full
                                    border
                                    border-white/[0.08]
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-[130px]
                                    -right-[130px]
                                    h-[340px]
                                    w-[340px]
                                    rounded-full
                                    border
                                    border-white/[0.06]
                                "
                            />

                            {/* Top information */}

                            <div
                                className="
                                    relative
                                    z-10
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <span
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/40
                                    "
                                >
                                    ASTRIDE CERTIFIED
                                </span>

                                <span
                                    className="
                                        text-[9px]
                                        text-white/30
                                    "
                                >
                                    {certificate.regNo}
                                </span>

                            </div>

                            {/* Certificate paper */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                    rotate: -2,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="
                                    absolute
                                    left-[12%]
                                    right-[12%]
                                    top-[15%]
                                    aspect-[0.72]
                                    overflow-hidden
                                    rounded-[4px]
                                    bg-[#f8f6ef]
                                    shadow-[0_35px_70px_rgba(0,0,0,0.3)]
                                "
                            >

                                {/* Outer border */}

                                <div
                                    className="
                                        absolute
                                        inset-4
                                        border
                                        border-[#b9b09f]/60
                                        sm:inset-5
                                    "
                                />

                                {/* Inner border */}

                                <div
                                    className="
                                        absolute
                                        inset-7
                                        border
                                        border-[#b9b09f]/30
                                        sm:inset-8
                                    "
                                />

                                {/* Certificate content */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        px-6
                                        text-center
                                        sm:px-10
                                    "
                                >

                                    {/* Logo circle */}

                                    <div
                                        className="
                                            mb-5
                                            h-12
                                            w-12
                                            rounded-full
                                            border
                                            border-[#b5a98f]
                                            p-1
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-full
                                                w-full
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#b5a98f]
                                            "
                                        >
                                            <span
                                                className="
                                                    font-serif
                                                    text-[15px]
                                                    text-[#4b463c]
                                                "
                                            >
                                                A
                                            </span>
                                        </div>
                                    </div>

                                    <span
                                        className="
                                            text-[7px]
                                            uppercase
                                            tracking-[0.3em]
                                            text-[#999]
                                            sm:text-[8px]
                                        "
                                    >
                                        Certificate of Compliance
                                    </span>

                                    <h3
                                        className="
                                            mt-4
                                            font-serif
                                            text-[22px]
                                            text-[#292722]
                                            sm:text-[28px]
                                        "
                                    >
                                        {certificate.title}
                                    </h3>

                                    <div className="mt-5 h-px w-16 bg-[#b5a98f]" />

                                    <p
                                        className="
                                            mt-5
                                            max-w-[220px]
                                            text-[7px]
                                            leading-[1.7]
                                            text-[#888]
                                            sm:text-[8px]
                                        "
                                    >
                                        {certificate.subtitle}
                                    </p>

                                    <div
                                        className="
                                            mt-8
                                            text-[7px]
                                            uppercase
                                            tracking-[0.15em]
                                            text-[#999]
                                        "
                                    >
                                        {certificate.regNo}
                                    </div>

                                    {/* Signature lines */}

                                    <div
                                        className="
                                            mt-8
                                            flex
                                            items-center
                                            gap-10
                                        "
                                    >

                                        <div>
                                            <div className="h-px w-14 bg-[#aaa]" />

                                            <p className="mt-2 text-[6px] text-[#999]">
                                                Authorized
                                            </p>
                                        </div>

                                        <div>
                                            <div className="h-px w-14 bg-[#aaa]" />

                                            <p className="mt-2 text-[6px] text-[#999]">
                                                Certification
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                            {/* Verified badge */}

                            <div
                                className="
                                    absolute
                                    bottom-7
                                    left-7
                                    z-10
                                    flex
                                    items-center
                                    gap-3
                                    sm:left-8
                                "
                            >

                                <span
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/[0.05]
                                        text-white
                                    "
                                >
                                    <FiCheck size={14} />
                                </span>

                                <div>

                                    <p
                                        className="
                                            text-[9px]
                                            uppercase
                                            tracking-[0.15em]
                                            text-white/35
                                        "
                                    >
                                        Verified Standard
                                    </p>

                                    <p className="mt-1 text-[11px] text-white/70">
                                        {certificate.title}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            RIGHT — INFORMATION
                        ================================================= */}

                        <div
                            className="
                                rounded-[28px]
                                border
                                border-black/[0.07]
                                bg-white/70
                                p-7
                                backdrop-blur-xl
                                sm:p-9
                                lg:p-10
                            "
                        >

                            {/* Title */}

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-5
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[9px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-[#999]
                                        "
                                    >
                                        Certification 0{active + 1}
                                    </p>

                                    <h3
                                        className="
                                            mt-3
                                            font-serif
                                            text-[38px]
                                            leading-none
                                            tracking-[-1px]
                                            text-[#171717]
                                            sm:text-[48px]
                                        "
                                    >
                                        {certificate.title}
                                    </h3>

                                </div>

                                {/* Open PDF icon */}

                                <button
                                    type="button"
                                    onClick={() => setPdfOpen(true)}
                                    className="
                                        group
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#171717]
                                        text-white
                                        transition-transform
                                        duration-300
                                        hover:rotate-45
                                    "
                                    aria-label="View certificate"
                                >
                                    <FiExternalLink size={15} />
                                </button>

                            </div>

                            {/* Subtitle */}

                            <p
                                className="
                                    mt-6
                                    max-w-[600px]
                                    text-[13px]
                                    leading-[1.8]
                                    text-[#707070]
                                "
                            >
                                {certificate.subtitle}
                            </p>

                            {/* Divider */}

                            <div className="my-8 h-px w-full bg-black/[0.08]" />

                            {/* Why title */}

                            <div className="mb-7">

                                <p
                                    className="
                                        text-[9px]
                                        font-medium
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#999]
                                    "
                                >
                                    {certificate.whyTitle}
                                </p>

                                <p className="mt-2 text-[11px] text-[#aaa]">
                                    Quality principles behind every ASTRIDE chair.
                                </p>

                            </div>

                            {/* Points */}

                            <div className="space-y-0">

                                {certificate.whyPoints.map((point, index) => (

                                    <motion.div
                                        key={point.title}
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.12 + index * 0.07,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="
                                            group
                                            flex
                                            gap-5
                                            border-b
                                            border-black/[0.07]
                                            py-5
                                            last:border-b-0
                                        "
                                    >

                                        {/* Number */}

                                        <span
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#eeece6]
                                                text-[9px]
                                                text-[#777]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#171717]
                                                group-hover:text-white
                                            "
                                        >
                                            0{index + 1}
                                        </span>

                                        {/* Text */}

                                        <div>

                                            <h4 className="text-[13px] font-medium text-[#222]">
                                                {point.title}
                                            </h4>

                                            <p
                                                className="
                                                    mt-2
                                                    max-w-[600px]
                                                    text-[11px]
                                                    leading-[1.7]
                                                    text-[#7c7c7c]
                                                "
                                            >
                                                {point.desc}
                                            </p>

                                        </div>

                                    </motion.div>

                                ))}

                            </div>

                            {/* View Certificate */}

                            <div className="mt-8">

                                <button
                                    type="button"
                                    onClick={() => setPdfOpen(true)}
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        gap-4
                                        rounded-full
                                        bg-[#171717]
                                        px-5
                                        py-3
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.14em]
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-black
                                    "
                                >

                                    View Certificate

                                    <span
                                        className="
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white
                                            text-black
                                            transition-transform
                                            duration-300
                                            group-hover:rotate-45
                                        "
                                    >
                                        <FiArrowUpRight size={12} />
                                    </span>

                                </button>

                            </div>

                        </div>

                    </motion.div>

                </AnimatePresence>

            </div>

            {/* ============================================================
                PDF MODAL
            ============================================================ */}

            <AnimatePresence>

                {pdfOpen && (

                    <motion.div
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            bg-black/80
                            p-3
                            backdrop-blur-md
                            sm:p-6
                        "
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={() => setPdfOpen(false)}
                    >

                        {/* =================================================
                            MODAL CONTAINER
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="
                                relative
                                flex
                                h-[92vh]
                                w-full
                                max-w-[1100px]
                                flex-col
                                overflow-hidden
                                rounded-[20px]
                                bg-[#171717]
                                shadow-[0_40px_120px_rgba(0,0,0,0.5)]
                                sm:h-[90vh]
                                sm:rounded-[28px]
                            "
                        >

                            {/* =================================================
                                MODAL HEADER
                            ================================================= */}

                            <div
                                className="
                                    flex
                                    h-[64px]
                                    shrink-0
                                    items-center
                                    justify-between
                                    border-b
                                    border-white/[0.08]
                                    bg-[#171717]
                                    px-4
                                    sm:px-6
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/[0.08]
                                            text-white
                                        "
                                    >
                                        <FiCheck size={14} />
                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-[9px]
                                                uppercase
                                                tracking-[0.2em]
                                                text-white/35
                                            "
                                        >
                                            ASTRIDE CERTIFICATE
                                        </p>

                                        <h3 className="mt-0.5 text-[13px] font-medium text-white sm:text-[14px]">
                                            {certificate.title}
                                        </h3>

                                    </div>

                                </div>

                                {/* Close button */}

                                <button
                                    type="button"
                                    onClick={() => setPdfOpen(false)}
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        text-white/70
                                        transition-all
                                        duration-300
                                        hover:bg-white
                                        hover:text-black
                                    "
                                    aria-label="Close certificate"
                                >
                                    <FiX size={18} />
                                </button>

                            </div>

                            {/* =================================================
                                PDF VIEWER
                            ================================================= */}

                            <div
                                className="
                                    relative
                                    min-h-0
                                    flex-1
                                    bg-[#303030]
                                "
                            >

                                <iframe
                                    key={certificate.pdfUrl}
                                    src={`${certificate.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                                    title={certificate.title}
                                    className="
                                        h-full
                                        w-full
                                        border-0
                                    "
                                />

                            </div>

                            {/* =================================================
                                MODAL FOOTER
                            ================================================= */}

                            <div
                                className="
                                    flex
                                    shrink-0
                                    flex-col
                                    gap-3
                                    border-t
                                    border-white/[0.08]
                                    bg-[#171717]
                                    px-4
                                    py-3
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    sm:px-6
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[9px]
                                            uppercase
                                            tracking-[0.15em]
                                            text-white/30
                                        "
                                    >
                                        {certificate.regNo}
                                    </p>

                                    <p className="mt-1 text-[10px] text-white/50">
                                        Official certification document
                                    </p>

                                </div>

                                <a
                                    href={certificate.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-white/10
                                        px-4
                                        py-2.5
                                        text-[9px]
                                        uppercase
                                        tracking-[0.12em]
                                        text-white/70
                                        transition-all
                                        duration-300
                                        hover:bg-white
                                        hover:text-black
                                    "
                                >
                                    Open Full PDF

                                    <FiArrowUpRight size={13} />
                                </a>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
}