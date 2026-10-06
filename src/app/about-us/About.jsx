"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    Heart,
    ShieldCheck,
    Sparkles,
    Star,
    UsersRound,
} from "lucide-react";

const stats = [
    {
        value: "75,000+",
        label: "Orders delivered",
        detail: "Seating for homes and workspaces across India.",
        image: "/banner/1.png",
        imageAlt: "ASTRIDE chairs in a contemporary office",
        className: "lg:row-span-2",
        featured: true,
        icon: null,
    },
    {
        value: "12",
        label: "Years of experience",
        detail: "Making comfort part of everyday life.",
        image: "/9.png",
        imageAlt: "Chair sketches in the ASTRIDE design process",
        className: "",
        featured: false,
        icon: BadgeCheck,
    },
    {
        value: "4.8",
        label: "Customer rating",
        detail: "Rated by the people who choose ASTRIDE.",
        image: "/banner/4.png",
        imageAlt: "An ASTRIDE chair in a warm, light-filled space",
        className: "lg:row-span-1",
        featured: false,
        icon: Heart,
    },
    {
        value: "50,000+",
        label: "Happy customers",
        detail: "A growing community of ASTRIDE customers.",
        image: "/banner/3.png",
        imageAlt: "A comfortable chair in a contemporary interior",
        className: "",
        featured: false,
        icon: UsersRound,
    },
    {
        value: "ISO 9001:2015",
        label: "Quality management",
        detail: "Certified quality management for chair manufacturing and supply.",
        image: "/8.png",
        imageAlt: "Close-up of detailed upholstery finishing",
        className: "",
        featured: false,
        icon: BadgeCheck,
    },
];

const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

const benefits = [
    {
        icon: Star,
        title: "Thoughtful comfort",
        description:
            "Supportive seating designed to make everyday work, rest and connection feel better.",
    },
    {
        icon: BadgeCheck,
        title: "Quality you can trust",
        description:
            "Carefully selected materials and quality checks are part of the ASTRIDE standard.",
    },
    {
        icon: ShieldCheck,
        title: "Made for everyday",
        description:
            "Dependable chairs made to be used, enjoyed and lived with day after day.",
    },
];

const categories = [
    "Office & ergonomic",
    "Executive & visitor",
    "Gaming & study",
    "Dining & lounge",
];

