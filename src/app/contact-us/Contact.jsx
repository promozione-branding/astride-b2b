"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const address =
    "J-113 & 114, DSIIDC Industrial Area, Sector 4, Bawana, New Delhi, Delhi-110039";

export default function Contact() {
    const reduceMotion = useReducedMotion();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const topic = formData.get("topic");
        const message = formData.get("message");
        const recipient = topic === "Product / bulk enquiry" ? "sales@astride.in" : "support@astride.in";
        const subject = `${topic || "Contact enquiry"} from ${name}`;
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "Not provided"}`,
            `Topic: ${topic}`,
            "",
            message,
        ].join("\n");

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <main className="overflow-hidden bg-[#fbfaf8] text-[#22180f]">
            <section className="relative px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#f0ece5] sm:h-[560px] sm:w-[560px]" />
                <div className="relative mx-auto max-w-[1320px]">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1fr_0.7fr]"
                    >
                        <div>
                            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#8e7557] sm:text-xs">
                                Get in touch / ASTRIDE
                            </p>
                            <h1 className="font-serif text-[clamp(3.8rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                                Let’s talk
                                <br />
                                <span className="italic text-[#927551]">comfort.</span>
                            </h1>
                        </div>
                        <p className="max-w-[390px] pb-1 text-sm leading-7 text-[#665d52] lg:justify-self-end">
                            Questions about our chairs, an order, or a business enquiry? Our team is
                            here to help you find the right answer.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                        <motion.aside
                            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[26px] bg-[#201b16] p-7 text-white sm:p-9 lg:p-10"
                        >
                            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/[0.08]" />
                            <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/[0.06]" />
                            <p className="relative z-10 text-[10px] uppercase tracking-[0.22em] text-white/45">
                                ASTRIDE / India
                            </p>
                            <h2 className="relative z-10 mt-8 max-w-[360px] font-serif text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                                We’d love to
                                <br />
                                hear from you.
                            </h2>

                            <div className="relative z-10 mt-10 space-y-7">
                                <ContactDetail icon={MapPin} label="Visit our office">
                                    <a
                                        href="https://maps.google.com/?q=J-113%20%26%20114%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%204%2C%20Bawana%2C%20New%20Delhi%2C%20Delhi-110039"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-colors hover:text-white"
                                    >
                                        {address}
                                    </a>
                                </ContactDetail>
                                <ContactDetail icon={Phone} label="Call us">
                                    <a href="tel:+917311164111" className="transition-colors hover:text-white">
                                        +91-7311164111
                                    </a>
                                </ContactDetail>
                                <ContactDetail icon={Mail} label="Email us">
                                    <a href="mailto:support@astride.in" className="block transition-colors hover:text-white">
                                        support@astride.in
                                    </a>
                                    <a href="mailto:sales@astride.in" className="mt-1 block transition-colors hover:text-white">
                                        sales@astride.in
                                    </a>
                                </ContactDetail>
                            </div>

                            <div className="pointer-events-none absolute -bottom-4 -right-5 h-[220px] w-[220px] opacity-80 sm:h-[280px] sm:w-[280px]">
                                <Image
                                    src="/5.png"
                                    alt="ASTRIDE chair"
                                    fill
                                    sizes="(max-width: 640px) 220px, 280px"
                                    className="object-contain"
                                />
                            </div>
                            <p className="relative z-10 mt-auto pt-12 text-[9px] uppercase tracking-[0.2em] text-white/35">
                                Thoughtful seating, made for everyday
                            </p>
                        </motion.aside>

                        <motion.section
                            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                            className="rounded-[26px] border border-black/[0.07] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.05)] sm:p-9 lg:p-10"
                        >
                            <div className="mb-8 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#8e7557]">
                                        Send us a message
                                    </p>
                                    <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                                        How can we help?
                                    </h2>
                                </div>
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#201b16] text-white">
                                    <ArrowUpRight size={18} strokeWidth={1.6} />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid gap-7 sm:grid-cols-2">
                                    <FormField label="Your name" name="name" placeholder="Full name" required />
                                    <FormField label="Email address" name="email" type="email" placeholder="you@example.com" required />
                                </div>
                                <div className="grid gap-7 sm:grid-cols-2">
                                    <FormField label="Phone number" name="phone" type="tel" placeholder="+91" />
                                    <div>
                                        <label htmlFor="contact-topic" className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#777]">
                                            What can we help with?
                                        </label>
                                        <select
                                            id="contact-topic"
                                            name="topic"
                                            defaultValue="Product / bulk enquiry"
                                            className="w-full border-b border-black/15 bg-transparent py-3 text-[13px] text-[#332a21] outline-none transition-colors focus:border-[#927551]"
                                        >
                                            <option>Product / bulk enquiry</option>
                                            <option>Order support</option>
                                            <option>Warranty</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#777]">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us a little about what you need..."
                                        required
                                        className="w-full resize-y border-b border-black/15 bg-transparent py-3 text-[13px] text-[#332a21] outline-none placeholder:text-[#aaa] transition-colors focus:border-[#927551]"
                                    />
                                </div>
                                <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="max-w-[270px] text-[10px] leading-[1.7] text-[#8b837a]">
                                        This opens your email app with your message ready to send.
                                    </p>
                                    <button
                                        type="submit"
                                        className="group inline-flex w-full items-center justify-center gap-4 bg-[#6e5436] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#4d3925] sm:w-auto"
                                    >
                                        Send an enquiry
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#201b16] transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight size={14} />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </motion.section>
                    </div>
                </div>
            </section>

            <motion.section
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10"
            >
                <div className="mx-auto max-w-[1320px]">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8e7557]">Find us</p>
                            <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">Visit ASTRIDE</h2>
                        </div>
                        <p className="max-w-[420px] text-xs leading-6 text-[#766d63]">{address}</p>
                    </div>
                    <div className="h-[320px] overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#efede9] sm:h-[420px]">
                        <iframe
                            title="Map showing the ASTRIDE office in Bawana, New Delhi"
                            src="https://maps.google.com/maps?q=J-113%20%26%20114%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%204%2C%20Bawana%2C%20New%20Delhi%2C%20Delhi-110039&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0 grayscale-[0.15]"
                        />
                    </div>
                </div>
            </motion.section>
        </main>
    );
}

function ContactDetail({ icon: Icon, label, children }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70">
                <Icon size={16} strokeWidth={1.6} />
            </div>
            <div className="min-w-0 pt-0.5">
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/40">{label}</p>
                <div className="mt-1.5 break-words text-[12px] leading-[1.8] text-white/75">{children}</div>
            </div>
        </div>
    );
}

function FormField({ label, name, type = "text", placeholder, required = false }) {
    return (
        <div>
            <label htmlFor={`contact-${name}`} className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#777]">
                {label}
            </label>
            <input
                id={`contact-${name}`}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                autoComplete={name === "name" ? "name" : name === "email" ? "email" : name === "phone" ? "tel" : undefined}
                className="w-full border-b border-black/15 bg-transparent py-3 text-[13px] text-[#332a21] outline-none placeholder:text-[#aaa] transition-colors focus:border-[#927551]"
            />
        </div>
    );
}
