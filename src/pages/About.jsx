import { useEffect, useState } from "react";
import {
  Building2,
  ShieldCheck,
  HeartHandshake,
  Globe,
  Star,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">

    {/* HERO */}
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <img
        src="/images/about-hero.jpg"
        alt="About Accomora"
        className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div
        className={`relative z-10 px-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        >
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
            About Accomora
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-200">
            Elevating hospitality with elegance, integrity, and trust.
        </p>
        </div>
    </section>

    {/* COMPANY INTRO */}
    <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
        <Building2 className="mx-auto text-red-500 mb-6" size={40} />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accomora Enterprises Private Limited
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Based in New Delhi, India, Accomora Enterprises Private Limited
            is committed to delivering premium hotel booking experiences
            across top destinations. We combine technology with refined
            hospitality standards to ensure every stay reflects comfort,
            security, and elegance.
        </p>
        </div>
    </section>

    {/* MISSION & VISION */}
    <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <InfoCard
            icon={<HeartHandshake size={32} />}
            title="Our Mission"
        >
            To provide seamless, secure, and premium accommodation
            experiences that exceed guest expectations while maintaining
            transparency and professionalism.
        </InfoCard>

        <InfoCard
            icon={<Globe size={32} />}
            title="Our Vision"
        >
            To become a trusted name in hospitality by redefining luxury,
            comfort, and customer satisfaction across India and beyond.
        </InfoCard>

        </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
            Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

            <InfoCard icon={<ShieldCheck size={30} />} title="Secure Payments">
            Encrypted and reliable booking system ensuring peace of mind.
            </InfoCard>

            <InfoCard icon={<Users size={30} />} title="Customer Focused">
            Personalized assistance before and during your stay.
            </InfoCard>

            <InfoCard icon={<Award size={30} />} title="Premium Standards">
            Carefully curated properties that reflect quality and comfort.
            </InfoCard>

        </div>
        </div>
    </section>

    {/* STATS */}
    <section className="py-20 bg-white px-6 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        <Stat number="500+" label="Happy Guests" />
        <Stat number="50+" label="Luxury Rooms" />
        <Stat number="10+" label="Destinations" />
        <Stat number="24/7" label="Support" />

        </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-white text-black text-center px-6">
        <Star size={40} className="mx-auto text-red-400 mb-6" />
        <h2 className="text-4xl font-bold">
        Experience Refined Hospitality
        </h2>
        <p className="mt-4 text-gray-600">
        Discover comfort, elegance, and trust with every stay.
        </p>

        <Link
        to="/contact"
        className="inline-block mt-8 bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-red-600 transition"
        >
        Book Your Stay
        </Link>
    </section>

    </div>
  );
}

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
    <div className="text-red-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <h3 className="text-4xl font-bold text-red-500">{number}</h3>
    <p className="mt-2 text-gray-600">{label}</p>
  </div>
);