function Reveal({ children, className = "", delay = 0, reduceMotion }) {
    return (
        <motion.div
            variants={reveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function About() {
    const reduceMotion = useReducedMotion();

    return (
        <main className="overflow-hidden bg-[#fbfaf8] text-[#22180f]">
            <section className="relative px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-30 border-b border-black/20">
                <div className="pointer-events-none absolute -right-28 -top-36 h-[420px] w-[420px] rounded-full bg-[#efece7] sm:h-[500px] sm:w-[560px]" />
                <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10"
                    >
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#8e7557] sm:text-xs">
                            The ASTRIDE story
                        </p>
                        <h1 className="max-w-[600px] font-serif text-[clamp(3.6rem,8.4vw,7.8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                            We make
                            <br />
                            comfort feel
                            <br />
                            <span className="relative italic text-[#927551]">
                                considered.
                            </span>
                        </h1>
                        <Link
                            href="/products"
                            className="mt-7 inline-flex items-center gap-3 bg-[#6e5436] px-5 py-3.5 text-xs font-medium text-white transition-colors hover:bg-[#4d3925]"
                        >
                            Find your seat
                            <ArrowRight size={15} strokeWidth={1.7} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-50 mx-auto h-[330px] w-full max-w-[540px] overflow-hidden rounded-t-[48%] rounded-b-[4px] bg-[#e8e0d4] sm:h-[430px] lg:h-[510px]"
                    >
                        <Image
                            src="/banner/4.png"
                            alt="Astride ergonomic chair in a warm, light-filled interior"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-right"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-6 pb-6 pt-20 text-white sm:px-8 sm:pb-8">
                            <p className="text-[9px] uppercase tracking-[0.2em] text-white/75">
                                ASTRIDE / Designed for everyday
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="pointer-events-none absolute -bottom-10 left-10 hidden select-none font-serif text-[clamp(9rem,22vw,20rem)] font-semibold leading-none tracking-[-0.09em] text-[#efeeea] md:block"
                    aria-hidden="true"
                >
                    ASTRIDE
                </motion.div>
            </section>

            <section className="mx-auto max-w-7xl py-15" aria-labelledby="about-stats-title">
                <motion.header
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto mb-8 max-w-[650px] text-center sm:mb-10"
                >
                    <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#8a755a] sm:text-[10px]">
                        The ASTRIDE difference
                    </p>
                    <h1
                        id="about-stats-title"
                        className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
                    >
                        Built on experience. Driven by quality.
                    </h1>
                </motion.header>

                <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 sm:auto-rows-[240px] lg:grid-cols-3 lg:auto-rows-[250px] lg:gap-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.article
                                key={stat.label}
                                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.55,
                                    delay: reduceMotion ? 0 : 0.08 * index,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={reduceMotion ? undefined : { y: -4 }}
                                className={`group relative isolate overflow-hidden rounded-[5px] bg-[#e9e5df] ${stat.className}`}
                            >
                                <Image
                                    src={stat.image}
                                    alt={stat.imageAlt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    priority={index === 0}
                                />
                                <div
                                    className={`absolute inset-0 ${stat.featured
                                        ? "bg-gradient-to-t from-black/75 via-black/20 to-black/10"
                                        : "bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                                        }`}
                                />
                                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white sm:p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        {stat.featured ? (
                                            <span className="font-serif text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                                                ASTRIDE
                                            </span>
                                        ) : (
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                                                {Icon && <Icon size={16} strokeWidth={1.6} />}
                                            </span>
                                        )}
                                        <span className="rounded-full border border-white/45 px-2.5 py-1 text-[8px] uppercase tracking-[0.16em] text-white/90">
                                            {stat.featured ? "Our story" : "Our journey"}
                                        </span>
                                    </div>
                                    <div>
                                        <p className={`${stat.featured ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"} font-semibold leading-none tracking-[-0.07em]`}>
                                            {stat.value}
                                        </p>
                                        <h2 className="mt-2 text-xs font-medium sm:text-sm">
                                            {stat.label}
                                        </h2>
                                        <p className="mt-1 max-w-[270px] text-[10px] leading-[1.55] text-white/80 sm:text-[11px]">
                                            {stat.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <section className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-15 border-y border-black/20">
                <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
                    <Reveal reduceMotion={reduceMotion} className="relative mx-auto w-full max-w-[430px]">
                        <div className="absolute -right-3 -top-3 h-full w-full rounded-tl-[100px] rounded-br-[100px] border border-[#a78c68]" />
                        <div className="relative h-[330px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] bg-[#e9e4dc] sm:h-[400px]">
                            <Image
                                src="/9.png"
                                alt="The thoughtful design process behind ASTRIDE seating"
                                fill
                                sizes="(max-width: 768px) 90vw, 42vw"
                                className="object-cover"
                            />
                        </div>
                        <span className="absolute -bottom-4 -right-4 -z-10 h-20 w-20 rounded-full bg-[#eee8de]" />
                    </Reveal>

                    <Reveal reduceMotion={reduceMotion} delay={0.1}>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#927551]">
                            Our philosophy
                        </p>
                        <h2 className="mt-4 max-w-[470px] font-serif text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                            The right chair changes how a space feels.
                        </h2>
                        <p className="mt-5 max-w-[440px] text-sm leading-7 text-[#746d64]">
                            We believe comfort should be part of the design, not
                            an afterthought. Every ASTRIDE chair brings together
                            everyday function, considered form and quality you
                            can feel.
                        </p>
                        <p className="mt-3 max-w-[440px] text-sm leading-7 text-[#746d64]">
                            More than 12 years in seating has taught us that
                            little details make a lasting difference — from a
                            supportive sit to a finish that feels right at home.
                        </p>
                        <Link
                            href="/about-us#benefits"
                            className="mt-6 inline-flex items-center gap-2 border-b border-[#8a765d] pb-1.5 text-xs text-[#59442c] transition-colors hover:text-black"
                        >
                            What matters to us
                            <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-15 border-b border-black/20">
                <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
                    <Reveal reduceMotion={reduceMotion} className="order-2 md:order-1">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#927551]">
                            Made for your everyday
                        </p>
                        <h2 className="mt-4 max-w-[460px] font-serif text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                            A seat for every way of living.
                        </h2>
                        <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#746d64]">
                            From the first task of the day to time spent around
                            the table, our collection is made to bring
                            dependable comfort and considered style to all kinds
                            of spaces.
                        </p>
                        <div className="mt-6 flex max-w-[420px] flex-wrap gap-2">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className="border border-[#d8d0c4] px-3 py-2 text-[9px] uppercase tracking-[0.08em] text-[#62594e] sm:text-[10px]"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                        <Link
                            href="/products"
                            className="mt-6 inline-flex items-center gap-2 border-b border-[#8a765d] pb-1.5 text-xs text-[#59442c] transition-colors hover:text-black"
                        >
                            Explore the collection
                            <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </Reveal>

                    <Reveal reduceMotion={reduceMotion} delay={0.1} className="order-1 md:order-2">
                        <div className="relative mx-auto h-[330px] w-full max-w-[430px] overflow-hidden rounded-tr-[100px] rounded-bl-[100px] bg-[#e9e4dc] sm:h-[400px]">
                            <Image
                                src="/banner/1.png"
                                alt="Astride seating in a contemporary workspace"
                                fill
                                sizes="(max-width: 768px) 90vw, 42vw"
                                className="object-cover object-right"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="benefits" className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-15 border-b border-black/20">
                <div className="mx-auto max-w-7xl">
                    <Reveal reduceMotion={reduceMotion} className="mb-9 text-center sm:mb-12">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#927551]">
                            The ASTRIDE difference
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                            Your comfort comes first.
                        </h2>
                        <span className="mx-auto mt-3 block h-px w-16 bg-[#a78c68]" />
                    </Reveal>

                    <div className="grid items-center gap-9 md:grid-cols-[1fr_0.9fr] md:gap-14">
                        <Reveal reduceMotion={reduceMotion}>
                            <div className="relative h-[310px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] bg-[#e9e4dc] sm:h-[410px]">
                                <Image
                                    src="/banner/3.png"
                                    alt="Comfortable seating designed for modern living"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 48vw"
                                    className="object-cover object-left"
                                />
                            </div>
                        </Reveal>

                        <div className="space-y-2">
                            {benefits.map(({ icon: Icon, title, description }, index) => (
                                <Reveal key={title} reduceMotion={reduceMotion} delay={index * 0.08}>
                                    <motion.article
                                        whileHover={reduceMotion ? undefined : { x: 5 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex gap-4 border-b border-[#e8e2d9] px-3 py-5 first:pt-3"
                                    >
                                        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b59a75] text-[#806643]">
                                            <Icon size={16} strokeWidth={1.4} />
                                        </span>
                                        <div>
                                            <h3 className="font-serif text-lg font-medium text-[#513d26] sm:text-xl">
                                                {title}
                                            </h3>
                                            <p className="mt-1.5 max-w-[350px] text-xs leading-6 text-[#746d64]">
                                                {description}
                                            </p>
                                        </div>
                                    </motion.article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
