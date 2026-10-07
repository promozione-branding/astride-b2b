"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const COLLECTIONS = {
    ergonomic: {
        id: "ergonomic",
        title: "Ergonomic Chairs",
        image: "/bento/Sunlit Modern Ergonomic Office Chair (1).png",
        hotspots: [
            {
                id: "ergonomic-back",
                x: 57,
                y: 32,
                title: "Breathable Mesh",
                description:
                    "Flexible mesh support keeps your back cool and comfortable.",
            },
            {
                id: "ergonomic-seat",
                x: 50,
                y: 63,
                title: "Ergonomic Comfort",
                description:
                    "Designed for comfortable long-hour working.",
            },
            {
                id: "ergonomic-base",
                x: 57,
                y: 91,
                title: "Smooth Mobility",
                description:
                    "Stable five-wheel base for effortless movement.",
            },
        ],
    },

    executive: {
        id: "executive",
        title: "Executive Chairs",
        image: "/bento/Modern Ergonomic Chair Workspace (1).png",
        hotspots: [
            {
                id: "executive-head",
                x: 58,
                y: 20,
                title: "Premium Headrest",
                description:
                    "Extra cushioning for enhanced head and neck support.",
            },
            {
                id: "executive-seat",
                x: 38,
                y: 62,
                title: "Premium Leather Finish",
                description:
                    "Luxurious comfort with a professional look.",
            },
            {
                id: "executive-arm",
                x: 77,
                y: 65,
                title: "Padded Armrests",
                description:
                    "Comfortable support designed for extended work sessions.",
            },
        ],
    },

    visitor: {
        id: "visitor",
        title: "Visitor Chairs",
        image: "/bento/Modern Black Mesh Office Chair (2).png",
        hotspots: [
            {
                id: "visitor-back",
                x: 51,
                y: 40,
                title: "Ergonomic Back",
                description:
                    "Contoured back support for comfortable seating.",
            },
            {
                id: "visitor-seat",
                x: 51,
                y: 64,
                title: "Comfort Seating",
                description:
                    "Supportive cushioning for meetings and reception areas.",
            },
        ],
    },

    bar: {
        id: "bar",
        title: "Bar Stools",
        image: "/bento/Modern Black Bar Stool in Warm Kitchen (1).png",
        hotspots: [
            {
                id: "bar-seat",
                x: 52,
                y: 46,
                title: "Cushioned Seat",
                description:
                    "Comfortable padded seating with a refined finish.",
            },
            {
                id: "bar-height",
                x: 55,
                y: 79,
                title: "Adjustable Height",
                description:
                    "Easy height adjustment for different counters.",
            },
        ],
    },

    conference: {
        id: "conference",
        title: "Conference Chairs",
        image: "/bento/Modern Black Mesh Chair in Sunlit Office (1).png",
        hotspots: [
            {
                id: "conference-back",
                x: 50,
                y: 48,
                title: "Meeting Comfort",
                description:
                    "Built for comfortable conference and meeting sessions.",
            },
            {
                id: "conference-base",
                x: 58,
                y: 91,
                title: "Stable Base",
                description:
                    "Strong construction for everyday office use.",
            },
        ],
    },

    workspace: {
        id: "workspace",
        title: "Create Better Workspaces",
        image: "/bento/Modern Ergonomic Chair in Warm Home Office (1).png",
        hotspots: [
            {
                id: "workspace-back",
                x: 59,
                y: 43,
                title: "Posture Support",
                description:
                    "Designed to encourage a comfortable working posture.",
            },
            {
                id: "workspace-arm",
                x: 66,
                y: 65,
                title: "Adjustable Support",
                description:
                    "Flexible arm support for personalized comfort.",
            },
            {
                id: "workspace-base",
                x: 64,
                y: 88,
                title: "Easy Movement",
                description:
                    "Smooth rolling base for dynamic workspaces.",
            },
        ],
    },

    mesh: {
        id: "mesh",
        title: "Mesh Chairs",
        image: "/bento/Modern Ergonomic Chair in Stylish Office (1).png",
        hotspots: [
            {
                id: "mesh-back",
                x: 51,
                y: 42,
                title: "Breathable Mesh",
                description:
                    "Airflow-focused mesh keeps seating comfortable.",
            },
            {
                id: "mesh-seat",
                x: 51,
                y: 68,
                title: "Comfort Seat",
                description:
                    "Supportive cushioning for everyday productivity.",
            },
        ],
    },

    waiting: {
        id: "waiting",
        title: "Waiting Area Seats",
        image: "/bento/Luxurious Café Chair in Warm Interior (1).png",
        hotspots: [
            {
                id: "waiting-seat",
                x: 50,
                y: 63,
                title: "Reception Seating",
                description:
                    "Elegant and comfortable seating for waiting areas.",
            },
        ],
    },
};

