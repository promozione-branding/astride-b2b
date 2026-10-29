
"use client";

import Image from "next/image";
import { useState } from "react";
import { useReducedMotion, motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const address =
    "J-113 & 114, DSIIDC Industrial Area, Sector 4, Bawana, New Delhi, Delhi-110039";

export default function Contact() {
    const reduceMotion = useReducedMotion();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (loading) return;

        const formElement = event.currentTarget;
        const browserFormData = new FormData(formElement);

        const name =
            browserFormData.get("name")?.toString().trim() || "";
        const email =
            browserFormData.get("email")?.toString().trim() || "";
        const phone =
            browserFormData.get("phone")?.toString().trim() || "";
        const topic =
            browserFormData.get("topic")?.toString().trim() || "NA";
        const message =
            browserFormData.get("message")?.toString().trim() || "";

        if (!name || !email || !message) {
            toast.error("Please complete all required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            setLoading(true);
            setStatus("");

            const payload = {
                platform: "ASTRIDE",
                platformEmail: "hello@astride.com",
                supplierToken: "NA",
                name: name || "NA",
                phone: phone || "NA",
                email: email || "NA",
                product: "NA",
                place: "NA",
                message: `Topic: ${topic}\n\n${message}`,
            };

            const { data } = await axios.post(
                "https://brandbnalo.com/api/form/add",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 20000,
                }
            );

            if (data?.success) {
                toast.success("Form Submitted Successfully");
                setStatus(
                    "Your enquiry has been submitted successfully!"
                );
                formElement.reset();
            } else {
                const errorMessage =
                    data?.message || "Submission Failed";

                toast.error(errorMessage);
                setStatus("");
            }
        } catch (error) {
            console.error("Contact form submission error:", error);

            const errorMessage =
                error.response?.data?.message ||
                (error.code === "ECONNABORTED"
                    ? "Request timed out. Please try again."
                    : "Unable to submit your enquiry. Please try again.");

            toast.error(errorMessage);
            setStatus("");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="overflow-hidden bg-[#fbfaf8] text-[#22180f]">
            <section className="relative px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#1c4b42]/80 sm:h-[560px] sm:w-[560px]" />

                <div className="relative mx-auto max-w-[1320px]">
                    <motion.div
                        initial={
                            reduceMotion ? false : { opacity: 0, y: 24 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1fr_0.7fr]"
                    >
                        <div>
                            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#8e7557] sm:text-xs">
                                Get in touch / ASTRIDE
                            </p>

                            <h1 className="font-serif text-[clamp(3.8rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                                Let’s talk
                                <br />
                                <span className="italic text-[#b4e717]">
                                    comfort.
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-[390px] pb-1 text-sm leading-7 text-[#000] md:pr-40 ">
                            Questions about our chairs, an order, or a
                            business enquiry? Our team is here to help
                            you find the right answer.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                        {/* CONTACT INFORMATION */}
                        <motion.aside
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, x: -24 }
                            }
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.75,
                                delay: 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
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
                                <ContactDetail
                                    icon={MapPin}
                                    label="Visit our office"
                                >
                                    <a
                                        href="https://maps.google.com/?q=J-113%20%26%20114%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%204%2C%20Bawana%2C%20New%20Delhi%2C%20Delhi-110039"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-colors hover:text-white"
                                    >
                                        {address}
                                    </a>
                                </ContactDetail>

                                <ContactDetail
                                    icon={Phone}
                                    label="Call us"
                                >
                                    <a
                                        href="tel:+917311164111"
                                        className="transition-colors hover:text-white"
                                    >
                                        +91-7311164111
                                    </a>
                                </ContactDetail>

                                <ContactDetail
                                    icon={Mail}
                                    label="Email us"
                                >
                                    <a
                                        href="mailto:support@astride.in"
                                        className="block transition-colors hover:text-white"
                                    >
                                        support@astride.in
                                    </a>

                                    <a
                                        href="mailto:sales@astride.in"
                                        className="mt-1 block transition-colors hover:text-white"
                                    >
                                        sales@astride.in
                                    </a>
                                </ContactDetail>
                            </div>

                            <div className="pointer-events-none absolute -bottom-0 -right-5 h-[220px] w-[220px] opacity-80 sm:h-[280px] sm:w-[280px]">
                                <Image
                                    src="/products/Erizo-white.png"
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

                        {/* CONTACT FORM */}
                        <motion.section
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, x: 24 }
                            }
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.75,
                                delay: 0.16,
                                ease: [0.22, 1, 0.36, 1],
                            }}
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
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.6}
                                    />
                                </div>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-7"
                            >
                                <div className="grid gap-7 sm:grid-cols-2">
                                    <FormField
                                        label="Your name"
                                        name="name"
                                        placeholder="Full name"
                                        required
                                    />

                                    <FormField
                                        label="Email address"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div className="grid gap-7 sm:grid-cols-2">
                                    <FormField
                                        label="Phone number"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91"
                                    />

                                    <div>
                                        <label
                                            htmlFor="contact-topic"
                                            className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#777]"
                                        >
                                            What can we help with?
                                        </label>

                                        <select
                                            id="contact-topic"
                                            name="topic"
                                            defaultValue="Product / bulk enquiry"
                                            className="w-full border-b border-black/15 bg-transparent py-3 text-[13px] text-[#332a21] outline-none transition-colors focus:border-[#927551]"
                                        >
                                            <option>
                                                Product
                                            </option>
                                            <option>Staff Chairs</option>
                                            <option>Office Chairs</option>
                                            <option>Gaming Chairs</option>
                                            <option>Study Chairs</option>
                                            <option>Bar Stools & Cafe Chairs</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#777]"
                                    >
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
                                        Submit your enquiry and our team
                                        will get back to you.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group inline-flex w-full items-center justify-center gap-4 bg-[#1c4b42] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#000] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                                    >
                                        {loading
                                            ? "Submitting..."
                                            : "Send an enquiry"}

                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#201b16] transition-transform duration-300 group-hover:rotate-45">
                                            {loading ? (
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                                            ) : (
                                                <ArrowUpRight size={14} />
                                            )}
                                        </span>
                                    </button>
                                </div>

                                {status && (
                                    <p
                                        role="status"
                                        className="text-sm text-[#1c4b42]"
                                    >
                                        {status}
                                    </p>
                                )}
                            </form>
                        </motion.section>
                    </div>
                </div>
            </section>

            {/* OFFICE MAP */}
            <motion.section
                initial={
                    reduceMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10"
            >
                <div className="mx-auto max-w-[1320px]">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8e7557]">
                                Find us
                            </p>

                            <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                                Visit ASTRIDE
                            </h2>
                        </div>

                        <p className="max-w-[420px] text-xs leading-6 text-[#766d63]">
                            {address}
                        </p>
                    </div>

                    <div className="h-[320px] overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#efede9] sm:h-[420px]">
                        <iframe
                            title="Map showing the ASTRIDE office in Bawana, New Delhi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.7279551912648!2d77.0596778749625!3d28.787373177033373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07419efaff77%3A0x6170600600072515!2sAstride%20Furniture!5e0!3m2!1sen!2sus!4v1793267147988!5m2!1sen!2sus"
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
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/40">
                    {label}
                </p>

                <div className="mt-1.5 break-words text-[12px] leading-[1.8] text-white/75">
                    {children}
                </div>
            </div>
        </div>
    );
}

function FormField({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}) {
    return (
        <div>
            <label
                htmlFor={`contact-${name}`}
                className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#777]"
            >
                {label}
            </label>

            <input
                id={`contact-${name}`}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                autoComplete={
                    name === "name"
                        ? "name"
                        : name === "email"
                          ? "email"
                          : name === "phone"
                            ? "tel"
                            : undefined
                }
                className="w-full border-b border-black/15 bg-transparent py-3 text-[13px] text-[#332a21] outline-none placeholder:text-[#aaa] transition-colors focus:border-[#927551]"
            />
        </div>
    );
}
