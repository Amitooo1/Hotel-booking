import { useEffect, useRef, useState } from "react";
import {
  Shield,
  User,
  CreditCard,
  Database,
  Lock,
  Globe,
  Cookie,
  Mail,
  Phone,
  MapPin,
  Building2,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
                Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                We respect your privacy and are committed to protecting your personal information.
            </p>
            </div>

            <div className="space-y-10">

            <Section icon={<User />} title="1. Information We Collect" show={show}>
                <strong>1.1 Personal Information</strong>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing address</li>
                <li>Government-issued ID details</li>
                <li>Payment details (via secure gateway)</li>
                <li>Guest details</li>
                </ul>

                <br />

                <strong>1.2 Booking Information</strong>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Hotel name</li>
                <li>Check-in & check-out dates</li>
                <li>Room preferences</li>
                <li>Special requests</li>
                <li>Transaction history</li>
                </ul>

                <br />

                <strong>1.3 Technical & Usage Information</strong>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on website</li>
                <li>Cookies and tracking data</li>
                </ul>
            </Section>

            <Section icon={<Database />} title="2. How We Use Your Information" show={show}>
                <ul className="list-disc ml-6 space-y-2">
                <li>Process and confirm hotel bookings</li>
                <li>Communicate booking details</li>
                <li>Provide customer support</li>
                <li>Process payments</li>
                <li>Improve website functionality</li>
                <li>Send booking reminders and updates</li>
                <li>Prevent fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-4">
                Promotional emails may be sent if you opt in to receive marketing communications.
                </p>
            </Section>

            <Section icon={<CreditCard />} title="3. Payment Security" show={show}>
                We do not store full credit/debit card details on our servers.
                Payments are processed through secure third-party gateways
                using industry-standard encryption protocols.
            </Section>

            <Section icon={<Shield />} title="4. Sharing of Information" show={show}>
                <strong>4.1 Hotels / Accommodation Providers</strong>
                <p className="mt-2">To process bookings and facilitate check-in.</p>

                <br />

                <strong>4.2 Payment Processors</strong>
                <p className="mt-2">To securely complete transactions.</p>

                <br />

                <strong>4.3 Service Providers</strong>
                <p className="mt-2">
                IT support, hosting providers, analytics services, and customer support partners.
                </p>

                <br />

                <strong>4.4 Legal Authorities</strong>
                <p className="mt-2">
                If required by law, court order, or government authority.
                </p>

                <p className="mt-4 font-medium text-gray-700">
                We do not sell your personal data.
                </p>
            </Section>

            <Section icon={<Cookie />} title="5. Cookies & Tracking Technologies" show={show}>
                We use cookies to:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Enhance user experience</li>
                <li>Remember preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve services</li>
                </ul>
                You can disable cookies via browser settings,
                though functionality may be affected.
            </Section>

            <Section icon={<Database />} title="6. Data Retention" show={show}>
                We retain personal data:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>As necessary for booking services</li>
                <li>For legal, tax, or regulatory compliance</li>
                <li>For dispute resolution</li>
                </ul>
                When no longer required, data is securely deleted or anonymized.
            </Section>

            <Section icon={<Lock />} title="7. Data Security" show={show}>
                Security measures include:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>SSL encryption</li>
                <li>Secure servers</li>
                <li>Restricted data access</li>
                <li>Regular vulnerability monitoring</li>
                </ul>
                No online system is completely secure. Users share data at their own risk.
            </Section>

            <Section icon={<User />} title="8. Your Rights" show={show}>
                Depending on applicable law, you may:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion</li>
                <li>Withdraw marketing consent</li>
                <li>Object to certain processing</li>
                </ul>
                Contact us below to exercise these rights.
            </Section>

            <Section icon={<AlertTriangle />} title="9. Children’s Privacy" show={show}>
                Our Website is not intended for individuals under 18.
                We do not knowingly collect data from minors.
            </Section>

            <Section icon={<Globe />} title="10. Third-Party Links" show={show}>
                We are not responsible for the privacy practices or content of external websites.
            </Section>

            <Section icon={<Globe />} title="11. International Data Transfers" show={show}>
                If accessed from outside your country, data may be processed
                where our servers are located. By using our Website,
                you consent to such transfers.
            </Section>

            <Section icon={<Mail />} title="12. Marketing Communications" show={show}>
                If subscribed:
                <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>You may receive promotional emails.</li>
                <li>You can unsubscribe anytime via the link in the email.</li>
                </ul>
            </Section>

            <Section icon={<RefreshCw />} title="13. Changes to This Policy" show={show}>
                We may update this Privacy Policy at any time.
                Changes will be posted with the updated revision date.
                Continued use means acceptance of the revised policy.
            </Section>

            <Section icon={<Phone />} title="14. Contact Us" show={show}>
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
