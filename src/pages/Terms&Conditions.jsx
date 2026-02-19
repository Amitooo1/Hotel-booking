import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Shield,
  CreditCard,
  Ban,
  CalendarCheck,
  Scale,
  Lock,
  Globe,
  AlertTriangle,
  Building2,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsAndConditions() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
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
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Terms & Conditions
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                By accessing or using Accomora Enterprises Private Limited, you agree to be legally bound by the following Terms.
            </p>
            </div>

            <div className="space-y-10">

            <Section icon={<FileText />} title="1. Definitions" show={show}>
                “User” / “Guest” / “You” refers to any person accessing or using our Website.
                <br /><br />
                “Property” / “Hotel” refers to accommodation providers listed on our Website.
                <br /><br />
                “Booking” refers to a confirmed reservation made through our Website.
                <br /><br />
                “Services” refers to hotel booking, reservation management, and related services provided through the Website.
            </Section>

            <Section icon={<Shield />} title="2. Eligibility" show={show}>
                You confirm that:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>You are at least 18 years of age.</li>
                <li>You have legal authority to enter into binding agreements.</li>
                <li>All information provided is accurate and complete.</li>
                <li>You are using the Website for legitimate booking purposes only.</li>
                </ul>
            </Section>

            <Section icon={<Ban />} title="3. Use of the Website" show={show}>
                You agree not to:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Make fraudulent bookings.</li>
                <li>Provide false or misleading information.</li>
                <li>Interfere with Website operation or security.</li>
                <li>Use bots or scraping tools without permission.</li>
                <li>Violate applicable laws.</li>
                </ul>
                We reserve the right to suspend or terminate access for misuse.
            </Section>

            <Section icon={<CalendarCheck />} title="4. Booking Process" show={show}>
                <strong>4.1 Booking Confirmation</strong>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Booking confirmed only after successful payment.</li>
                <li>Confirmation email will be sent.</li>
                <li>You must review confirmation details carefully.</li>
                </ul>

                <br />

                <strong>4.2 Inventory & Availability</strong>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>All bookings subject to availability.</li>
                <li>We may decline bookings due to errors or unavailability.</li>
                </ul>
            </Section>

            <Section icon={<CreditCard />} title="5. Pricing & Payments" show={show}>
                <ul className="list-disc ml-6 space-y-2">
                <li>All prices are displayed in Indian Rupees (INR).</li>
                <li>Prices may include/exclude taxes and service charges.</li>
                <li>Rates vary based on demand or promotions.</li>
                <li>We reserve the right to correct pricing errors.</li>
                <li>Payment must be made through authorized gateways.</li>
                <li>Advance payment may be required.</li>
                <li>Failure to complete payment may result in cancellation.</li>
                </ul>
            </Section>

            <Section icon={<RefreshCw />} title="6. Cancellation & Refund Policy" show={show}>
                <strong>6.1 Non-Refundable Bookings</strong>
                <p className="mt-2">No refund in case of cancellation or no-show.</p>

                <br />

                <strong>6.2 Flexible Bookings</strong>
                <p className="mt-2">
                Cancellation within allowed window may qualify for partial or full refund.
                Refunds may take 7–14 business days.
                </p>

                <br />

                <strong>6.3 No-Show Policy</strong>
                <p className="mt-2">
                Failure to check in without prior notice will be treated as No-Show and may be fully charged.
                </p>
            </Section>

            <Section icon={<Building2 />} title="7. Check-In & Check-Out" show={show}>
                <ul className="list-disc ml-6 space-y-2">
                <li>Standard times mentioned in confirmation.</li>
                <li>Early/late check-in subject to availability and charges.</li>
                <li>Valid government-issued photo ID required.</li>
                <li>Hotel may deny check-in if ID not provided.</li>
                </ul>
            </Section>

            <Section icon={<Globe />} title="8. Hotel Policies" show={show}>
                Each property may have specific rules regarding:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Child policy</li>
                <li>Extra bed charges</li>
                <li>Pet policy</li>
                <li>Smoking policy</li>
                <li>Visitor policy</li>
                </ul>
                Guests must comply with property-specific rules.
            </Section>

            <Section icon={<RefreshCw />} title="9. Modifications to Bookings" show={show}>
                Requests for changes are subject to availability and rate differences.
                Additional charges may apply. Some bookings may not be modifiable.
            </Section>

            <Section icon={<AlertTriangle />} title="10. Force Majeure" show={show}>
                We are not liable for failure due to:
                Natural disasters, government restrictions, war, strikes,
                pandemic, transportation disruptions, or other events beyond control.
                Refunds subject to hotel and regulatory guidelines.
            </Section>

            <Section icon={<Lock />} title="11. User Responsibility" show={show}>
                You agree to:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Maintain confidentiality of credentials.</li>
                <li>Be responsible for account activity.</li>
                <li>Indemnify us against misuse claims.</li>
                </ul>
            </Section>

            <Section icon={<Shield />} title="12. Limitation of Liability" show={show}>
                <ul className="list-disc ml-6 space-y-2">
                <li>We act as intermediary between guest and hotel.</li>
                <li>We are not responsible for hotel services or amenities.</li>
                <li>Liability limited to booking amount paid.</li>
                <li>No liability for indirect or consequential damages.</li>
                </ul>
            </Section>

            <Section icon={<FileText />} title="13. Intellectual Property" show={show}>
                All Website content including text, logos, images, design, and software
                is property of accomora.com and protected under intellectual property laws.
                Unauthorized use is prohibited.
            </Section>

            <Section icon={<Shield />} title="14. Privacy Policy" show={show}>
                Your use of the Website is governed by our Privacy Policy regarding data collection and protection.
            </Section>

            <Section icon={<Globe />} title="15. Third-Party Links" show={show}>
                We are not responsible for content or policies of external websites.
            </Section>

            <Section icon={<AlertTriangle />} title="16. Fraud & Payment Security" show={show}>
                <ul className="list-disc ml-6 space-y-2">
                <li>Fraudulent bookings may be cancelled.</li>
                <li>Additional verification may be requested.</li>
                <li>Invalid chargebacks may result in blacklisting.</li>
                </ul>
            </Section>

            <Section icon={<Scale />} title="17. Dispute Resolution" show={show}>
                Parties will attempt amicable resolution first.
                If unresolved, disputes are subject to courts in New Delhi, India.
                Governing law: Laws of India.
            </Section>

            <Section icon={<RefreshCw />} title="18. Amendments" show={show}>
                We may update these Terms at any time without prior notice.
                Continued use constitutes acceptance of updated Terms.
            </Section>

            <Section icon={<Phone />} title="19. Contact Information" show={show}>
                <div className="space-y-2 mt-3">
                <div className="flex items-center gap-2"><Building2 size={16}/> Accomora Enterprises Private Limited</div>
                <div className="flex items-center gap-2"><Mail size={16}/> accomora.a@gmail.com</div>
                <div className="flex items-center gap-2"><Phone size={16}/> +91-7543031689</div>
                <div className="flex items-center gap-2"><MapPin size={16}/> F/F B3/194-195, 12.5 Yards, Subhash Nagar West, New Delhi, Delhi, 110027</div>
                </div>
            </Section>

        </div>

        </div>
    </section>
        

  );
}

const Section = ({ icon, title, children, show }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
