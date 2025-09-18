export default function PrivacyPolicy() {
  return (
    <main className="prose prose-slate max-w-3xl mx-auto py-10">
      <h1>Privacy Policy</h1>
      <p>SaveWise Hub respects your privacy. This MVP describes how we collect, use, and protect your data.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Account details (email, phone)</li>
        <li>KYC information (BVN, ID and address for full KYC)</li>
        <li>Transaction data for savings, investments, and loans</li>
      </ul>
      <h2>Why we collect</h2>
      <ul>
        <li>To provide core features like automated savings, loans, and group savings</li>
        <li>To meet compliance obligations (KYC/AML)</li>
        <li>To improve the product and prevent fraud</li>
      </ul>
      <h2>How we protect your data</h2>
      <ul>
        <li>Tiered KYC, fraud checks, and audit logs</li>
        <li>No unauthorized debits; user consent is required</li>
        <li>Industry best practices and secure providers (Paystack/Flutterwave)</li>
      </ul>
      <p>If you have questions, contact support@savewisehub.com.</p>
    </main>
  );
}
