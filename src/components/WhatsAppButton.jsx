import React from "react";
import { BsWhatsapp } from "react-icons/bs";


const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919433036329";
    const message = "Hello! I would like to know more about Scigeeks courses.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="fixed inline-flex items-center justify-center bottom-6 left-6 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-all duration-300 "
      onClick={handleWhatsAppClick}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <BsWhatsapp className="w-6 h-6 md:w-8 md:h-8"/>

    </button>
  );
};

export default WhatsAppButton;
