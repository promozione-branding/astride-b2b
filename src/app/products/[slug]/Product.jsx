"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Armchair,
    BadgeCheck,
    Building2,
    Heart,
    Mail,
    MessageCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const productImages = [
    {
        src: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157137-staff-chair-Black-e127.webp",
        alt: "ASTRIDE staff chair, front three-quarter view",
    },
    {
        src: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157137-staff-chair-Black-7b8d.webp",
        alt: "ASTRIDE staff chair, alternate view",
    },
    {
        src: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157137-staff-chair-Black-c9ce.webp",
        alt: "ASTRIDE staff chair, alternate view",
    },
    {
        src: "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157138-staff-chair-Black-bbcf.webp",
        alt: "ASTRIDE staff chair, alternate view",
    },
];

const specifications = [
    ["Category", "Office seating"],
    ["Designed for", "Workspaces, institutions & commercial use"],
    ["Availability", "Ask our team about current options"],
];

const benefits = [
    "Made for everyday work",
    "A considered, practical design",
    "B2B enquiry support",
];

const keyFeatures = [
    {
        number: "01",
        title: "Everyday comfort",
        description:
            "A practical seating choice for the daily pace of offices and shared workspaces.",
        icon: Armchair,
    },
    {
        number: "02",
        title: "Versatile by design",
        description:
            "A clean, understated silhouette that sits naturally in a range of professional settings.",
        icon: BadgeCheck,
    },
    {
        number: "03",
        title: "Ready for your space",
        description:
            "Designed for offices, workstations, institutions, and commercial environments.",
        icon: Building2,
    },
];

const whyAstride = [
    {
        title: "A focused seating range",
        description:
            "Explore seating options for different workspaces, from everyday office use to shared environments.",
    },
    {
        title: "Support with your selection",
        description:
            "Tell us about your space and requirements, and our team can help you enquire about suitable options.",
    },
    {
        title: "Business enquiries welcome",
        description:
            "Get in touch to discuss product availability and requirements for your team or organization.",
    },
];

