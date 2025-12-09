export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-white text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="text-gray-400 leading-relaxed space-y-6">
          <p className="mb-4">
            Last updated: {new Date().getFullYear()}
          </p>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Hyper Sat streaming service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Service Usage</h2>
            <p className="mb-4">
              Our streaming service is provided for personal, non-commercial use only. You agree to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Use the service solely for personal entertainment purposes</li>
              <li>Not redistribute, resell, or share your account credentials</li>
              <li>Not use the service for any commercial or business purposes</li>
              <li>Not attempt to reverse engineer, modify, or interfere with the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Account Responsibilities</h2>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account is your responsibility. You must immediately notify us of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Prohibited Activities</h2>
            <p className="mb-4">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Sharing or redistributing account access with others</li>
              <li>Using the service for commercial purposes or resale</li>
              <li>Attempting to bypass security measures or access restricted content</li>
              <li>Using automated tools or scripts to access the service</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Service Availability</h2>
            <p className="mb-4">
              We strive to provide continuous service availability, but we do not guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Account Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend accounts that violate these Terms of Service, engage in prohibited activities, or fail to comply with our usage policies. Termination may occur without prior notice, and no refunds will be provided for terminated accounts.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content provided through our service is protected by copyright and other intellectual property laws. You may not copy, distribute, or create derivative works from the content without proper authorization.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Hyper Sat shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us through our support channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

