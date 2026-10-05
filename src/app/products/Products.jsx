"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";

const products = [
    {
        id: "01",
        slug: "staff-chair",
        name: "Staff Chair",
        category: "Staff Chairs",
        description:
            "A practical seating solution for modern offices, workstations, institutions, and commercial environments.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218157137-staff-chair-Black-e127.webp",
        alt: "ASTRIDE black staff chair",
    },
    {
        id: "02",
        slug: "mesh-back-staff-chair",
        name: "Mesh Back Staff Chair",
        category: "Staff Chairs",
        description:
            "A versatile mesh-back office chair designed for comfortable, productive everyday work.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1781251090021-mesh-back-staff-chair-modular-furn-Black-83ac.webp",
        alt: "ASTRIDE black mesh-back staff chair",
    },
    {
        id: "03",
        slug: "mavic-high-back-office-chair",
        name: "Mavic High Back",
        category: "Office Chairs",
        description:
            "An ergonomic high-back office chair with adjustable support for the working day.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785413863849-high-back-office-chair-Black-6889.webp",
        alt: "ASTRIDE Mavic high-back office chair",
    },
    {
        id: "04",
        slug: "flex-pro-office-chair",
        name: "Flex Pro",
        category: "Office Chairs",
        description:
            "A premium ergonomic chair designed for flexibility and support at work or at home.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785222040553-flex-pro-office-chair-with-3d-adjustable-headrest-2d-adjustable-soft-armest-Black-0992.webp",
        alt: "ASTRIDE Flex Pro office chair",
    },
    {
        id: "05",
        slug: "gaming-chair",
        name: "Gaming Chair",
        category: "Gaming Chairs",
        description:
            "A supportive gaming chair for long sessions at your desk, setup, or workstation.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785180491676-gaming-chair-with-adjustable-armrest-Red-a842.webp",
        alt: "ASTRIDE gaming chair with adjustable armrests",
    },
    {
        id: "06",
        slug: "high-back-gaming-chair",
        name: "High Back Gaming Chair",
        category: "Gaming Chairs",
        description:
            "A high-back chair designed for gaming, creative work, and extended time at your desk.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785221322764-high-back-gaming-chair-Black-d3b1.webp",
        alt: "ASTRIDE black high-back gaming chair",
    },
    {
        id: "07",
        slug: "airsense-mid-back-chair",
        name: "Airsense Mid Back",
        category: "Study Chairs",
        description:
            "An ergonomic mid-back chair for focused study, home working, and everyday use.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785216199963-astride-airsense-mid-back-office-chair-for-work-from-homestudy-chair-height-adjustable-revolving-chair-with-tilt-lock-heavy-duty-metal-base-black-Black-ec7a.webp",
        alt: "ASTRIDE Airsense mid-back study chair",
    },
    {
        id: "08",
        slug: "ace-mid-back-chair",
        name: "Ace Mid Back",
        category: "Study Chairs",
        description:
            "A versatile mid-back chair for study rooms, home offices, and professional workspaces.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785218360619-astride-ace-mid-back-office-chair-for-work-from-homestudy-chair-height-adjustable-revolving-chair-with-tilt-lock-heavy-duty-nylon-base-Black-26d1.webp",
        alt: "ASTRIDE Ace mid-back study chair",
    },
    {
        id: "09",
        slug: "adjustable-swivel-bar-stool",
        name: "Adjustable Swivel Stool",
        category: "Bar Stools & Cafe Chairs",
        description:
            "A contemporary adjustable stool for kitchen counters, cafes, bars, and commercial spaces.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785219416299-adjustable-swivel-bar-stool-Black-1773.webp",
        alt: "ASTRIDE adjustable swivel bar stool",
    },
    {
        id: "10",
        slug: "rapid-modern-high-bar-chair",
        name: "Rapid Modern High Bar Chair",
        category: "Bar Stools & Cafe Chairs",
        description:
            "A modern high bar chair for dining areas, counters, cafes, and hospitality spaces.",
        image:
            "https://pub-c853b438c28f4099b37f01f2c65a7031.r2.dev/products/1785220469709-rapid-modern-high-bar-chair-for-dining-and-bar-counter-Black-a2b8.webp",
        alt: "ASTRIDE Rapid Modern high bar chair",
    },
];

