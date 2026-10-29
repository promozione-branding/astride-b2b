"use client";

import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContactButtons = () => {
  const phoneNumber = "917311164111"; // Replace with your phone number
  const whatsappNumber = "917311164111"; // Include country code, without +

  return (
    <div className="fixed bottom-6 right-5 z-[9999] flex flex-col items-center gap-3">
      {/* Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call us"
        title="Call us"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-xl"
      >
        <Phone
          size={25}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d] hover:shadow-xl"
      >
        <FaWhatsapp
          size={27}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>
    </div>
  );
};

export default FloatingContactButtons;