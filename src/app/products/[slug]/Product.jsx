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
import ContactSection from "@/components/home/ContactSection";

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
    ["Dimensions", "Length (18.5 inches), Width (18.5 inches), Seating Height (18 to 24 inches), Overall Height (36 inches)"],
    ["Designed for", "Offices and workspaces"],
    ["Availability", "Ask our team about current options"],
    ["Available colours", "Black, blue, red, orange, green"],
    ["Back Style", "Comfort rest back"],
    ["Frame Material", "Polypropylene"],
    ["Item Weight", "15 Kilograms"],
    ["Material", "Nylon"],
    ["Product Dimensions", "54D x 58W x 110H Centimeters"],
    ["Recommended Uses", "Office"],
    ["Size", "Standard"],
    ["Special Feature", "Adjustable Height"],
];

const detailsBullets = [
    "DIY INSTALLATION: Do it Yourself in 10 Minutes, No Extra Tools Required.",
    "BIONIC CURVE BACKREST: The design of the backrest is based on the natural curve of the human spine and dynamic digital model of the human body. The back of this ergonomic chair naturally fits the physiological bends of the spine, providing excellent lumbar support.",
    "RISK FREE PURCHASE: The chair has commercial-grade & BIFMA Certified components, Weight supports up to 100kgs. The installation guide is very simple to follow, no extra tools and fittings needed.",
    "STABLE CHAIR: Passed stability testing with a load of 100 kg on seat and backrest to avoid tip-over. Passed seat and back rest durability test with a load of 100 Kg and 32 Kg respectively for 1,00,000 cycles.",
    "SOLID CONSTRUCTION: Heavy-duty Polypropylene Mesh Back Chair, BIFMA Certified Class - 4 Hydraulic Gas Spring, BIFMA Certified 50mm Wheel Castors, for great stability and mobility, more reliable and sturdy, maximum weight handling capacity up to 100 Kgs.",
];

const benefits = [
    "Made for everyday work",
    "A considered, practical design",
    "B2B enquiry support",
];

