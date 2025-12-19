import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <section className="bg-gradient-to-br from-organic-green-900 to-organic-green-800 text-white py-16 leaf-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 text-organic-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">Terms & Conditions</h1>
          <p className="text-xl text-center text-gray-300">
            Last Updated: December 18, 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf
                of an entity, and TheRoyalFarms, concerning your access to and use of our website and services. You agree that by
                accessing the website, you have read, understood, and agree to be bound by all of these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality,
                software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content")
                and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed
                to us, and are protected by copyright and trademark laws.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">User Representations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using the website, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the website through automated or non-human means</li>
                <li>You will not use the website for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Products and Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We make every effort to display as accurately as possible the colors, features, specifications, and details of the
                products available on the website. However, we do not guarantee that the colors, features, specifications, and details
                of the products will be accurate, complete, reliable, current, or free of other errors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right
                to discontinue any products at any time for any reason. Prices for all products are subject to change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Orders and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities
                purchased per person, per household, or per order. These restrictions may include orders placed by or under the same
                customer account, the same credit card, or orders that use the same billing address.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the
                website. You agree to promptly update account and payment information, including email address, payment method, and
                payment card expiration date, so that we can complete your transactions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Orders</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Custom orders require a minimum of 48-72 hours notice, depending on the complexity of the order. Rush orders may be
                accommodated at our discretion and may incur additional fees. A deposit of 50% is required for all custom orders, with
                the remaining balance due upon pickup or delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Custom orders are non-refundable once production has begun. Any cancellations made after the deposit has been paid will
                result in forfeiture of the deposit.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery and Pickup</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer both delivery and pickup options. Delivery is available within a specified radius of our location for an
                additional fee. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by weather,
                traffic, or other circumstances beyond our control. For pickup orders, products must be collected within the agreed
                timeframe. We reserve the right to dispose of uncollected orders after 24 hours.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Refunds and Returns</h2>
              <p className="text-gray-700 leading-relaxed">
                Due to the perishable nature of our products, we do not offer refunds or returns unless the product is damaged or
                defective. If you receive a damaged or defective product, please contact us immediately with photographic evidence,
                and we will work to resolve the issue promptly. Refunds or replacements will be provided at our sole discretion.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Allergies and Dietary Restrictions</h2>
              <p className="text-gray-700 leading-relaxed">
                Our products may contain or come into contact with common allergens including wheat, eggs, nuts, soy, and dairy. While
                we take precautions to prevent cross-contamination, we cannot guarantee that any product is completely free from
                allergens. It is the customer's responsibility to inform us of any allergies or dietary restrictions when placing an
                order. We are not liable for any allergic reactions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect,
                consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data,
                or other damages arising from your use of the website or products, even if we have been advised of the possibility of
                such damages.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including
                reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the website,
                breach of these Terms and Conditions, or violation of the rights of a third party.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and defined following the laws of the State of New York. TheRoyalFarms
                and yourself irrevocably consent that the courts of New York shall have exclusive jurisdiction to resolve any dispute
                which may arise in connection with these terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any
                time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms and
                Conditions. It is your responsibility to periodically review these Terms and Conditions to stay informed of updates.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-2">
                <p className="text-gray-800"><strong>Email:</strong> legal@theroyalfarms.shop</p>
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
