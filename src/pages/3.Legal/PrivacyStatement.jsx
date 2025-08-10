import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import Footer from '../../components/Navigation/Footer';

const PrivacyStatement = () => {
  {/* Privacy Statement sections data */}
  const privacySections = [
    {
      id: 1,
      title: "Information We Collect",
      content: "We collect various types of information to provide and improve our services:",
      listItems: [
        "Personal Information: Name, email, phone number, payment details (upon registration)",
        "Profile Information: Photos, media, user-generated content",
        "Usage Data: Interactions, \"Buzzer Button\" use, event creation/participation",
        "Device and Log Information: IP address, browser type, operating system, access times, pages viewed"
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: "We use the collected data for the following purposes:",
      listItems: [
        "Provide Services: Operate and maintain Properhaze, process transactions (e.g., confetti monetary rewards), enable user interactions",
        "Improve User Experience: Personalize content, enhance features, provide recommendations",
        "Communicate with You: Send updates, notifications, important information",
        "Ensure Safety: Monitor, detect, prevent fraudulent/unauthorized activities, enforce Terms of Use",
        "Comply with Legal Obligations: Use data for legal and compliance purposes"
      ]
    },
    {
      id: 3,
      title: "How We Share Your Information",
      content: "We may share your information in the following situations:",
      listItems: [
        "Service Providers: Sharing with third-party providers for platform operation, payment processing, data analytics, or customer support (bound by confidentiality agreements)",
        "Legal Compliance: Disclosure for legal obligations, regulatory requests, or to protect rights/safety",
        "Business Transfers: Information transfer during a merger, acquisition, or sale of assets"
      ],
      additionalText: "We do not sell or rent your personal information to third parties."
    },
    {
      id: 4,
      title: "Data Security",
      content: "We are committed to protecting your personal information and implement appropriate security measures. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security."
    },
    {
      id: 5,
      title: "Cookies and Tracking Technologies",
      content: "We use cookies and similar tracking technologies to enhance your user experience, analyze platform usage, and deliver personalized content. By using our platform, you agree to our use of cookies. You can control your cookie preferences through your browser settings."
    },
    {
      id: 6,
      title: "Your Privacy Rights",
      content: "Depending on your location, you may have certain rights concerning your personal data:",
      listItems: [
        "Access and Correction: Request access to or correction of your personal data",
        "Deletion: Request deletion in certain circumstances",
        "Objection to Processing: Object to certain uses (e.g., marketing communications)",
        "Data Portability: Request a copy of your data in a structured, commonly used format"
      ],
      additionalText: "To exercise these rights, contact us at properhaze0@gmail.com. Identity verification may be required."
    },
    {
      id: 7,
      title: "Data Retention",
      content: "We retain your personal information as long as necessary to provide our services or as required by law. When information is no longer needed, we will securely delete or anonymize it."
    },
    {
      id: 8,
      title: "Children's Privacy",
      content: "Properhaze is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that we have collected such information, we will take steps to delete it."
    },
    {
      id: 9,
      title: "International Users",
      content: "If you access Properhaze from outside [Insert Jurisdiction], your data may be transferred to and processed in a country with different data protection laws. By using our platform, you consent to such transfers."
    },
    {
      id: 10,
      title: "Changes to This Privacy Statement",
      content: "We may update this Privacy Statement periodically. We will notify you of any changes by posting the revised statement and updating the \"Effective Date.\" Your continued use of Properhaze constitutes acceptance of the updated policy."
    },
    {
      id: 11,
      title: "Contact Us",
      content: "If you have questions or concerns about this Privacy Statement or our data handling practices, please contact us:",
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
              Privacy Statement
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-placeholder)]">
              Effective Date: [Insert Date]
            </p>
          </div>
          
          {/* Introduction */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg text-[var(--color-on-contrast)] leading-relaxed">
              Properhaze is committed to protecting your personal information. This Privacy Statement explains how we collect, use, store, and disclose your information when you use our platform. By accessing or using Properhaze, you agree to the practices described in this statement.
            </p>
          </div>
          
          {/* Privacy Sections */}
          <div className="space-y-6 sm:space-y-8">
            {privacySections.map((section) => (
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
                
                {/* Additional Text */}
                {section.additionalText && (
                  <p className="text-sm sm:text-base text-[var(--color-on-contrast)] mt-3 sm:mt-4">
                    {section.additionalText}
                  </p>
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

export default PrivacyStatement;
