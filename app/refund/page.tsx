export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-white text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="text-gray-400 leading-relaxed space-y-6">
          <p className="mb-4">
            Last updated: {new Date().getFullYear()}
          </p>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">24-Hour Free Trial</h2>
            <p className="mb-4">
              We offer a 24-hour free trial to ensure you are satisfied with our streaming service before making a purchase. During this trial period, you can test the stability, quality, and features of our service at no cost.
            </p>
            <p className="mb-4">
              To request your free trial, please contact us through our support channels. Your trial access will be activated immediately upon request.
            </p>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">7-Day Money-Back Guarantee</h2>
            <p className="mb-4">
              We stand behind the quality of our service. If you experience technical issues that cannot be resolved by our support team within 7 days of your purchase, you are eligible for a full refund.
            </p>
            <p className="mb-4">
              To be eligible for a refund:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>You must contact our support team within 7 days of purchase</li>
              <li>You must allow our support team to attempt to resolve the technical issue</li>
              <li>The issue must be a legitimate technical problem that prevents service usage</li>
              <li>Refund requests must be made through our official support channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Refund Processing</h2>
            <p className="mb-4">
              Once your refund request is approved:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Refunds are processed within 5-7 business days</li>
              <li>Refunds will be issued to the original payment method used for purchase</li>
              <li>You will receive a confirmation email once the refund is processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Non-Refundable Situations</h2>
            <p className="mb-4">
              Refunds will not be provided in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>After the 7-day guarantee period has expired</li>
              <li>If the account has been terminated due to Terms of Service violations</li>
              <li>If technical issues are resolved by our support team</li>
              <li>If the refund request is made after account sharing or redistribution has occurred</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">How to Request a Refund</h2>
            <p className="mb-4">
              To request a refund, please contact our support team through our official channels. Include the following information:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Your account email address</li>
              <li>Order number or transaction ID</li>
              <li>Description of the technical issue encountered</li>
              <li>Any relevant screenshots or error messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our refund policy or need assistance with a refund request, please contact our support team. We are here to help ensure your satisfaction with our service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

