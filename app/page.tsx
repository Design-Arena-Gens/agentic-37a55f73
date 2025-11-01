"use client";
import Image from 'next/image';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Accordion from 'components/Accordion';
import Carousel from 'components/Carousel';
import Reveal from 'components/Reveal';
import { useMemo, useState } from 'react';

export default function Page() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ModelsShowcase />
      <UseCases />
      <FeaturesDeepDive />
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="ring" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="badge">
            <span>New</span>
            <span className="kbd">?K</span>
            <span>Command Palette</span>
          </div>
        </Reveal>
        <Reveal>
          <h1 className="mt-2">Build, evaluate, and deploy AI workflows ? fast</h1>
        </Reveal>
        <Reveal>
          <p className="mt-2" aria-live="polite">Parallax AI unifies prompt engineering, evaluation, and scalable deployment so teams ship confidently.</p>
        </Reveal>
        <Reveal>
          <div className="hero-cta">
            <form className="input-wrap" onSubmit={(e) => e.preventDefault()} aria-label="Get started">
              <input type="email" required placeholder="Enter your work email" aria-label="Email" />
              <button className="btn" type="submit">Start free</button>
            </form>
            <a className="btn secondary" href="#how">See how it works</a>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            {[
              ['99.99% uptime', 'Global edge runtime'],
              ['SOC 2 Type II', 'Enterprise ready'],
              ['SDKs', 'JS ? Python ? Go']
            ].map(([k, v]) => (
              <div key={k} className="card card-pad glas">
                <div className="section-sub" style={{ fontWeight: 600 }}>{k}</div>
                <div className="muted">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}

function Problem() {
  const items = [
    ['Fragmented tooling', 'Prompts, evals, and deployment live in different places creating friction.'],
    ['Slow iteration', 'Hard to compare versions and prove improvements with real metrics.'],
    ['Risky rollouts', 'No guardrails to catch regressions before customers do.']
  ];
  return (
    <section id="problem" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">The problem</h2>
        </Reveal>
        <Reveal>
          <p className="section-sub mt-1">AI work is bottlenecked by disconnected tools and guesswork.</p>
        </Reveal>
        <div className="grid mt-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
          {items.map(([title, desc]) => (
            <Reveal key={title}>
              <div className="card card-pad">
                <div style={{ fontWeight: 600 }}>{title}</div>
                <p className="muted mt-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">The solution</h2>
        </Reveal>
        <Reveal>
          <p className="section-sub mt-1">One platform for prompt design, evaluation, and safe deployment.</p>
        </Reveal>
        <Reveal>
          <div className="card card-pad glas mt-3">
            <div className="grid" style={{ gridTemplateColumns: '1.2fr .8fr', alignItems: 'center' }}>
              <div>
                <ul className="mt-2" style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 10 }}>
                  {[
                    'Version prompts and parameters with instant diffs',
                    'Run evals on real data with robust metrics',
                    'Ship canary rollouts with automatic rollback'
                  ].map(point => (
                    <li key={point} className="row"><span>?</span><span>{point}</span></li>
                  ))}
                </ul>
              </div>
              <div className="center">
                <Image src="/pattern.svg" alt="Decorative" width={320} height={220} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['Design', 'Create variants, chain tools, and add guardrails.'],
    ['Evaluate', 'Benchmark with golden sets and crowd labels.'],
    ['Deploy', 'Publish to production with traffic splitting and monitoring.']
  ];
  return (
    <section id="how" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">How it works</h2>
        </Reveal>
        <div className="grid mt-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
          {steps.map(([title, desc], i) => (
            <Reveal key={title}>
              <div className="card card-pad">
                <div className="badge">Step {i + 1}</div>
                <div style={{ fontWeight: 600 }} className="mt-1">{title}</div>
                <p className="muted mt-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelsShowcase() {
  const models = useMemo(
    () => [
      ['Parallax LLM', 'Optimized for reasoning and tools'],
      ['Vision XL', 'Multimodal OCR and VQA'],
      ['Fast Lite', 'Low-latency routing for chat'],
      ['Code Sense', 'Refactoring and doc generation'],
      ['Speech Pro', 'Streaming ASR + TTS'],
      ['Guardrail Kit', 'PII, toxicity, jailbreak filters']
    ],
    []
  );

  return (
    <section id="models" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Models and tools</h2>
        </Reveal>
        <Reveal>
          <Carousel ariaLabel="Model showcase">
            {models.map(([name, desc]) => (
              <div key={name} className="card card-pad" style={{ width: 320, scrollSnapAlign: 'start' }}>
                <div className="row"><span className="badge" aria-hidden={true}>Model</span></div>
                <div style={{ fontWeight: 600 }} className="mt-1">{name}</div>
                <p className="muted mt-1">{desc}</p>
              </div>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

function UseCases() {
  const useCases = [
    ['Support Automation', 'Deflect tickets with accurate, on-brand replies.'],
    ['Content Generation', 'Personalized copy that converts across channels.'],
    ['Data Extraction', 'Structured outputs from messy inputs at scale.'],
    ['Search & RAG', 'Grounded answers with citations.'],
    ['Voice Agents', 'Real-time, natural conversations.'],
    ['Developer Tools', 'Code transforms and documentation.']
  ];
  return (
    <section id="use-cases" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Use cases</h2>
        </Reveal>
        <div className="grid mt-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
          {useCases.map(([title, desc]) => (
            <Reveal key={title}>
              <div className="card card-pad">
                <div style={{ fontWeight: 600 }}>{title}</div>
                <p className="muted mt-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesDeepDive() {
  const items = [
    {
      title: 'Versioning & Experiments',
      content: 'Track every change to prompts, parameters, and tools. Branch, compare, and merge with confidence.'
    },
    {
      title: 'Evaluation Suite',
      content: 'Golden sets, human-in-the-loop labels, quality gates, and regression catchers integrated into CI.'
    },
    { title: 'Observability', content: 'Traces, costs, latencies, and outcomes with per-dimension drilldowns and alerts.' },
    { title: 'Safety & Guardrails', content: 'PII redaction, toxicity filters, jailbreak detection, and allow/block lists.' }
  ];
  return (
    <section id="features" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Features deep dive</h2>
        </Reveal>
        <Reveal>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const [interval, setInterval] = useState<'Monthly' | 'Yearly'>('Monthly');
  const plans = useMemo(() => {
    const factor = interval === 'Yearly' ? 0.8 : 1;
    return [
      {
        name: 'Starter',
        price: Math.round(29 * factor),
        desc: 'For individuals and small projects',
        features: ['10k requests/day', 'Community support', 'Basic evals']
      },
      {
        name: 'Team',
        price: Math.round(99 * factor),
        desc: 'For growing teams',
        features: ['200k requests/day', 'Advanced evals', 'Role-based access']
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        desc: 'For org-wide adoption',
        features: ['SAML/SSO', 'SOC 2 Type II', 'Dedicated support']
      }
    ];
  }, [interval]);

  return (
    <section id="pricing" className="section">
      <div className="container">
        <Reveal>
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title">Pricing</h2>
            <div className="toggle" role="tablist" aria-label="Billing interval">
              {(['Monthly', 'Yearly'] as const).map(opt => (
                <button
                  key={opt}
                  role="tab"
                  aria-selected={interval === opt}
                  className={interval === opt ? 'active' : ''}
                  onClick={() => setInterval(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid mt-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          {plans.map(plan => (
            <Reveal key={plan.name}>
              <div className="card card-pad">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 700 }}>{plan.name}</div>
                  {plan.name === 'Team' && <span className="badge">Most popular</span>}
                </div>
                <div className="mt-1" style={{ fontSize: '2rem', fontWeight: 700 }}>
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  {typeof plan.price === 'number' && <span className="muted" style={{ fontSize: '1rem' }}>/mo</span>}
                </div>
                <p className="muted mt-1">{plan.desc}</p>
                <ul className="mt-2" style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: 8 }}>
                  {plan.features.map(f => (
                    <li key={f} className="row"><span>?</span><span>{f}</span></li>
                  ))}
                </ul>
                <button className="btn mt-2" aria-label={`Choose ${plan.name}`}>Get started</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const quotes = [
    ['?Parallax cut our iteration time by 10x.?', 'Head of AI, Fintech'],
    ['?The eval suite is a game changer for quality.?', 'Director of Product, SaaS'],
    ['?We shipped a reliable agent in a week.?', 'CTO, Startup']
  ];

  return (
    <section id="social-proof" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Loved by teams shipping AI</h2>
        </Reveal>
        <Reveal>
          <Carousel ariaLabel="Customer testimonials">
            {quotes.map(([q, a]) => (
              <figure key={q} className="card card-pad" style={{ width: 420, scrollSnapAlign: 'start' }}>
                <blockquote style={{ fontSize: '1.1rem' }}>{q}</blockquote>
                <figcaption className="muted mt-1">{a}</figcaption>
              </figure>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { title: 'Can I self-host?', content: 'Yes, Enterprise plans support VPC and on-prem deployment.' },
    { title: 'Which languages are supported?', content: 'JavaScript/TypeScript, Python, and Go SDKs are available.' },
    { title: 'Is there a free tier?', content: 'Yes, the Starter plan includes generous limits to explore the platform.' }
  ];
  return (
    <section id="faq" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">FAQ</h2>
        </Reveal>
        <Reveal>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="section-sm center">
      <div className="container center">
        <Reveal>
          <div className="card card-pad glas" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to accelerate your AI roadmap?</h2>
            <p className="section-sub mt-1">Start free. No credit card required.</p>
            <form className="input-wrap mt-2" onSubmit={(e) => e.preventDefault()} aria-label="Join waitlist">
              <input type="email" required placeholder="Enter your work email" aria-label="Email" />
              <button className="btn" type="submit">Create account</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
