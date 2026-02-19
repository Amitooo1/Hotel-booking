import { Mail, Phone, MapPin } from "lucide-react";
import { Link, redirect } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Accomora
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium hospitality experiences crafted with comfort,
              elegance, and trust. Your perfect stay begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contactus">Contact</FooterLink>
              <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
              <FooterLink to="/refund&cancellation">Refund & Cancellation Policy</FooterLink>
              <FooterLink to="/terms&conditions">Terms & Conditions</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red-400 mt-1" />
                <span>+91-7543031689</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-400 mt-1" />
                <span>accomora.a@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-400 mt-1" />
                <span>
                  F/F B3/194-195, Subhash Nagar West, <br />
                  New Delhi, Delhi, 110027
                </span>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive offers and updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg text-white border focus:outline-none"
              />
              <button className="bg-red-400 px-4 py-2 rounded-r-lg text-white hover:bg-red-500 transition">
                Join
              </button>
            </div>
          </div> */}

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Accomora Enterprises Private Limited. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

const FooterLink = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-red-400 transition-all duration-300"
      >
        {children}
      </Link>
    </li>
  );
};
