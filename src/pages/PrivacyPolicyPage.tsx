import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <section className="bg-gradient-to-br from-organic-green-900 to-organic-green-800 text-white py-16 leaf-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-organic-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">Privacy Policy</h1>
          <p className="text-xl text-center text-gray-300">
            Last Updated: December 18, 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to TheRoyalFarms. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our website
                and tell you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Identity Data: includes first name, last name, username or similar identifier</li>
                <li>Contact Data: includes billing address, delivery address, email address and telephone numbers</li>
                <li>Transaction Data: includes details about payments to and from you and other details of products and services you have purchased from us</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                <li>Usage Data: includes information about how you use our website, products and services</li>
                <li>Marketing and Communications Data: includes your preferences in receiving marketing from us and your communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To process and deliver your order including managing payments and collecting money owed to us</li>
                <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy</li>
                <li>To enable you to participate in promotions or surveys</li>
                <li>To administer and protect our business and website, including troubleshooting and data analysis</li>
                <li>To deliver relevant website content and advertisements to you</li>
                <li>To use data analytics to improve our website, products, services, marketing, customer relationships and experiences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data
                to those employees, agents, contractors and other third parties who have a business need to know. They will only
                process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for,
                including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain
                your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of
                litigation in respect to our relationship with you.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Legal Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good
                experience when you browse our website and also allows us to improve our site. A cookie is a small file of letters and
                numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that
                is transferred to your computer's hard drive.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling
                those connections may allow third parties to collect or share data about you. We do not control these third-party websites
                and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy
                policy of every website you visit.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy
                on this page and updating the "Last Updated" date at the top of this privacy policy. You are advised to review this
                privacy policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-2">
                <p className="text-gray-800"><strong>Email:</strong> privacy@theroyalfarms.shop</p>
                <p className="text-gray-800"><strong>Phone:</strong> +91 91221 22708</p>
                <p className="text-gray-800"><strong>Address:</strong> Faridabad Sec 37 , Haryana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
