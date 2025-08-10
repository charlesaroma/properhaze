import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import Footer from '../../components/Navigation/Footer';

const TermsOfUse = () => {
  {/* Terms of Use sections data */}
  const termsSections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: "By using Properhaze, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as our Privacy Policy, Cookie Policy, and any other policies referenced herein."
    },
    {
      id: 2,
      title: "Eligibility",
      content: "To use Properhaze, you must:",
      listItems: [
        "Be at least 18 years of age",
        "Have the legal capacity to enter into these terms",
        "Provide accurate, complete, and current registration information and keep it updated",
        "Agree to use the platform in compliance with all applicable laws and regulations"
      ]
    },
    {
      id: 3,
      title: "Account Responsibility",
      content: "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account. Properhaze is not liable for any loss or damage arising from unauthorized access. You must notify us immediately of any unauthorized use or security breach."
    },
    {
      id: 4,
      title: "User Conduct",
      content: "When using Properhaze, you agree to:",
      listItems: [
        "Use the platform for lawful purposes only",
        "Refrain from impersonating others, providing false information, or engaging in fraudulent activity",
        "Not abuse, harass, threaten, or harm any individual",
        "Not upload, share, or distribute illegal, offensive, defamatory, or intellectual property-violating content"
      ]
    },
    {
      id: 5,
      title: "Properhaze Platform Use",
      content: "Our platform features include \"Buzzer Button,\" confetti (monetary rewards), and event attachments. You agree to:",
      listItems: [
        "Use monetary rewards and confetti according to our guidelines and applicable laws",
        "Not misuse the anonymous feature to harass, abuse, or violate privacy",
        "Understand that any celebration, confetti, or content shared is non-refundable once dispatched",
        "Ensure that submitted content (text, images, media) does not violate third-party rights or laws"
      ]
    },
    {
      id: 6,
      title: "Intellectual Property",
      content: "All content, trademarks, logos, and intellectual property on Properhaze are our property or that of our licensors. You are granted a limited, non-exclusive, non-transferable license for personal, non-commercial use. You agree not to copy, distribute, modify, or create derivative works without permission."
    },
    {
      id: 7,
      title: "Payments and Transactions",
      content: "Confetti serves as a celebration medium that translates to monetary rewards. You agree that:",
      listItems: [
        "Transactions involving confetti are voluntary and non-refundable",
        "Properhaze is not responsible for third-party payment issues (delays, fees, fraud)",
        "You must use an authorized payment method and ensure accurate payment information"
      ]
    },
    {
      id: 8,
      title: "Events and Celebrations",
      content: "Properhaze provides a selection of international and personal events:",
      listItems: [
        "We are not responsible for inaccuracies in event listings",
        "You are encouraged to create custom events responsibly, adhering to our guidelines"
      ]
    },
    {
      id: 9,
      title: "Suspension and Termination",
      content: "We reserve the right to suspend or terminate accounts for violations of these terms or disruptive activities. Upon termination, all your rights cease, and you lose access to the platform."
    },
    {
      id: 10,
      title: "Limitation of Liability",
      content: "Properhaze is not liable for indirect, incidental, special, consequential, or punitive damages (including loss of data, revenue, or profits) arising from your use or inability to use the platform."
    },
    {
      id: 11,
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold Properhaze, its affiliates, employees, and partners harmless from any claims, damages, or expenses arising from your violation of these terms or account activity."
    },
    {
      id: 12,
      title: "Modifications to Terms",
      content: "We can modify or update these Terms of Use at any time. Changes are effective upon posting. You are responsible for reviewing the terms regularly, and continued use implies acceptance of modified terms."
    },
    {
      id: 13,
      title: "Governing Law",
      content: "These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to conflict of law provisions."
    },
    {
      id: 14,
      title: "Contact Us",
      content: "If you have questions about these Terms of Use, please contact us:",
      contactInfo: [
        { label: "Email", value: "properhaze0@gmail.com", type: "email" },
        { label: "Phone", value: "+254 70 000 000", type: "phone" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-cream-canvas)]">
      {/* Navigation */}
      <div className="bg-[var(--color-black-canvas)]">
        <Navbar isAuthenticated={false} onLogout={() => {}} />
      </div>
      
      {/* Main Content */}
      <div className="pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-black-canvas)] mb-3 sm:mb-4">
              Terms of Use
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-placeholder)]">
              Effective Date: [Insert Date]
            </p>
          </div>
          
          {/* Introduction */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg text-[var(--color-on-contrast)] leading-relaxed">
              Welcome to Properhaze. By accessing or using our platform, you agree to comply with and be bound by these Terms of Use. Please read them carefully. If you do not agree to these terms, you must discontinue use of our platform.
            </p>
          </div>
          
          {/* Terms Sections */}
          <div className="space-y-6 sm:space-y-8">
            {termsSections.map((section) => (
              <section key={section.id} className="mb-6 sm:mb-8">
                {/* Section Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-link)] mb-3 sm:mb-4">
                  {section.id}. {section.title}
                </h2>
                
                {/* Section Content */}
                {section.content && (
                  <p className="text-sm sm:text-base text-[var(--color-on-contrast)] mb-3 sm:mb-4">
                    {section.content}
                  </p>
                )}
                
                {/* Section List Items */}
                {section.listItems && (
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-[var(--color-on-contrast)]">
                    {section.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {/* Contact Information */}
                {section.contactInfo && (
                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[var(--color-on-contrast)]">
                    {section.contactInfo.map((info, index) => (
                      <p key={index}>
                        <strong>{info.label}:</strong>{' '}
                        {info.type === 'email' ? (
                          <a 
                            href={`mailto:${info.value}`} 
                            className="text-[var(--color-link)] hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[var(--color-black-canvas)]">
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfUse;