const colorOptions = [
    { name: "Black", hex: "#171717" },
    { name: "Walnut", hex: "#8e6949" },
    { name: "Sand", hex: "#d4b186" },
    { name: "Slate", hex: "#5e6976" },
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

const reviews = [
    {
        name: "Karan M.",
        title: "Excellent office chair",
        text: "Comfortable for long hours, very easy to assemble, and the design fits perfectly in our studio. The build quality feels premium and durable.",
        rating: 5,
    },
    {
        name: "Neha S.",
        title: "Great value for money",
        text: "The chair feels sturdy and supportive, especially for daily work. We ordered for multiple workstations and the experience was smooth.",
        rating: 5,
    },
    {
        name: "Rohit P.",
        title: "Strong ergonomic support",
        text: "The backrest support is really good and the finish looks clean. It has made our office setup much more comfortable and professional.",
        rating: 4,
    },
    {
        name: "Aisha K.",
        title: "Very reliable purchase",
        text: "Assembly is straightforward and the chair feels balanced and stable. It looks premium and works great in a retail workspace.",
        rating: 5,
    },
];

export default function Product() {
    const swiperRef = useRef(null);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState("details");
    const [selectedColor, setSelectedColor] = useState("Black");
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
        <main className="min-h-screen bg-[#fbfaf8] px-4 pb-20 pt-28 text-[#171717] sm:px-6 lg:px-10 lg:pb-12 lg:pt-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-[1440px] overflow-hidden rounded-[22px] border border-black/[0.06] bg-white shadow-[0_24px_80px_rgba(20,20,20,0.07)]"
            >
                <div className="px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-black/50"
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
                        <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-xs">
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

                        <div className="mt-2 flex items-center gap-3">
                            <div className="flex items-center gap-1 text-lg text-[#d4a93a]" aria-label="4.7 out of 5 stars">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span className="text-[#d4a93a]/60">★</span>
                            </div>
                            <span className="text-sm font-medium text-black/75">4.7</span>
                            <span className="text-sm text-black/70">[512 verified reviews]</span>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div className="mt-2 flex items-end gap-3">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[28px] font-semibold tracking-[-0.06em] text-black">
                                        ₹6,499
                                    </span>
                                    <span className="text-lg text-black/40 line-through">₹10,000</span>
                                </div>
                            </div>
                            <p className="rounded-md text-sm mt-1 text-black/60 bg-amber-400 p-1.5">You save ₹3,501</p>
                        </div>

                        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-black/45">
                            Inclusive of all taxes.
                        </p>

                        <div className="mt-4">
                            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                                Choose colour
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {colorOptions.map((color) => (
                                    <button
                                        key={color.name}
                                        type="button"
                                        aria-label={`Select ${color.name} color`}
                                        aria-pressed={selectedColor === color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition ${selectedColor === color.name
                                            ? "border-black bg-black text-white"
                                            : "border-black/10 bg-white text-black/70 hover:border-black/30"
                                            }`}
                                    >
                                        <span
                                            className="h-3.5 w-3.5 rounded-full border border-black/10"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        {color.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="mt-5 max-w-[540px] text-[13px] leading-[1.9] text-black/60 sm:text-sm">
                            A dependable seating solution for the rhythm of a modern
                            workplace. The ASTRIDE Staff Chair brings together practical
                            comfort and a clean, versatile silhouette for offices,
                            workstations, and shared spaces.
                        </p>

                        <div className="mt-4">
                            <div className="flex items-center justify-between gap-3">
                                <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                                    At a glance
                                </h2>
                                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/35">
                                    {selectedColor}
                                </span>
                            </div>

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

            <section className="bg-white px-4 rounded-md">
                <div className="mt-5 border-y border-black/10">
                    {/* <div
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
                    </div> */}
                    <div
                        id="product-tab-panel"
                        role="tabpanel"
                        aria-labelledby={`product-tab-${activeTab}`}
                        className="min-h-[150px] py-5"
                    >
                        <AnimatePresence mode="wait">
                            {activeTab === "details" ? (
                                <motion.div
                                    key="details"
                                    initial={{ opacity: 0, y: 7 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"
                                >
                                    <div className="rounded-[18px] border border-black/10 bg-[#f8f5f1] p-4 sm:p-5">
                                        <div className="mb-4 flex items-center justify-between gap-3">
                                            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                                                Product details
                                            </p>
                                            <span className="rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8f6d1f]">
                                                Premium build
                                            </span>
                                        </div>

                                        <div className="grid gap-3 md:grid-cols-2">
                                            {specifications.map(([label, value]) => (
                                                <div
                                                    key={label}
                                                    className="rounded-2xl border border-black/8 bg-white p-3 shadow-[0_10px_20px_rgba(24,24,24,0.02)]"
                                                >
                                                    <dt className="mb-1 text-[9px] font-medium uppercase tracking-[0.14em] text-black/45">
                                                        {label}
                                                    </dt>
                                                    <dd className="text-[12px] leading-[1.7] text-black/70">
                                                        {value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-[18px] bg-[#171717] p-4 text-white sm:p-5">
                                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d6b54c]">
                                            Why this chair
                                        </p>
                                        <ul className="mt-4 space-y-4">
                                            {detailsBullets.map((bullet, index) => (
                                                <li
                                                    key={bullet}
                                                    className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3"
                                                >
                                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a227] text-[10px] font-semibold text-black">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-[12px] leading-[1.8] text-white/75">
                                                        {bullet}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.p
                                    key="description"
                                    initial={{ opacity: 0, y: 7 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="max-w-[540px] text-[12px] leading-[1.9] text-black/60"
                                >
                                    Designed to fit naturally into busy work environments, the ASTRIDE Staff Chair offers a straightforward, comfortable seat for teams and everyday office use. Contact us to discuss configurations, availability, and bulk requirements.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="key-features-heading"
                className="mx-auto mt-10 max-w-[1440px] lg:mt-12"
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
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
                            viewport={{ once: false, amount: 0.2 }}
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
                    viewport={{ once: false, amount: 0.2 }}
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
                            viewport={{ once: false, amount: 0.2 }}
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

            <section className="mx-auto mt-8 max-w-[1440px]">
                <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9b7b19]">
                            Customer feedback
                        </p>
                        <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
                            Verified reviews
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black/70">
                        <span className="text-lg text-[#d4a93a]">★★★★★</span>
                        <span className="font-medium text-black">4.7</span>
                    </div>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="reviews-swiper"
                >
                    {reviews.map(({ name, title, text, rating }) => (
                        <SwiperSlide key={name}>
                            <article className="h-full rounded-[22px] border border-black/[0.08] bg-white p-6 shadow-[0_18px_30px_rgba(19,19,19,0.04)]">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-medium text-black">{name}</p>
                                        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-black/40">
                                            Verified buyer
                                        </p>
                                    </div>
                                    <div className="text-sm text-[#d4a93a]" aria-label={`${rating} out of 5 stars`}>
                                        {"★".repeat(rating)}
                                    </div>
                                </div>

                                <h3 className="mt-5 text-lg font-medium tracking-[-0.04em] text-black">
                                    {title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-black/60">
                                    “{text}”
                                </p>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <div className="mt-5 rounded-md">
                <ContactSection />
            </div>

        </main>
    );
}
