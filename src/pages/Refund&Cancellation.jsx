import { useEffect, useRef, useState } from "react";
import {
  Ban,
  CalendarX,
  LogOut,
  UserX,
  CreditCard,
  Globe,
  AlertTriangle,
  RefreshCw,
  Building2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div
            className={`text-center mb-16 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Refund & Cancellation Policy
            </h1>
            <p className="mt-4 text-gray-600">
                All Time Residency Luxe Collection
            </p>
            </div>

            <div className="space-y-10">

            <PolicyCard
                icon={<Ban />}
                title="1. Non-Refundable Bookings"
                visible={visible}
            >
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    Reservations under a Non-Refundable Rate are strictly
                    non-cancellable and non-refundable.
                </li>
                <li>
                    No refund will be issued in case of cancellation, modification,
                    no-show, or early check-out.
                </li>
                <li>
                    The full booking amount will be charged as per the confirmed
                    reservation.
                </li>
                </ul>
            </PolicyCard>

            <PolicyCard
                icon={<CalendarX />}
                title="2. Standard / Flexible Bookings (If Applicable)"
                visible={visible}
            >
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    Cancellations made within the free cancellation window (as
                    mentioned at the time of booking) will not incur any charges.
                </li>
                <li>
                    Cancellations made after the allowed period will be subject to
                    one-night retention or full booking charges depending on the
                    selected rate plan.
                </li>
                </ul>
            </PolicyCard>

            <PolicyCard
                icon={<LogOut />}
                title="3. Early Check-Out"
                visible={visible}
            >
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    In case of early departure after check-in, the entire reserved
                    stay amount will be charged.
                </li>
                <li>No refund will be applicable for unused nights.</li>
                </ul>
            </PolicyCard>

            <PolicyCard
                icon={<UserX />}
                title="4. No-Show Policy"
                visible={visible}
            >
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    If the guest fails to check in on the scheduled arrival date
                    without prior notice, the booking will be treated as a no-show.
                </li>
                <li>
                    Full stay charges will apply as per the reservation terms.
                </li>
                </ul>
            </PolicyCard>

            <PolicyCard
                icon={<CreditCard />}
                title="5. Refund Processing (If Applicable)"
                visible={visible}
            >
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    Approved refunds (if exceptionally granted) will be processed
                    within 7–14 working days.
                </li>
                <li>
                    Refund timelines may vary depending on payment method and bank
                    processing time.
                </li>
                </ul>
            </PolicyCard>

            <PolicyCard
                icon={<Globe />}
                title="6. Third-Party / OTA Bookings"
                visible={visible}
            >
                <ul className="list-disc ml-6 space-y-2">
                <li>
                    For reservations made through Online Travel Agencies (such as
                    Expedia), cancellation and refund requests must be processed
                    through the respective booking platform.
                </li>
                <li>
                    The hotel's decision will be based on the rate policy selected
                    at the time of booking.
                </li>
                </ul>
            </PolicyCard>

            <PolicyCard
                icon={<AlertTriangle />}
                title="7. Force Majeure"
                visible={visible}
            >
                In case of government restrictions, natural disasters, or
                unforeseen circumstances, the hotel reserves the right to offer
                date modification instead of a refund.
            </PolicyCard>

            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center text-gray-500 text-sm flex justify-center items-center gap-2">
            <Building2 size={16} />
            All Time Residency Luxe Collection
            </div>

        </div>
    </section>
        
  );
}

const PolicyCard = ({ icon, title, children, visible }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center gap-3 mb-4 text-red-500">
        {icon}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
};
