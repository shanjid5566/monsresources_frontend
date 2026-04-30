import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1A1B1C' }} className="text-white">
      <div className="container mx-auto px-6 pt-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-12 lg:gap-16 pb-10">

          {/* Brand + Socials */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="PNW" className="h-12 w-auto" />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              The #1 job board for tech opportunities in the Pacific Northwest. Seattle, Portland, and beyond.
            </p>

            {/* Follow Row */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Follow :</span>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
                style={{ width: '34px', height: '34px', border: '1px solid #4b5563' }}
              >
                <Facebook size={16} color="#d1d5db" />
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
                style={{ width: '34px', height: '34px', border: '1px solid #4b5563' }}
              >
                <Twitter size={16} color="#d1d5db" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
                style={{ width: '34px', height: '34px', border: '1px solid #4b5563' }}
              >
                <Linkedin size={16} color="#d1d5db" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
                style={{ width: '34px', height: '34px', border: '1px solid #4b5563' }}
              >
                <Instagram size={16} color="#d1d5db" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:justify-self-center">
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:justify-self-end">
            <h3 className="text-sm font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-4">

              {/* Call */}
              <li className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0 mt-1"
                  style={{ width: '32px', height: '32px', border: '1px solid #374151' }}
                >
                  <Phone size={14} color="#9ca3af" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Call us</p>
                  <p className="text-gray-300 text-sm">1300 889 669</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0 mt-1"
                  style={{ width: '32px', height: '32px', border: '1px solid #374151' }}
                >
                  <Mail size={14} color="#9ca3af" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Email us</p>
                  <a
                    href="mailto:info@mycarchoice.com.au"
                    className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    info@mycarchoice.com.au
                  </a>
                </div>
              </li>

              {/* Visit */}
              <li className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0 mt-1"
                  style={{ width: '32px', height: '32px', border: '1px solid #374151' }}
                >
                  <MapPin size={14} color="#9ca3af" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Visit us</p>
                  <p className="text-gray-300 text-sm">Sydney, NSW 2000</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 PNW.JOBS. All rights reserved. Built with passion for job seeker
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;