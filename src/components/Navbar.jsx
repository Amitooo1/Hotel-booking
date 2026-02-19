import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-serif font-bold tracking-wide text-black"
        >
          Accomora Enterprises Private Limited.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contactus">Contact</NavLink>
          <NavLink to="/privacypolicy">Privacy</NavLink>
          <NavLink to="/refund&cancellation">Refund</NavLink>

          {/* CTA Button */}
          <Link
            to="/contactus"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-red-400 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
          <MobileLink to="/" setIsOpen={setIsOpen}>Home</MobileLink>
          <MobileLink to="/about" setIsOpen={setIsOpen}>About</MobileLink>
          <MobileLink to="/contact" setIsOpen={setIsOpen}>Contact</MobileLink>
          <MobileLink to="/privacy-policy" setIsOpen={setIsOpen}>Privacy</MobileLink>
          <MobileLink to="/refund-policy" setIsOpen={setIsOpen}>Refund</MobileLink>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-red-400 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative group transition-all duration-300"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const MobileLink = ({ to, children, setIsOpen }) => {
  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className="text-lg"
    >
      {children}
    </Link>
  );
};
