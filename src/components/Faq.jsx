export default function Faq() {
  return (
    <div className="faq text-dark">
      <h3>Frequently Asked Questions</h3>

      <div className="question">
        <p><strong>What forms of payment do you accept?</strong></p>
        <p>We accept all major credit cards, as well as PayPal and Apple Pay.</p>
      </div>

      <div className="question">
        <p><strong>How long does shipping take?</strong></p>
        <p>Shipping times vary depending on your location and the shipping method you choose at checkout. We offer standard and expedited shipping options.</p>
      </div>

      <div className="question">
        <p><strong>What is your return policy?</strong></p>
        <p>We offer a 30-day return policy for most items. Please see our Returns page for more information.</p>
      </div>

      <div className="question">
        <p><strong>Can I track my order?</strong></p>
        <p>Yes, you will receive a tracking number once your order has shipped.</p>
      </div>

      <div className="question">
        <p><strong>Do you offer international shipping?</strong></p>
        <p>Yes, we offer international shipping to select countries. Please see our Shipping page for more information.</p>
      </div>
    </div>
  )
}
