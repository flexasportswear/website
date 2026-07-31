import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Calendar, Building2, Globe, Headphones,
  Trophy, GraduationCap, School, Tag, Store, Package,
  Lightbulb, PencilRuler, Shirt, CheckCircle2, Factory,
  ScanLine, Ship, MessageSquare, Eye, ShieldCheck, Clock,
  Sparkles, Layers, Boxes, Users, Handshake,
  Palette, Printer, Scissors, Ruler, BadgeCheck, Plane,
  ChevronDown,
  Laptop,
  Dumbbell,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading, CTAButton } from '@/components/ui';
import { images } from '@/lib/images';

/* ---------- Section 1: Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.heroFootball}
          alt=""
          className="h-full w-full object-cover object-center opacity-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-24 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 animate-fade-down">
            <span className="h-px w-10 bg-accent-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">
              Sialkot, Pakistan — Worldwide Shipping.
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance animate-fade-up">
            Manufacturing Custom apparel for Clubs &amp; Brands
            Worldwide.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg animate-fade-up [animation-delay:150ms]">
            Flexasportswear helps sports clubs, academies, startups, and
            brands by manufacturing premium-quality custom apparel — designed,
            sampled, and produced directly from Sialkot, Pakistan.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:300ms]">
            <CTAButton to="/contact" variant="primary" className="bg-ink-900 text-white hover:bg-ink-50">
              Get a Quote
            </CTAButton>
            <CTAButton to="/manufacturing" variant="ghost" className="text-white border border-white/30 hover:bg-white/100">
              Explore Manufacturing
            </CTAButton>
          </div>
        </div>

        {/* Floating stats */}
        <div className="mt-16 flex flex-wrap gap-8 animate-fade-up [animation-delay:500ms]">
          {[
            { value: '2022', label: 'Founded' },
            { value: '40+', label: 'Manufacturing Partners' },
            { value: '100%', label: 'Custom Production' },
            { value: 'Global.', label: 'Shipping Coverage' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:800ms]">
        <ChevronDown className="h-6 w-6 text-white/100 animate-bounce" />
      </div>
    </section>
  );
}

