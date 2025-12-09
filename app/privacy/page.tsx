export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-white text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="text-gray-400 leading-relaxed space-y-6">
          <p className="mb-4">
            Last updated: {new Date().getFullYear()}
          </p>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect minimal data necessary to provide our streaming service. This includes:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Email address - solely for order delivery and account management</li>
              <li>Payment information - processed securely through third-party payment processors</li>
              <li>Usage data - for service improvement and technical support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Deliver your account credentials and service access</li>
              <li>Process payments and manage subscriptions</li>
              <li>Provide customer support and technical assistance</li>
              <li>Improve our service quality and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Data Protection</h2>
            <p className="mb-4">
              Your data is encrypted and secure. We implement industry-standard security measures to protect your personal information. We do not sell, trade, or rent your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p className="mb-4">
              We use cookies solely for site functionality and to enhance your browsing experience. These cookies are essential for the website to function properly and do not track personal information.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us through our support channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

