
"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { categories, products } from "../../../data/data";

function slugify(value = "") {
    return value
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function ProductsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryParam = searchParams.get("category");

    const [activeCategory, setActiveCategory] = useState("All Products");
    const [searchQuery, setSearchQuery] = useState("");

    // Synchronize the selected category whenever the URL changes.
    useEffect(() => {
        if (!categoryParam || categoryParam === "all") {
            setActiveCategory("All Products");
            return;
        }

        const matchedCategory = categories.find(
            (category) =>
                category !== "All Products" &&
                slugify(category) === slugify(categoryParam)
        );

        setActiveCategory(matchedCategory || "All Products");
    }, [categoryParam]);

    // Update the URL when a category is selected.
    const handleCategoryChange = (category) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category === "All Products") {
            params.delete("category");
        } else {
            params.set("category", slugify(category));
        }

        const queryString = params.toString();

        router.push(
            queryString ? `/products?${queryString}` : "/products",
            { scroll: false }
        );
    };

    // Filter products by category and search query.
    const visibleProducts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "All Products" ||
                slugify(product.category) === slugify(activeCategory);

            const searchableText = [
                product.name,
                product.category,
                product.description,
                product.id,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                !query || searchableText.includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const getCategoryCount = (category) => {
        if (category === "All Products") {
            return products.length;
        }

        return products.filter(
            (product) =>
                slugify(product.category) === slugify(category)
        ).length;
    };

    const handleResetFilters = () => {
        setSearchQuery("");
        handleCategoryChange("All Products");
    };

    return (
        <main className="min-h-screen bg-[#fbfaf8] pb-10 pt-20 text-[#171717] sm:pt-24 lg:pb-16 lg:pt-28">

            {/* HERO */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-9 flex w-full flex-col justify-between gap-8 px-5 py-8 sm:mb-12 sm:flex-row sm:items-end sm:px-8 lg:px-16 lg:py-12"
            >
                <div className="w-full">
                    <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-black/55">
                        ASTRIDE / SEATING COLLECTION
                    </p>

                    <h1 className="text-4xl font-medium tracking-[-0.065em] sm:text-5xl lg:text-7xl">
                        Our products
                    </h1>

                    <p className="mt-4 max-w-xl text-xs leading-6 text-black/65 sm:text-sm">
                        Explore seating for offices, study spaces,
                        gaming setups, and more.
                    </p>
                </div>

                {/* SEARCH */}
                <label className="flex h-12 w-full shrink-0 items-center gap-3 rounded-full border border-black/10 bg-white px-4 sm:max-w-[310px]">
                    <Search
                        size={16}
                        strokeWidth={1.6}
                        className="shrink-0 text-black/45"
                        aria-hidden="true"
                    />

                    <span className="sr-only">Search products</span>

                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(event.target.value)
                        }
                        placeholder="Search products"
                        className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-black/40"
                    />
                </label>
            </motion.header>

            {/* CATALOGUE */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-7 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10">

                    {/* CATEGORY SIDEBAR */}
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <h2 className="mb-4 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-black/45 lg:block">
                            Shop by category
                        </h2>

                        <nav
                            aria-label="Product categories"
                            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
                        >
                            {categories.map((category) => {
                                const count = getCategoryCount(category);
                                const isActive =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            handleCategoryChange(category)
                                        }
                                        aria-pressed={isActive}
                                        className={`flex shrink-0 items-center justify-between gap-5 rounded-full border px-4 py-3 text-left text-xs transition lg:w-full lg:rounded-xl ${
                                            isActive
                                                ? "border-[#171717] bg-[#171717] text-white"
                                                : "border-black/[0.07] bg-white text-black/60 hover:border-black/25 hover:text-black"
                                        }`}
                                    >
                                        <span>{category}</span>

                                        <span
                                            className={
                                                isActive
                                                    ? "text-white/55"
                                                    : "text-black/35"
                                            }
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

                    {/* PRODUCTS GRID */}
                    <section
                        aria-label="Product catalogue"
                        className="min-w-0 bg-white p-3 sm:p-5"
                    >
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <p
                                aria-live="polite"
                                className="text-[11px] uppercase tracking-[0.14em] text-black/50"
                            >
                                {visibleProducts.length}{" "}
                                {visibleProducts.length === 1
                                    ? "product"
                                    : "products"}

                                {activeCategory !== "All Products" && (
                                    <span> / {activeCategory}</span>
                                )}
                            </p>

                            <p className="hidden text-[11px] uppercase tracking-[0.14em] text-black/55 sm:block">
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
                                            key={product.id ?? product.slug}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.35,
                                                delay: index * 0.045,
                                            }}
                                            className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white"
                                        >
                                            {/* IMAGE */}
                                            <Link
                                                href={`/products/${product.slug}`}
                                                aria-label={`View ${product.name}`}
                                                className="block"
                                            >
                                                <div className="relative aspect-[1.16] overflow-hidden bg-[#f4f3f0]">
                                                    <Image
                                                        src={product.defaultImage}
                                                        alt={
                                                            product.alt ||
                                                            product.name
                                                        }
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                        className="object-contain p-5 transition duration-500 ease-out group-hover:scale-[1.045] sm:p-6"
                                                    />

                                                    <span className="absolute left-4 top-4 rounded-full border border-black/[0.06] bg-[#b4e717] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-black">
                                                        {product.category}
                                                    </span>
                                                </div>
                                            </Link>

                                            {/* DETAILS */}
                                            <div className="px-4 py-4">
                                                <p className="text-[9px] uppercase tracking-[0.16em] text-black/35">
                                                    ASTRIDE /{" "}
                                                    <span className="text-[#8ba900]">
                                                        {product.id}
                                                    </span>
                                                </p>

                                                <h3 className="mt-2 text-lg font-medium tracking-[-0.045em]">
                                                    {product.name}
                                                </h3>

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
                                        onClick={handleResetFilters}
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

// Suspense supports useSearchParams during Next.js prerendering.
export default function Products() {
    return (
        <Suspense
            fallback={
                <main className="min-h-screen bg-[#fbfaf8] px-5 pt-32">
                    <div className="mx-auto max-w-7xl animate-pulse">
                        <div className="h-10 w-64 rounded bg-black/5" />
                        <div className="mt-8 h-64 rounded-2xl bg-black/5" />
                    </div>
                </main>
            }
        >
            <ProductsContent />
        </Suspense>
    );
}
