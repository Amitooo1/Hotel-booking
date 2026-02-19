import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Building, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div
            className={`text-center mb-16 transition-all duration-700 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                Contact Us
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We are always here to assist you. For reservations, inquiries, or
                any assistance during your stay, please feel free to reach out.
            </p>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left Side - Contact Info */}
            <div
                className={`space-y-8 transition-all duration-700 ${
                show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
                <ContactCard
                icon={<Building size={22} />}
                title="Company"
                content="Accomora Enterprises Private Limited"
                />

                <ContactCard
                icon={<MapPin size={22} />}
                title="Location"
                content="New Delhi, India"
                />

                <ContactCard
                icon={<Phone size={22} />}
                title="Phone"
                content="+91-7543031689"
                />

                <ContactCard
                icon={<MessageCircle size={22} />}
                title="WhatsApp"
                content="+91-7543031689"
                />

                <ContactCard
                icon={<Mail size={22} />}
                title="Email"
                content="accomora.a@gmail.com"
                />

                <ContactCard
                icon={<MapPin size={22} />}
                title="Registered Address"
                content="F/F B3/194-195, 12.5 Yards, Subhash Nagar West, New Delhi, Delhi, 110027"
                />
            </div>

            {/* Right Side - Contact Form */}
            <div
                className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ${
                show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Send Us a Message
                </h2>

                <form className="space-y-5">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />

                <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg transition-all duration-300 hover:bg-red-400"
                >
                    Submit Message
                </button>
                </form>
            </div>

            </div>
        </div>
    </section>
  );
}

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-red-100 text-red-500 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{content}</p>
      </div>
    </div>
  );
};
