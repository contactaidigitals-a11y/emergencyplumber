const PHONE_DISPLAY = "07930 392 114";
const PHONE_HREF = "tel:+447930392114";

const services = [
  { number: "01", title: "Burst pipes", text: "Help with sudden pipe failures, escaping water and urgent isolation." },
  { number: "02", title: "Leaks & drips", text: "Tracing and repairing leaks from visible pipes, fittings and fixtures." },
  { number: "03", title: "Blocked sinks & toilets", text: "Practical help when everyday drainage stops working as it should." },
  { number: "04", title: "Overflowing toilets", text: "Urgent assistance to control the overflow and identify the cause." },
  { number: "05", title: "No water or low pressure", text: "Checks to find the source of interrupted flow or a sudden pressure drop." },
  { number: "06", title: "Taps, valves & cisterns", text: "Repairs for faulty controls, running cisterns and troublesome fittings." },
];

const areas = [
  "Chelmsford",
  "Braintree",
  "Brentwood",
  "Maldon",
  "Bishop’s Stortford",
  "Dunmow",
  "Witham",
  "Stansted",
];

const faqs = [
  {
    question: "Do you cover my postcode?",
    answer: "Yes — we serve every postcode beginning with CM. Give us your full postcode when you call so we can confirm current availability for your location.",
  },
  {
    question: "How quickly can you arrive?",
    answer: "Our nearest available plumber may be able to reach you in as little as 10 minutes. Your live arrival estimate depends on your postcode, traffic and engineer availability, and will be confirmed when you call.",
  },
  {
    question: "What should I tell you on the phone?",
    answer: "Tell us what has happened, where the water is coming from, whether you have been able to turn it off and your full CM postcode. A clear description helps us suggest the right next step.",
  },
  {
    question: "What should I do before help arrives?",
    answer: "If it is safe, turn off the water at your stopcock and move valuables away from the affected area. Do not touch wet electrical fittings. If there is an immediate danger, contact the appropriate emergency service.",
  },
  {
    question: "Do you help homes and businesses?",
    answer: "Yes. We take emergency plumbing calls from homeowners, tenants, landlords and businesses throughout the CM postcode area.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "ReadyCall Plumbing 24/7",
    telephone: "+447930392114",
    areaServed: "CM postcode area, United Kingdom",
    openingHours: "Mo-Su 00:00-23:59",
    description: "24/7 emergency plumbing help for homes and businesses across every CM postcode.",
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <div className="topline">
        <div className="shell topline-inner">
          <span>Open 24/7 • Emergency plumbing across every CM postcode</span>
          <a className="topline-call" href={PHONE_HREF} aria-label={`Call ${PHONE_DISPLAY}`}><span className="topline-call-label">Call now</span><strong>{PHONE_DISPLAY}</strong><span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="ReadyCall Plumbing 24/7 home">
            <span className="brand-mark" aria-hidden="true">RC</span>
            <span className="brand-name"><strong>ReadyCall</strong><span>Plumbing 24/7</span></span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#coverage">Coverage</a>
            <a href="#process">How it works</a>
            <a href="#faq">FAQs</a>
          </nav>

          <a className="header-call" href={PHONE_HREF}>
            <span className="phone-dot" aria-hidden="true" />
            <span><small>Call now</small><strong>{PHONE_DISPLAY}</strong></span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse" aria-hidden="true" />All CM postcodes • Open 24/7</div>
              <h1>24/7 emergency plumber.<span>At your door in as little as 10 minutes.</span></h1>
              <p className="hero-lead">
                Burst pipe, leak, blockage or no water? Call your local rapid-response plumber, serving every CM postcode day and night.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={PHONE_HREF}><span className="call-icon" aria-hidden="true">↗</span>Call now — {PHONE_DISPLAY}</a>
                <a className="button button-secondary" href="#services">View emergency services</a>
              </div>
              <p className="call-note"><span aria-hidden="true">i</span>10-minute arrival may be available depending on postcode, traffic and engineer availability. We’ll confirm your live ETA by phone.</p>
            </div>

            <aside className="call-card" aria-label="What happens when you call">
              <div className="call-card-top">
                <span>24/7 emergency call guide</span>
                <span className="availability-dot">Live ETA confirmed by phone</span>
              </div>
              <h2>Need us now?</h2>
              <ol>
                <li><span>01</span><div><strong>Tell us what happened</strong><p>Describe the fault and where the water is coming from.</p></div></li>
                <li><span>02</span><div><strong>Share your CM postcode</strong><p>We’ll check the nearest available plumber and your live ETA.</p></div></li>
                <li><span>03</span><div><strong>Agree the next step</strong><p>We’ll explain what happens next before you book.</p></div></li>
              </ol>
              <a href={PHONE_HREF} className="call-card-number"><small>Tap to call</small><strong>{PHONE_DISPLAY}</strong><span aria-hidden="true">↗</span></a>
              <div className="coverage-stamp" aria-hidden="true"><strong>CM</strong><span>Full postcode coverage</span></div>
            </aside>
          </div>

          <div className="shell assurance-row" aria-label="Service highlights">
            <div><span className="assurance-symbol" aria-hidden="true">24/7</span><p><strong>Open day & night</strong><span>Emergency calls 365 days</span></p></div>
            <div><span className="assurance-symbol" aria-hidden="true">10</span><p><strong>From 10 minutes</strong><span>Subject to location & availability</span></p></div>
            <div><span className="assurance-symbol" aria-hidden="true">CM</span><p><strong>Every CM postcode</strong><span>Full area coverage</span></p></div>
          </div>
        </section>

        <section className="safety-strip" aria-label="Immediate safety guidance">
          <div className="shell safety-inner">
            <span className="safety-label">While you call</span>
            <p>If it is safe, turn off the water at the stopcock and keep clear of wet electrical fittings.</p>
            <a href="#faq">More guidance <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div><span className="section-kicker">What we can help with</span><h2>Urgent plumbing problems, handled clearly.</h2></div>
              <p>Start with a call. We’ll listen, confirm current availability and help you understand the next practical step.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={PHONE_HREF} aria-label={`Call about ${service.title}`}>Call about this <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section coverage-section" id="coverage">
          <div className="shell coverage-layout">
            <div className="coverage-visual" aria-hidden="true">
              <div className="coverage-orbit orbit-one" /><div className="coverage-orbit orbit-two" />
              <div className="coverage-pin"><span>Coverage area</span><strong>CM</strong><small>All postcodes</small></div>
              <div className="coverage-route route-one" /><div className="coverage-route route-two" />
            </div>

            <div className="coverage-copy">
              <span className="section-kicker light">Where we work</span>
              <h2>If your postcode starts with CM, you’re in our service area.</h2>
              <p>We take emergency plumbing calls throughout the complete CM postcode area. Share your full postcode when you call so we can confirm current availability.</p>
              <div className="area-list" aria-label="Example CM locations">
                {areas.map((area) => <span key={area}>{area}</span>)}
                <span>& surrounding CM locations</span>
              </div>
              <a className="button button-light" href={PHONE_HREF}>Call from any CM postcode <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell">
            <div className="process-intro"><div><span className="section-kicker">A simple first step</span><h2>One call. Three clear steps.</h2></div></div>
            <div className="process-grid">
              <article><span className="process-index">01</span><div className="process-line" aria-hidden="true" /><h3>Call</h3><p>Use the direct number and speak to us about the problem.</p></article>
              <article><span className="process-index">02</span><div className="process-line" aria-hidden="true" /><h3>Describe</h3><p>Tell us what is happening and give us your full CM postcode.</p></article>
              <article><span className="process-index">03</span><div className="process-line" aria-hidden="true" /><h3>Confirm</h3><p>We’ll explain the next step and current availability clearly.</p></article>
            </div>
          </div>
        </section>

        <section className="clarity-section">
          <div className="shell clarity-grid">
            <div className="clarity-heading"><span className="section-kicker light">Calm, practical support</span><h2>Clear help when plumbing goes wrong.</h2></div>
            <div className="clarity-copy">
              <p>Tell us what is happening and share your postcode. We’ll confirm current availability, explain the next practical step and discuss the work before you book.</p>
              <div className="clarity-points">
                <span><i aria-hidden="true">✓</i> Clear communication</span>
                <span><i aria-hidden="true">✓</i> Respectful care in your property</span>
                <span><i aria-hidden="true">✓</i> Homes, landlords & businesses</span>
              </div>
              <small>10-minute arrival is not guaranteed and depends on postcode, traffic and current call-out demand.</small>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-layout">
            <div className="faq-intro">
              <span className="section-kicker">Good to know</span><h2>Emergency plumbing FAQs</h2>
              <p>Can’t see your question? Call us and tell us what’s happening.</p>
              <a href={PHONE_HREF}>{PHONE_DISPLAY} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><i aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-grid" aria-hidden="true" />
          <div className="shell final-cta-inner">
            <div><span className="section-kicker light">24/7 emergency plumber</span><h2>Call now for your live arrival time.</h2></div>
            <a className="final-call" href={PHONE_HREF}><small>Tap to call now</small><strong>{PHONE_DISPLAY}</strong><span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main">
          <a className="brand brand-footer" href="#top" aria-label="ReadyCall Plumbing 24/7 home"><span className="brand-mark" aria-hidden="true">RC</span><span className="brand-name"><strong>ReadyCall</strong><span>Plumbing 24/7</span></span></a>
          <p>24/7 emergency plumbing help across every postcode beginning with CM.</p>
          <a className="footer-phone" href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
        </div>
        <div className="shell footer-bottom"><span>ReadyCall Plumbing 24/7</span><span>Open 24/7 • Serving the complete CM postcode area</span></div>
      </footer>

      <a className="mobile-call-bar" href={PHONE_HREF} aria-label={`Call emergency plumber on ${PHONE_DISPLAY}`}>
        <span className="phone-dot" aria-hidden="true" /><span>Call emergency plumber</span><strong>{PHONE_DISPLAY}</strong>
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
