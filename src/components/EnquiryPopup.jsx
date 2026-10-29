
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import {
    X,
    UserRound,
    Mail,
    Phone,
    Armchair,
    MessageSquare,
    ArrowRight,
    LockKeyhole,
    CheckCircle2,
    LoaderCircle,
} from "lucide-react";

const productCategories = [
    "Staff Chairs",
    "Office Chairs",
    "Gaming Chairs",
    "Study Chairs",
    "Bar Stools & Cafe Chairs",
];

const initialForm = {
    name: "",
    email: "",
    place: "",
    mobile: "",
    product: "",
    message: "",
};

const inputClass =
    "h-full w-full min-w-0 bg-transparent py-2.5 pl-3 pr-3 text-sm text-[#202020] outline-none placeholder:text-[#929292]";

const fieldClass =
    "flex min-h-[52px] items-center rounded-xl border border-black/[0.12] bg-white transition-colors focus-within:border-[#a6d900] focus-within:ring-2 focus-within:ring-[#b4e717]/15";

export default function EnquiryPopup({
    isOpen,
    onClose,
    defaultProduct = "",
}) {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    // Lock background scrolling and support Escape to close.
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;

        const handleKeyDown = (event) => {
            if (event.key === "Escape" && status !== "loading") {
                onClose?.();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose, status]);

    // Set the default product whenever the popup opens.
    useEffect(() => {
        if (isOpen) {
            setForm((previous) => ({
                ...previous,
                product: defaultProduct || previous.product,
            }));

            setStatus("idle");
            setError("");
        }
    }, [isOpen, defaultProduct]);

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        if (error) setError("");
    };

    const handleClose = () => {
        if (status === "loading") return;
        onClose?.();
    };

    // Submit enquiry to BrandBnalo API.
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            setError("Please enter a valid email address.");
            return;
        }

        if (form.mobile.replace(/\D/g, "").length < 7) {
            setError("Please enter a valid mobile number.");
            return;
        }

        setStatus("loading");

        try {
            const formData = {
                platform: "ASTRIDE",
                platformEmail: "hello@astride.com",
                supplierToken: "NA",

                name: form.name.trim() || "NA",
                phone: form.mobile.trim() || "NA",
                email: form.email.trim() || "NA",
                place: form.place?.trim() || "NA",
                product: form.product || "NA",
                message: form.message.trim() || "NA",
            };

            const { data } = await axios.post(
                "https://brandbnalo.com/api/form/add",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 20000,
                }
            );

            if (data?.success) {
                toast.success("Form Submitted Successfully");

                setForm(initialForm);
                setError("");
                setStatus("success");
            } else {
                toast.error(data?.message || "Submission Failed");

                setError(
                    data?.message || "Unable to submit your enquiry."
                );

                setStatus("error");
            }
        } catch (err) {
            console.error("Enquiry submission error:", err);

            const errorMessage =
                err.response?.data?.message ||
                (err.code === "ECONNABORTED"
                    ? "Request timed out. Please try again."
                    : "Server Error. Please try again.");

            toast.error(errorMessage);
            setError(errorMessage);
            setStatus("error");
        } finally {
            setStatus((current) =>
                current === "loading" ? "idle" : current
            );
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/65 p-3 backdrop-blur-md sm:p-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            handleClose();
                        }
                    }}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="enquiry-title"
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        className="relative my-auto grid w-full max-w-[1120px] overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-[26px] lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr]"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            type="button"
                            onClick={handleClose}
                            disabled={status === "loading"}
                            aria-label="Close enquiry form"
                            className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-black shadow-sm transition hover:rotate-90 hover:bg-[#b4e717] disabled:opacity-50 sm:right-4 sm:top-4"
                        >
                            <X size={21} />
                        </button>

                        {/* LEFT IMAGE PANEL */}
                        <section className="relative hidden min-h-[650px] overflow-hidden bg-[#30281f] lg:block">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

                            <div className="relative z-10 flex h-full min-h-[650px] flex-col px-9 py-5">
                                <div className="mb-8 h-1 w-12 rounded-full bg-[#b4e717]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                                    ASTRIDE
                                </p>

                                <h2 className="mt-5 max-w-md text-5xl font-medium leading-[1.12] tracking-[-0.045em] text-white xl:text-5xl">
                                    Find the
                                    <br />
                                    Perfect Chair
                                    <br />
                                    <span className="italic text-[#b4e717]">
                                        for Your Space
                                    </span>
                                </h2>

                                <p className="mt-3 max-w-xs text-sm leading-5 text-white/80">
                                    Let us help you choose the right
                                    seating solution for your home,
                                    office or workspace.
                                </p>

                                <div className="mt-9 space-y-3">
                                    {[
                                        {
                                            icon: Armchair,
                                            title: "Wide Range",
                                            subtitle: "of Seating Options",
                                        },
                                        {
                                            icon: CheckCircle2,
                                            title: "Expert Guidance",
                                            subtitle: "for Your Requirements",
                                        },
                                        {
                                            icon: MessageSquare,
                                            title: "Quick Support",
                                            subtitle: "From Our Team",
                                        },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.title}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black">
                                                    <Icon size={21} />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium text-white">
                                                        {item.title}
                                                    </p>

                                                    <p className="mt-0.5 text-xs text-white/70">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-1 pt-6">
                                    <p className="max-w-xs text-2xl italic leading-snug text-white xl:text-3xl">
                                        Comfort drives
                                        <br />
                                        <span className="text-[#b4e717]">
                                            better work.
                                        </span>
                                    </p>

                                    <div className="mt-4 h-[2px] w-24 rounded-full bg-[#b4e717]" />
                                </div>
                            </div>
                        </section>

                        {/* RIGHT FORM PANEL */}
                        <section className="flex min-w-0 flex-col justify-center bg-[#fdfdfc] px-5 py-5 sm:px-9 lg:px-10">
                            <div className="mb-6 pr-8 sm:mb-7">
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#656565]">
                                        Get in touch
                                    </span>

                                    <span className="h-[2px] w-12 bg-[#b4e717]" />
                                </div>

                                <h2
                                    id="enquiry-title"
                                    className="text-3xl font-medium tracking-[-0.055em] text-[#171717] sm:text-4xl xl:text-[43px]"
                                >
                                    Request a Quote
                                </h2>

                                <p className="mt-2 max-w-md text-sm leading-5 text-[#777777]">
                                    Tell us what you need. Our team
                                    will help you find the right seating
                                    solution.
                                </p>
                            </div>

                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center py-12 text-center"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b4e717]/20">
                                        <CheckCircle2
                                            size={34}
                                            className="text-[#668900]"
                                        />
                                    </div>

                                    <h3 className="mt-5 text-2xl font-medium">
                                        Enquiry submitted!
                                    </h3>

                                    <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                                        Thank you for contacting ASTRIDE.
                                        Our team will get back to you.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="mt-7 rounded-full bg-[#b4e717] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#a4d313]"
                                    >
                                        Done
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-3"
                                >
                                    {/* NAME */}
                                    <label className={fieldClass}>
                                        <UserRound
                                            size={19}
                                            className="ml-4 shrink-0 text-[#333333]"
                                        />

                                        <input
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Your Name *"
                                            aria-label="Your name"
                                            value={form.name}
                                            onChange={updateField}
                                            className={inputClass}
                                            required
                                            maxLength={100}
                                        />
                                    </label>

                                    {/* EMAIL */}
                                    <label className={fieldClass}>
                                        <Mail
                                            size={19}
                                            className="ml-4 shrink-0 text-[#333333]"
                                        />

                                        <input
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Your Email *"
                                            aria-label="Your email"
                                            value={form.email}
                                            onChange={updateField}
                                            className={inputClass}
                                            required
                                            maxLength={254}
                                        />
                                    </label>

                                    {/* MOBILE */}
                                    <label className={fieldClass}>
                                        <Phone
                                            size={19}
                                            className="ml-4 shrink-0 text-[#333333]"
                                        />

                                        <input
                                            name="mobile"
                                            type="tel"
                                            autoComplete="tel"
                                            inputMode="tel"
                                            placeholder="Mobile Number *"
                                            aria-label="Mobile number"
                                            value={form.mobile}
                                            onChange={updateField}
                                            className={inputClass}
                                            required
                                            maxLength={20}
                                        />
                                    </label>

                                    {/* PRODUCT */}
                                    <label className={fieldClass}>
                                        <Armchair
                                            size={19}
                                            className="ml-4 shrink-0 text-[#333333]"
                                        />

                                        <select
                                            name="product"
                                            value={form.product}
                                            onChange={updateField}
                                            aria-label="Select product"
                                            className={`${inputClass} cursor-pointer ${
                                                form.product
                                                    ? ""
                                                    : "text-[#929292]"
                                            }`}
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Product *
                                            </option>

                                            {productCategories.map(
                                                (category) => (
                                                    <option
                                                        key={category}
                                                        value={category}
                                                    >
                                                        {category}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </label>

                                    {/* MESSAGE */}
                                    <label className={`${fieldClass} items-start`}>
                                        <MessageSquare
                                            size={19}
                                            className="ml-4 mt-4 shrink-0 text-[#333333]"
                                        />

                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={updateField}
                                            placeholder="Tell us about your requirements *"
                                            aria-label="Your message"
                                            rows={3}
                                            required
                                            maxLength={2000}
                                            className="min-h-[94px] w-full resize-y bg-transparent px-3 py-4 text-sm text-[#202020] outline-none placeholder:text-[#929292]"
                                        />
                                    </label>

                                    {/* ERROR MESSAGE */}
                                    {error && (
                                        <p
                                            role="alert"
                                            className="rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-600"
                                        >
                                            {error}
                                        </p>
                                    )}

                                    {/* SUBMIT BUTTON */}
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="group flex min-h-[58px] w-full items-center justify-between rounded-full bg-[#b4e717] py-2 pl-6 pr-2 text-sm font-semibold text-black transition duration-300 hover:bg-[#a7d914] disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        <span className="flex-1 text-center">
                                            {status === "loading"
                                                ? "Sending enquiry..."
                                                : "Send Enquiry"}
                                        </span>

                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-[-2px]">
                                            {status === "loading" ? (
                                                <LoaderCircle
                                                    size={21}
                                                    className="animate-spin"
                                                />
                                            ) : (
                                                <ArrowRight size={22} />
                                            )}
                                        </span>
                                    </button>

                                    {/* PRIVACY NOTE */}
                                    <p className="flex items-start justify-center gap-2 pt-1 text-center text-[11px] leading-5 text-[#858585]">
                                        <LockKeyhole
                                            size={14}
                                            className="mt-0.5 shrink-0"
                                        />

                                        Your details are used to respond
                                        to your enquiry.
                                    </p>
                                </form>
                            )}
                        </section>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
