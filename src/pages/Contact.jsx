import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import useIntersectionObserver from "../utility/useIntersectionObserver.js";

const AnimatedSection = ({ children, animationClass = "translate-y-10" }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        entry?.isIntersecting
          ? "opacity-100 translate-y-0"
          : `opacity-0 ${animationClass}`
      }`}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission - update later
    console.log("Form submitted:", formData);
    showAlert(
      "Thank you for your message! We will get back to you soon.",
      "success"
    );
    setFormData({ name: "", email: "", phonenumber: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      detail:
        "79, Lenin Sarani, Commercial Point, Room No: 504, Kolkata-700013, India",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 94330 36329 | +91 84208 05149",
    },
    { icon: Mail, title: "Email", detail: "scigeekss@gmail.com" },
  ];

  useEffect(()=>{
      document.title="Contact Us | SciGeeks";
    });

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              We're here to help with any questions about our courses,
              admissions, or career guidance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animationClass="-translate-x-10">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.217399184937!2d88.3581796758837!3d22.57098283297193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027653a3a41555%3A0xde5b557849363a04!2sLenin%20Sarani%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationClass="translate-x-10">
              <div className="bg-slate-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded-md focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded-md focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      required
                      value={formData.phonenumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded-md focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded-md focus:ring-slate-500 focus:border-slate-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 bg-slate-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors duration-300"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