function CollectionCard({
    item,
    height,
    darkText = false,
}) {
    const [activeHotspot, setActiveHotspot] =
        useState(null);

    return (
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
                once: false,
                amount: 0.15,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full overflow-visible"
            style={{
                height,
            }}
        >
            <div
                className="
                    group
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[16px]
                    bg-[#f8f7f3] 
                "
            >
                {/* IMAGE */}
                <motion.img
                    src={item.image}
                    alt={item.title}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                    "
                    initial={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                {/* IMAGE OVERLAY */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/15
                        via-transparent
                        to-black/10
                    "
                />

                {/* TITLE */}
                <div
                    className={`
                        absolute
                        left-7
                        top-7
                        z-20
                        max-w-[170px]
                    `}
                >
                    <h3
                        className={`
                            text-[20px]
                            font-medium
                            leading-[1.05]
                            tracking-[-0.035em]
                            md:text-[23px]
                            ${darkText
                                ? "text-[#171717]"
                                : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                            }
                        `}
                    >
                        {item.title}
                    </h3>

                    <div
                        className={`
                            mt-3
                            h-[1px]
                            w-7
                            ${darkText
                                ? "bg-[#171717]"
                                : "bg-white"
                            }
                        `}
                    />
                </div>

                {/* HOTSPOTS */}
                {item.hotspots.map((hotspot) => {
                    const active =
                        activeHotspot === hotspot.id;

                    return (
                        <div
                            key={hotspot.id}
                            className="
                                absolute
                                z-30
                            "
                            style={{
                                left: `${hotspot.x}%`,
                                top: `${hotspot.y}%`,
                            }}
                            onMouseEnter={() =>
                                setActiveHotspot(
                                    hotspot.id
                                )
                            }
                            onMouseLeave={() =>
                                setActiveHotspot(null)
                            }
                        >
                            {/* DOT */}
                            <motion.button
                                type="button"
                                onClick={() =>
                                    setActiveHotspot(
                                        active
                                            ? null
                                            : hotspot.id
                                    )
                                }
                                whileHover={{
                                    scale: 1.12,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                className="
                                    relative
                                    flex
                                    h-[34px]
                                    w-[34px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    shadow-[0_5px_18px_rgba(0,0,0,0.18)]
                                "
                            >
                                {/* PULSE */}
                                <motion.span
                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        border
                                        border-white
                                    "
                                    animate={{
                                        scale: [
                                            1,
                                            1.35,
                                            1,
                                        ],
                                        opacity: [
                                            0.8,
                                            0,
                                            0.8,
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                />

                                <Plus
                                    size={15}
                                    strokeWidth={2.2}
                                    className="
                                        relative
                                        z-10
                                        text-[#161616]
                                    "
                                />
                            </motion.button>

                            {/* DESCRIPTION */}
                            <AnimatePresence>
                                {active && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.95,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 8,
                                            scale: 0.97,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        className="
                                            absolute
                                            left-1/2
                                            top-[45px]
                                            z-[999]
                                            w-[260px]
                                            -translate-x-1/2
                                            rounded-[15px]
                                            bg-white
                                            p-3
                                            shadow-[0_20px_50px_rgba(0,0,0,0.2)]
                                        "
                                    >
                                        <div className="flex gap-3">
                                            <div className="min-w-0 flex-1">
                                                <h4
                                                    className="
                                                        text-[13px]
                                                        font-semibold
                                                        text-[#171717]
                                                    "
                                                >
                                                    {
                                                        hotspot.title
                                                    }
                                                </h4>

                                                <p
                                                    className="
                                                        mt-1
                                                        text-[11px]
                                                        leading-[1.5]
                                                        text-[#777]
                                                    "
                                                >
                                                    {
                                                        hotspot.description
                                                    }
                                                </p>
                                            </div>

                                            <div
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    self-end
                                                    rounded-full
                                                    bg-[#a56d4b]
                                                    text-white
                                                "
                                            >
                                                <ArrowUpRight
                                                    size={14}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default function ProductCollections() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#f8f7f3]
                px-4
                py-15
                md:px-8
                lg:px-10
                xl:px-12
            "
        >
            <div className="mx-auto max-w-[1500px]">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mb-8 text-center"
                >
                    <p
                        className="
                            text-[11px]
                            uppercase
                            tracking-[0.45em]
                            text-[#a56d4b]
                        "
                    >
                        Product Collections
                    </p>

                    <h2
                        className="
                            text-[38px]
                            font-medium
                            leading-[1.05]
                            tracking-[-0.045em]
                            text-[#171717]
                            md:text-[55px]
                            lg:text-[62px]
                        "
                    >
                        Explore{" "}
                        <span className="text-[#a56d4b]">
                            product collections
                        </span>
                    </h2>
                </motion.div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-4

                        md:grid-cols-12
                        md:gap-[14px]

                        lg:gap-[14px]
                    "
                >

                    {/* ================= */}
                    {/* COLUMN 1 = 3 COLS */}
                    {/* ================= */}

                    <div
                        className="
                            md:col-span-3
                            flex
                            flex-col
                            gap-[14px]
                        "
                    >
                        {/* ERGONOMIC */}
                        <CollectionCard
                            item={COLLECTIONS.ergonomic}
                            height="492px"
                        />

                        {/* CONFERENCE */}
                        <CollectionCard
                            item={COLLECTIONS.conference}
                            height="318px"
                        />
                    </div>


                    {/* ================= */}
                    {/* COLUMN 2 = 4 COLS */}
                    {/* ================= */}

                    <div
                        className="
                            md:col-span-4
                            flex
                            flex-col
                            gap-[14px]
                        "
                    >
                        {/* EXECUTIVE */}
                        <CollectionCard
                            item={COLLECTIONS.executive}
                            height="386px"
                        />

                        {/* WORKSPACE */}
                        <CollectionCard
                            item={COLLECTIONS.workspace}
                            height="425px"
                        />
                    </div>


                    {/* ================= */}
                    {/* COLUMN 3 = 3 COLS */}
                    {/* ================= */}

                    <div
                        className="
                            md:col-span-3
                            flex
                            flex-col
                            gap-[14px]
                        "
                    >
                        {/* VISITOR */}
                        <CollectionCard
                            item={COLLECTIONS.visitor}
                            height="445px"
                        />

                        {/* MESH */}
                        <CollectionCard
                            item={COLLECTIONS.mesh}
                            height="367px"
                        />
                    </div>


                    {/* ================= */}
                    {/* COLUMN 4 = 2 COLS */}
                    {/* ================= */}

                    <div
                        className="
                            md:col-span-2
                            flex
                            flex-col
                            gap-[14px]
                        "
                    >
                        {/* BAR */}
                        <CollectionCard
                            item={COLLECTIONS.bar}
                            height="492px"
                        />

                        {/* WAITING */}
                        <CollectionCard
                            item={COLLECTIONS.waiting}
                            height="318px"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}