export default function Product() {
    const swiperRef = useRef(null);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState("details");
    const [isSaved, setIsSaved] = useState(false);

    const showPreviousImage = () => swiperRef.current?.slidePrev();
    const showNextImage = () => swiperRef.current?.slideNext();

    const handleEnquirySubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const fields = [
            ["Name", "name"],
            ["Work email", "email"],
            ["Phone", "phone"],
            ["Company", "company"],
            ["Quantity", "quantity"],
            ["Message", "message"],
        ];
        const message = fields
            .map(([label, name]) => `${label}: ${formData.get(name) || "Not provided"}`)
            .join("\n");
        const subject = encodeURIComponent("Product enquiry: ASTRIDE Staff Chair");

        window.location.href = `mailto:hello@astride.in?subject=${subject}&body=${encodeURIComponent(message)}`;
    };

    return (
        <main className="min-h-screen bg-[#f2f3f3] px-4 pb-20 pt-28 text-[#171717] sm:px-6 lg:px-10 lg:pb-12 lg:pt-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-[1440px] overflow-hidden rounded-[22px] border border-black/[0.06] bg-white shadow-[0_24px_80px_rgba(20,20,20,0.07)]"
            >
                <div className="px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-medium uppercase tracking-[0.14em] text-black/40 sm:text-[10px]"
                    >
                        <Link className="transition-colors hover:text-black" href="/">
                            Home
                        </Link>
                        <span aria-hidden="true">/</span>
                        <Link
                            className="transition-colors hover:text-black"
                            href="/products"
                        >
                            Products
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span className="text-black/70">Staff chair</span>
                    </nav>
                </div>

                <div className="grid gap-8 px-5 pb-7 pt-6 sm:px-8 sm:pb-10 sm:pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:pb-14 lg:pt-5">
                    <motion.section
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        aria-label="Product images"
                        className="min-w-0"
                    >
                        <div className="relative overflow-hidden rounded-[16px] bg-[#f4f3f0]">
                            <div className="aspect-[1.08] sm:aspect-[1.16] lg:aspect-[1.3]">
                                <Swiper
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    onSlideChange={(swiper) =>
                                        setActiveImage(swiper.realIndex)
                                    }
                                    slidesPerView={1}
                                    loop
                                    className="h-full w-full"
                                >
                                    {productImages.map((image) => (
                                        <SwiperSlide key={image.src}>
                                            <div className="relative h-full w-full overflow-hidden">
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.97 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 0.65,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    className="absolute inset-0"
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        priority={image.src === productImages[0].src}
                                                        sizes="(max-width: 1024px) 100vw, 58vw"
                                                        className="object-contain"
                                                    />
                                                </motion.div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 sm:bottom-6 sm:left-6">
                                <button
                                    type="button"
                                    onClick={showPreviousImage}
                                    aria-label="Show previous product image"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 transition hover:bg-black hover:text-white"
                                >
                                    <ArrowLeft size={16} strokeWidth={1.6} />
                                </button>
                                <button
                                    type="button"
                                    onClick={showNextImage}
                                    aria-label="Show next product image"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 transition hover:bg-black hover:text-white"
                                >
                                    <ArrowRight size={16} strokeWidth={1.6} />
                                </button>
                            </div>

                            <span className="absolute bottom-6 right-6 z-10 text-[10px] font-medium tracking-[0.16em] text-black/50">
                                0{activeImage + 1} <span className="mx-1">/</span> 0
                                {productImages.length}
                            </span>
                        </div>

                        <div className="mt-4 flex gap-3">
                            {productImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => swiperRef.current?.slideToLoop(index)}
                                    aria-label={`Show product image ${index + 1}`}
                                    aria-pressed={activeImage === index}
                                    className={`relative aspect-[1.3] w-24 overflow-hidden rounded-[10px] bg-[#f4f3f0] transition sm:w-28 ${activeImage === index
                                        ? "ring-1 ring-black"
                                        : "opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt=""
                                        fill
                                        sizes="112px"
                                        className="object-contain p-2"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex min-w-0 flex-col lg:py-2"
                    >
                        <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-[10px]">
                            <span className="h-px w-6 bg-[#c9a227]" />
                            ASTRIDE office seating
                        </div>

                        <div className="mt-2 flex items-start justify-between gap-4">
                            <div>
                                <h1 className="mt-2 text-[clamp(36px,5vw,62px)] font-medium leading-[0.98] tracking-[-0.065em]">
                                    Staff Chair
                                </h1>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsSaved((saved) => !saved)}
                                aria-label={
                                    isSaved ? "Remove from saved products" : "Save product"
                                }
                                aria-pressed={isSaved}
                                className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${isSaved
                                    ? "border-black bg-black text-white"
                                    : "border-black/15 hover:border-black"
                                    }`}
                            >
                                <Heart
                                    size={18}
                                    strokeWidth={1.5}
                                    fill={isSaved ? "currentColor" : "none"}
                                />
                            </button>
                        </div>

                        <p className="mt-5 max-w-[540px] text-[13px] leading-[1.9] text-black/60 sm:text-sm">
                            A dependable seating solution for the rhythm of a modern
                            workplace. The ASTRIDE Staff Chair brings together practical
                            comfort and a clean, versatile silhouette for offices,
                            workstations, and shared spaces.
                        </p>

                        <div className="mt-5 border-y border-black/10">
                            <div
                                role="tablist"
                                aria-label="Product information"
                                className="flex gap-7"
                            >
                                {[
                                    ["details", "Details"],
                                    ["description", "Description"],
                                ].map(([tab, label]) => (
                                    <button
                                        key={tab}
                                        id={`product-tab-${tab}`}
                                        type="button"
                                        role="tab"
                                        aria-selected={activeTab === tab}
                                        aria-controls="product-tab-panel"
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative py-4 text-[10px] font-medium uppercase tracking-[0.13em] transition ${activeTab === tab
                                            ? "text-black"
                                            : "text-black/40 hover:text-black"
                                            }`}
                                    >
                                        {label}
                                        {activeTab === tab && (
                                            <motion.span
                                                layoutId="product-tab-indicator"
                                                className="absolute inset-x-0 bottom-0 h-[2px] bg-[#c9a227]"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div
                                id="product-tab-panel"
                                role="tabpanel"
                                aria-labelledby={`product-tab-${activeTab}`}
                                className="min-h-[150px] py-5"
                            >
                                <AnimatePresence mode="wait">
                                    {activeTab === "details" ? (
                                        <motion.dl
                                            key="details"
                                            initial={{ opacity: 0, y: 7 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-4"
                                        >
                                            {specifications.map(([label, value]) => (
                                                <div
                                                    key={label}
                                                    className="grid grid-cols-[110px_1fr] gap-4 text-[11px] sm:text-xs"
                                                >
                                                    <dt className="font-medium text-black/80">
                                                        {label}
                                                    </dt>
                                                    <dd className="leading-relaxed text-black/55">
                                                        {value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </motion.dl>
                                    ) : (
                                        <motion.p
                                            key="description"
                                            initial={{ opacity: 0, y: 7 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                            className="max-w-[540px] text-[12px] leading-[1.9] text-black/60"
                                        >
                                            Designed to fit naturally into busy work
                                            environments, the ASTRIDE Staff Chair offers a
                                            straightforward, comfortable seat for teams and
                                            everyday office use. Contact us to discuss
                                            configurations, availability, and bulk
                                            requirements.
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                                At a glance
                            </h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {benefits.map((benefit) => (
                                    <span
                                        key={benefit}
                                        className="rounded-full border border-black/10 px-3 py-2 text-xs text-black/65 sm:text-xs"
                                    >
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact-us"
                                className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.13em] text-white transition hover:bg-[#c9a227] hover:text-black"
                            >
                                Request a quote
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.13em] transition hover:border-black"
                            >
                                Explore products
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </motion.div>

            <section
                aria-labelledby="key-features-heading"
                className="mx-auto mt-5 max-w-[1440px] lg:mt-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65 }}
                    className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
                >
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9b7b19]">
                            Made for the workday
                        </p>
                        <h2
                            id="key-features-heading"
                            className="mt-3 text-3xl font-medium tracking-[-0.06em] sm:text-4xl"
                        >
                            Key features
                        </h2>
                    </div>
                    <p className="max-w-md text-xs leading-7 text-black/55 sm:text-sm">
                        Straightforward, thoughtful details for everyday workspaces.
                    </p>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-3">
                    {keyFeatures.map(({ number, title, description, icon: Icon }, index) => (
                        <motion.article
                            key={number}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-8"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] tracking-[0.15em] text-black/35">
                                    {number}
                                </span>
                                <Icon
                                    aria-hidden="true"
                                    size={19}
                                    strokeWidth={1.5}
                                    className="text-[#9b7b19]"
                                />
                            </div>
                            <h3 className="mt-9 text-lg font-medium tracking-[-0.04em]">
                                {title}
                            </h3>
                            <p className="mt-3 text-xs leading-6 text-black/55 sm:text-sm">
                                {description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section
                aria-labelledby="why-astride-heading"
                className="mx-auto mt-8 grid max-w-[1440px] gap-8 rounded-[22px] bg-[#171717] px-6 py-10 text-white sm:px-10 sm:py-12 lg:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14 lg:py-16"
            >
                <motion.div
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d6b54c]">
                        ASTRIDE
                    </p>
                    <h2
                        id="why-astride-heading"
                        className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-[-0.06em] sm:text-4xl"
                    >
                        Thoughtful seating for the way you work.
                    </h2>
                    <p className="mt-5 max-w-sm text-xs leading-7 text-white/55 sm:text-sm">
                        We make it easier to find the right seating for your workplace
                        and get the details you need before you enquire.
                    </p>
                </motion.div>

                <div className="divide-y divide-white/10">
                    {whyAstride.map(({ title, description }, index) => (
                        <motion.article
                            key={title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6"
                        >
                            <h3 className="text-sm font-medium">{title}</h3>
                            <p className="text-xs leading-6 text-white/55 sm:text-sm">
                                {description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </section>

        </main>
    );
}
