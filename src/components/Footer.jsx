import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail} from 'lucide-react';
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaXTwitter, url: '#', label: 'Twitter' },
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="w-32 h-10 bg-slate-200 dark:bg-gray-700 rounded-md flex items-center justify-center mb-4">
              <span className="text-sm font-semibold text-slate-500">LOGO</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Unraveling the Universe of Knowledge through innovative education and cutting-edge research.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                <span className="text-slate-600 dark:text-slate-400">79, Lenin Sarani, Commercial Point, Room No: 504, Kolkata-700013, WestBengal, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-slate-500" />
                <span className="text-slate-600 dark:text-slate-400">+91 94330 36329</span>
                <pre className="text-slate-800 dark:text-slate-100"> | </pre>
                <span className="text-slate-600 dark:text-slate-400">+91 84208 05149</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-slate-500" />
                <span className="text-slate-600 dark:text-slate-400">scigeekss@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-4">Find Us on Map</h4>
            <div className="rounded-lg overflow-hidden h-40">
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
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Scigeeks. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.url} className="text-slate-500 hover:text-slate-700 dark:hover:text-white transition-colors">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