/* ---------- Section 2: Trusted Partner ---------- */
function TrustedPartner() {
  const cards = [
    { icon: Laptop, label: 'Pre-Production', value: 'We Provide "FREE" Mockups & Tech Packs Before Production.' },
    { icon: Calendar, label: 'TURN-OVER TIME', value: '~ 5-Days Turnaround (Depending on Order Complexity).' },
    { icon: Globe, label: 'Shipping', value: 'Fast & Reliable Shipping Worldwide.' },
    { icon: Headphones, label: 'Support', value: 'Available 24/7 to Help You Get Started.' },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Trusted Manufacturing Partner"
            title="Built on transparency and craft"
            description="A modern manufacturing partner rooted in Sialkot's world-renowned sporting goods heritage."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 80}>
              <div className="group h-full rounded-2xl border flex-col items-center text-center border-ink-100 bg-ink-50/50 p-7 transition-all duration-300 hover:border-accent-200 hover:bg-white hover:shadow-xl hover:shadow-ink-900/5">
                <div className=" mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white transition-colors duration-300 group-hover:bg-accent-500">
                  <card.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                  {card.label}
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-ink-900">
                  {card.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 3: Who We Work With ---------- */
function WhoWeWorkWith() {
  const industries = [
    { icon: Trophy, title: 'Sports Clubs', desc: 'Professional and amateur clubs looking for custom kits.', img: images.footballClubs },
    { icon: Dumbbell, title: 'Fitness Academies', desc: 'Training apparel and uniforms for academies.', img: images.sportsAcademies },
    { icon: School, title: 'Schools & Universities', desc: 'Teamwear for educational institutions.', img: images.schoolsUniversities },
    { icon: Tag, title: 'Clothing Brands', desc: 'Private label and OEM manufacturing.', img: images.sportsBrands },
    { icon: Store, title: 'Retailers', desc: 'Bulk manufacturing for resale.', img: images.retailers },
    { icon: Package, title: 'Distributors', desc: 'A reliable production partner at scale.', img: images.distributors },
  ];

  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Serving the teams and brands behind the game"
            description="We partner with organizations across the sporting ecosystem — from local clubs to international apparel brands."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group relative h-72 overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-200">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 4: Process Timeline ---------- */
function ProcessTimeline() {
  const steps = [
    { icon: Lightbulb, title: 'You Share Your Idea', desc: 'Design, reference image, sketch, logo, or tech pack — whatever you have, we start there.' },
    { icon: PencilRuler, title: 'Product Development', desc: 'Design assistance, fabric recommendations, and construction advice.' },
    { icon: Shirt, title: 'Sampling', desc: 'A physical sample is manufactured for your review.' },
    { icon: CheckCircle2, title: 'Approval', desc: 'You review and approve the sample before production begins.' },
    { icon: Factory, title: 'Production', desc: 'Printing, cutting, stitching, and finishing at scale.' },
    { icon: ScanLine, title: 'Quality Control', desc: 'Measurements, printing, stitching, and packaging are inspected.' },
    { icon: Ship, title: 'Worldwide Shipping', desc: 'Air, sea, or express — delivered to your door.' },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Bring Ideas to Life"
            title="From concept to delivery in seven steps"
            description="A transparent, collaborative process designed to give you confidence at every stage."
          />
        </Reveal>

        {/* Desktop: interactive vertical timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="grid grid-cols-[280px_1fr] gap-12">
            {/* Step list */}
            <div className="relative">
              <div className="absolute left-[27px] top-2 bottom-2 w-px bg-ink-200" />
              {steps.map((step, i) => (
                <button
                  key={step.title}
                  onClick={() => setActive(i)}
                  className={`group relative flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                    active === i ? 'bg-ink-50' : 'hover:bg-ink-50/50'
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      active === i
                        ? 'bg-ink-900 text-white shadow-lg shadow-ink-900/20'
                        : 'bg-white text-ink-400 ring-1 ring-ink-200'
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${active === i ? 'text-accent-600' : 'text-ink-400'}`}>
                      Step {i + 1}
                    </p>
                    <p className={`font-display font-bold ${active === i ? 'text-ink-900' : 'text-ink-500'}`}>
                      {step.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Active step detail */}
            <Reveal key={active} className="">
              <div className="flex h-full flex-col justify-center rounded-3xl bg-ink-50 p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg shadow-accent-500/30">
                  {(() => {
                    const Icon = steps[active].icon;
                    return <Icon className="h-7 w-7" />;
                  })()}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Step {active + 1} of {steps.length}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-ink-900">
                  {steps[active].title}
                </h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-500">
                  {steps[active].desc}
                </p>
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setActive(Math.max(0, active - 1))}
                    disabled={active === 0}
                    className="rounded-full px-5 py-2.5 text-sm font-medium text-ink-500 ring-1 ring-ink-200 transition hover:bg-white disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                    disabled={active === steps.length - 1}
                    className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:opacity-40"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mobile: vertical accordion */}
        <div className="mt-12 space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 50}>
              <div className="flex gap-5 rounded-2xl bg-ink-50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-500">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 5: Manufacturing Capabilities ---------- */
function Capabilities() {
  const caps = [
    'Custom Development', 'OEM Manufacturing', 'Private Labeling',
    'Fast Turnaround', 'Bulk Production', 'Custom Packaging',
  ];

  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
                Manufacturing Capabilities
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              Everything you need to build a complete collection.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              From a single custom kit to a full private-label line, our
              capabilities cover the entire spectrum of custom Apparel
              production.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((cap, i) => (
            <Reveal key={cap} delay={i * 60}>
              <div className="group flex h-full items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-accent-500/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-semibold text-white">
                  {cap}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 6: Printing & Decoration ---------- */
function PrintingDecoration() {
  const methods = [
    { icon: Palette, title: 'Sublimation', desc: 'Perfect for vibrant all-over sportswear.' },
    { icon: Printer, title: 'DTF Printing', desc: 'Ideal for small production runs.' },
    { icon: Layers, title: 'Screen Printing', desc: 'Long-lasting bulk printing.' },
    { icon: BadgeCheck, title: 'Embroidery', desc: 'Premium stitched branding.' },
    { icon: Sparkles, title: 'Puff Print', desc: 'Raised premium finish.' },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Printing & Decoration"
            title="Every decoration method, under one roof"
            description="Whether you need vibrant full-body graphics or premium stitched branding, we match the technique to your design."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {methods.map((m, i) => (
            <Reveal key={m.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-ink-100 p-7 transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 8: Quality Comes First ---------- */
function QualitySection() {
  const steps = [
    { icon: Layers, title: 'Fabric Inspection', desc: 'Every fabric roll is checked for consistency, thread count, GSM, and defects before cutting begins.' },
    { icon: Palette, title: 'Print Inspection', desc: 'Colors, balance, alignment, and adhesion are verified against your approved sample.' },
    { icon: Scissors, title: 'Cutting Accuracy', desc: 'Precision cutting ensures consistent sizing across every piece in the run.' },
    { icon: MessageSquare, title: 'Stitch Quality', desc: 'Stitch density, SPI, tension, and seam strength are inspected at each workstation.' },
    { icon: Ruler, title: 'Measurement Check', desc: 'Finished garments are measured against spec to confirm correct fit.' },
    { icon: Boxes, title: 'Packing Inspection', desc: 'Folding, tagging, and packaging are verified before dispatch.' },
  ];

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
                Quality Comes First
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              Six inspection stages before your order ships
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              Quality is not a final check — it is built into every stage of
              production. Every order passes through six dedicated inspection
              points.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <div className="group relative h-full rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-accent-500/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-xs font-bold text-accent-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 9: Why Brands Choose flexasportswear ---------- */
function WhyBrandsChoose() {
  const reasons = [
    { icon: MessageSquare, title: 'Reliable Communication', desc: 'Clear, timely updates at every stage of your project.' },
    { icon: Eye, title: 'Transparent Production', desc: 'You see exactly how and where your order is made.' },
    { icon: Layers, title: 'Flexible MOQs', desc: 'Accessible minimums for clubs and growing brands alike.' },
    { icon: Sparkles, title: 'Premium Materials', desc: 'Performance fabrics sourced for quality and durability.' },
    { icon: Factory, title: 'Custom Manufacturing', desc: 'Every order built to your exact specifications.' },
    { icon: Clock, title: 'Fast Response', desc: 'Quotes and answers, typically within 6 hours.' },
    { icon: Globe, title: 'Global Shipping', desc: 'Air, sea, and express delivery worldwide.' },
    { icon: Handshake, title: 'Long-Term Partnership', desc: 'We invest in relationships, not just transactions.' },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Brands Choose flexasportswear"
            title="The partner you can build a collection around"
            description="Brands and clubs choose flexasportswear for the combination of craft, flexibility, and communication that makes production feel effortless."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-ink-100 p-7 transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-all duration-300 group-hover:bg-accent-500">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 11: FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: 'Can you manufacture my own designs?', a: 'Yes. Share your design, reference image, sketch, logo, or tech pack and our team will handle product development, sampling, and production.' },
    { q: 'What is your MOQ?', a: 'Minimum order quantities vary by product and decoration method. We work with flexible MOQs to support both clubs and growing brands — contact us for specifics on your product.' },
    { q: 'Can you create samples?', a: 'Absolutely. Sampling is a core step in our process. A physical sample is manufactured and sent for your approval before production begins.' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide via air, sea, and express courier. Shipping method is selected based on your timeline and budget.' },
    { q: 'How long is production?', a: 'Production timelines depend on order complexity, quantity, and decoration methods. We provide an estimated lead time with your quote.' },
    { q: 'Can you manufacture under my brand?', a: 'Yes. We offer private label and OEM manufacturing, producing sportswear under your brand with your labels, tags, and packaging.' },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answers to common questions"
          />
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 40}>
              <div className="overflow-hidden rounded-2xl border border-ink-100">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ink-50"
                >
                  <span className="font-display text-base font-semibold text-ink-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 12: Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={images.ctaBanner}
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/60" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
            Let's Build Your Next Collection.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-300">
            Tell us about your project and we'll help bring it to life — from
            first sketch to final delivery.
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton
              to="/contact"
              variant="primary"
              className="bg-accent-500 text-white hover:bg-accent-600 hover:shadow-accent-500/30"
            >
              Request a Quote
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartner />
      <WhoWeWorkWith />
      <ProcessTimeline />
      <Capabilities />
      <PrintingDecoration />
      <QualitySection />
      <WhyBrandsChoose />
      <FAQ />
      <FinalCTA />
    </>
  );
}
