"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const WORD = "ASTRIDE";

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -90,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.25 + i * 0.12,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ChairHero({
  chairSrc = "/categories/4.webp",
}) {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });
  return (
    <section ref={sectionRef} className="relative min-h-[700px] h-[100svh] border border-gray-200 w-full overflow-hidden bg-[#f5f5f3] text-[#111111]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* Main light gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f4f4f2] to-[#dededb]" />

        {/* Soft top gradient */}
        <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/95 via-white/60 to-transparent" />

        {/* Soft black/grey glow */}
        <div className="absolute right-[8%] top-[15%] h-[450px] w-[450px] rounded-full bg-[#111111]/[0.035] blur-[120px]" />

        {/* Bottom soft gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#d9d9d6]/70 to-transparent" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* HEADER LABEL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 top-8 z-30 flex items-center gap-3 sm:left-12 lg:left-20"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20">
          <span className="h-3 w-3 rounded-full bg-black" />
        </span>

        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-black">
            ASTRIDE
          </p>

          <p className="text-[9px] tracking-[0.25em] text-black/45">
            SEATING COLLECTION
          </p>
        </div>
      </motion.div>

      {/* TOP RIGHT BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute right-6 top-8 z-30 sm:right-12 lg:right-20"
      >
        <Link
          href="/contact"
          className="group flex items-center gap-3 rounded-full border border-black/15 bg-white/50 py-2 pl-5 pr-2 text-xs font-medium text-black backdrop-blur-md transition-all hover:bg-black hover:text-white"
        >
          Let's Talk

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight size={17} />
          </span>
        </Link>
      </motion.div>

      {/* MAIN HEADING */}
      <div className="absolute left-0 right-0 top-[23%] z-10 flex justify-center overflow-hidden px-2 sm:top-[10%]">
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex select-none whitespace-nowrap font-black leading-none tracking-[-0.07em] text-[#111111]"
          style={{
            fontSize: "clamp(75px, 20vw, 290px)",
          }}
          aria-label="ASTRIDE"
        >
          {WORD.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* CHAIR IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.55,
          y: 120,
        }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.55, y: 120 }
        }
        transition={{
          delay: 1.1,
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
      >
        {/* Ground shadow */}
        <div className="absolute bottom-[8%] left-1/2 h-12 w-[55%] -translate-x-1/2 rounded-[100%] bg-black/15 blur-2xl sm:bottom-[7%] sm:w-[40%]" />

        {/* Chair */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mt-[12%] h-[65vh] w-[90vw] max-w-[850px] sm:mt-[14%] sm:h-[75vh]"
        >
          <Image
            src={chairSrc}
            alt="Premium black ASTRIDE chair"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 850px"
            className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.22)]"
          />
        </motion.div>
      </motion.div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ delay: 1.5, duration: 0.9 }}
        className="absolute bottom-[13%] left-6 z-30 max-w-[270px] sm:left-12 sm:bottom-[3%] lg:left-20 lg:max-w-[350px]"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-[2px] w-8 bg-black" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#777]">
            Designed for Living
          </span>
        </div>

        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Sit Better.
          <br />
          <span className="text-black">
            Live Better.
          </span>
        </h2>

        <p className="mt-4 text-xs leading-6 text-[#666] sm:text-sm">
          Discover thoughtfully designed chairs that bring
          comfort, character, and timeless elegance to your space.
        </p>

        <Link
          href="/products"
          className="group mt-6 inline-flex items-center gap-4 border-b border-black/30 pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-black hover:text-black"
        >
          Explore Collection

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>

      {/* RIGHT PRODUCT DETAILS */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-[15%] right-6 z-30 text-right sm:right-12 lg:right-20"
      >
        <div className="mb-3 flex items-center justify-end gap-2">
          <Sparkles size={14} className="text-black" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777]">
            Premium Series
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">
          THE BLACK
        </h3>

        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#888]">
          Signature Edition
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <span className="h-3 w-3 rounded-full bg-black ring-2 ring-black ring-offset-2" />
          <span className="h-3 w-3 rounded-full border border-black bg-white" />
          <span className="h-3 w-3 rounded-full bg-[#d8d8d8]" />
        </div>
      </motion.div>
    </section>
  );
}