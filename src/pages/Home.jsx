import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
  Hotel,
  ShieldCheck,
  Headphones,
  Star,
  MapPin,
  CalendarCheck,
} from "lucide-react";

import "swiper/css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Home() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <img
          src="/images/hero.jpg"
          alt="Luxury Hotel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div
          className={`relative z-10 px-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            Experience Luxury Redefined
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
            Premium hotel bookings crafted with elegance, comfort, and trust.
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <button
            onClick={() => navigate("/contactus")}
            className="border border-white bg-white text-black px-6 py-3 rounded-full hover:bg-red-400 hover:text-white transition"
            >
            Book Your Stay
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Accomora</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <Feature icon={<Hotel size={32} />} title="Luxury Rooms">
              World-class accommodations curated for premium comfort.
            </Feature>

            <Feature icon={<ShieldCheck size={32} />} title="Secure Booking">
              Safe and encrypted payment experience.
            </Feature>

            <Feature icon={<Headphones size={32} />} title="24/7 Support">
              Assistance anytime before and during your stay.
            </Feature>
          </div>
        </div>
      </section>

      {/* OFFERS SLIDER */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Exclusive Offers
          </h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            <SwiperSlide>
              <OfferCard
                title="Weekend Escape"
                desc="Flat 20% off on luxury suites."
                img="/images/offer1.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <OfferCard
                title="Honeymoon Special"
                desc="Romantic getaway packages."
                img="/images/offer2.jpg"
              />
            </SwiperSlide>

            <SwiperSlide>
              <OfferCard
                title="Corporate Stay"
                desc="Special rates for business travelers."
                img="/images/offer3.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Top Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Destination title="New Delhi" img="/images/delhi.jpg" />
            <Destination title="Mumbai" img="/images/mumbai.jpg" />
            <Destination title="Goa" img="/images/goa.jpg" />
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="py-20 bg-white/50 text-black text-center px-6">
        <Star size={40} className="mx-auto text-red-400 mb-6" />
        <h2 className="text-4xl font-bold">
          Your Perfect Stay Awaits
        </h2>
        <p className="mt-4 text-gray-600">
          Book today and enjoy unmatched luxury and comfort.
        </p>
        <button
            onClick={() => navigate("/contactus")}
            className="mt-8 bg-black font-semibold text-white px-8 py-3 rounded-full hover:bg-red-400 transition"
            >
            Reserve Now
        </button>
      </section>
    </div>
  );
}

const Feature = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
    <div className="text-red-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const OfferCard = ({ title, desc, img }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg">
    <img src={img} alt={title} className="w-full h-80 object-cover" />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{desc}</p>
    </div>
  </div>
);

const Destination = ({ title, img }) => (
  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
    <img
      src={img}
      alt={title}
      className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
      <MapPin className="mr-2" /> {title}
    </div>
  </div>
);