const categories = [
    "All Products",
    "Staff Chairs",
    "Office Chairs",
    "Gaming Chairs",
    "Study Chairs",
    "Bar Stools & Cafe Chairs",
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [searchQuery, setSearchQuery] = useState("");

    const visibleProducts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "All Products" ||
                product.category === activeCategory;
            const matchesSearch =
                !query ||
                `${product.name} ${product.category} ${product.description}`
                    .toLowerCase()
                    .includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-[#f2f3f3] px-4 pb-10 pt-15 text-[#171717] sm:px-6 lg:px-10 lg:pb-16 lg:pt-20">
            <div className="mx-auto max-w-[1440px]">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-9 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end"
                >
                    <div>
                        <h1 className="text-4xl font-medium tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                            Our products
                        </h1>
                        <p className="mt-4 max-w-xl text-xs leading-6 text-black/55 sm:text-sm">
                            Explore seating for offices, study spaces, gaming setups,
                            and more.
                        </p>
                    </div>

                    <label className="flex h-12 w-full items-center gap-3 rounded-full border border-black/10 bg-white px-4 sm:max-w-[310px]">
                        <Search
                            aria-hidden="true"
                            size={16}
                            strokeWidth={1.6}
                            className="shrink-0 text-black/45"
                        />
                        <span className="sr-only">Search products</span>
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="Search products"
                            className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-black/40"
                        />
                    </label>
                </motion.header>

                <div className="grid gap-7 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10">
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <h2 className="mb-4 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-black/45 lg:block">
                            Shop by category
                        </h2>
                        <nav
                            aria-label="Product categories"
                            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
                        >
                            {categories.map((category) => {
                                const count =
                                    category === "All Products"
                                        ? products.length
                                        : products.filter(
                                            (product) =>
                                                product.category === category,
                                        ).length;
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        aria-pressed={isActive}
                                        className={`flex shrink-0 items-center justify-between gap-5 rounded-full border px-4 py-3 text-left text-[10px] transition lg:w-full lg:rounded-xl lg:px-4 ${isActive
                                            ? "border-[#171717] bg-[#171717] text-white"
                                            : "border-black/[0.07] bg-white text-black/60 hover:border-black/25 hover:text-black"
                                            }`}
                                    >
                                        <span>{category}</span>
                                        <span
                                            className={`text-[9px] ${isActive
                                                ? "text-white/55"
                                                : "text-black/35"
                                                }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                        <p className="mt-6 hidden text-[10px] leading-5 text-black/40 lg:block">
                            Looking for seating for your business?{" "}
                            <Link
                                href="/contact-us"
                                className="font-medium text-black underline underline-offset-4 transition hover:text-[#9b7b19]"
                            >
                                Talk to our team
                            </Link>
                            .
                        </p>
                    </aside>

                    <section aria-label="Product catalogue" className="min-w-0 bg-white p-4">
                        <div className="mb-5 flex items-center justify-between">
                            <p
                                aria-live="polite"
                                className="text-[10px] uppercase tracking-[0.14em] text-black/50"
                            >
                                {visibleProducts.length}{" "}
                                {visibleProducts.length === 1 ? "product" : "products"}
                                {activeCategory !== "All Products" && (
                                    <span> / {activeCategory}</span>
                                )}
                            </p>
                            <p className="hidden text-[9px] uppercase tracking-[0.14em] text-black/35 sm:block">
                                ASTRIDE seating collection
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {visibleProducts.length > 0 ? (
                                <motion.div
                                    key={`${activeCategory}-${searchQuery}`}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                                >
                                    {visibleProducts.map((product, index) => (
                                        <motion.article
                                            key={product.id}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.35,
                                                delay: index * 0.045,
                                            }}
                                            className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white"
                                        >
                                            <div className="relative aspect-[1.16] overflow-hidden bg-[#f4f3f0]">
                                                <Image
                                                    src={product.image}
                                                    alt={product.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                    className="object-contain p-5 transition duration-500 ease-out group-hover:scale-[1.045] sm:p-6"
                                                />
                                                <span className="absolute left-4 top-4 rounded-full border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-black/55 backdrop-blur">
                                                    {product.category}
                                                </span>
                                            </div>
                                            <div className="px-4 py-3">
                                                <p className="text-[9px] uppercase tracking-[0.16em] text-black/35">
                                                    ASTRIDE / {product.id}
                                                </p>
                                                <h3 className="mt-2 text-lg font-medium tracking-[-0.045em]">
                                                    {product.name}
                                                </h3>
                                                <p className="mt-2 min-h-[48px] text-[11px] leading-5 text-black/55">
                                                    {product.description}
                                                </p>
                                                <Link
                                                    href="/contact-us"
                                                    aria-label={`Enquire about ${product.name}`}
                                                    className="group/link mt-5 inline-flex items-center gap-2 border-b border-black/15 pb-1.5 text-[9px] font-medium uppercase tracking-[0.14em] transition hover:border-[#9b7b19] hover:text-[#9b7b19]"
                                                >
                                                    Enquire about this chair
                                                    <ArrowUpRight
                                                        size={13}
                                                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                                    />
                                                </Link>
                                            </div>
                                        </motion.article>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="rounded-2xl border border-black/[0.06] bg-white px-6 py-16 text-center"
                                >
                                    <h2 className="text-lg font-medium tracking-[-0.04em]">
                                        No matching products
                                    </h2>
                                    <p className="mt-2 text-xs text-black/50">
                                        Try another search or browse all categories.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory("All Products");
                                            setSearchQuery("");
                                        }}
                                        className="mt-5 rounded-full bg-[#171717] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#c9a227] hover:text-black"
                                    >
                                        Show all products
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </section>
                </div>
            </div>
        </main>
    );
}
