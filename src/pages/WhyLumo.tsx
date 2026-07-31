import {
  Factory, MessageSquare, Layers, Rocket, Tag, Ship,
  Handshake, CheckCircle2, Lightbulb, PencilRuler, Shirt,
  ScanLine, Boxes,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading, CTAButton } from '@/components/ui';
import { images } from '@/lib/images';

function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <img
          src={images.mfgFabric}
          alt=""
          className="h-full w-full object-cover opacity-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 animate-fade-down">
            <span className="h-px w-10 bg-accent-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">
              Why Flexasportswear
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl text-balance animate-fade-up">
            The manufacturing partner that works with you, not just for you
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up [animation-delay:150ms]">
            We earn trust through honesty, flexibility, and consistent quality —
            not through exaggerated claims or factory tours.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyWorkWithLumo() {
  const reasons = [
    { icon: Factory, title: 'Custom Manufacturing', desc: 'Every order is built to your specifications — not pulled from a catalog.' },
    { icon: MessageSquare, title: 'Honest Communication', desc: 'We tell you what is possible, what is not, and what we recommend — clearly and promptly.' },
    { icon: Layers, title: 'Flexible Production', desc: 'We adapt to your order size, timeline, and product mix without rigid requirements.' },
    { icon: Rocket, title: 'Startup Friendly', desc: 'New brands and first-time buyers are welcome. We help you navigate the process.' },
    { icon: Tag, title: 'Private Label Support', desc: 'Manufacture under your own brand with custom labels, tags, and packaging.' },
    { icon: Ship, title: 'Reliable Delivery', desc: 'Air, sea, and express shipping options with tracking from Sialkot to your door.' },
    { icon: Handshake, title: 'Long-Term Relationships', desc: 'We invest in partnerships that grow — not one-off transactions.' },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Work With Flexasportswear"
            title="Seven reasons brands choose us"
            description="We focus on the things that actually matter when you are trusting someone with your production."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-ink-100 p-7 transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-colors duration-300 group-hover:bg-accent-500">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
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

function CaseStudy() {
  const steps = [
    { icon: Lightbulb, phase: 'Inquiry', title: 'You reach out', desc: 'You share your design, product type, quantity, and timeline via our contact form or WhatsApp.' },
    { icon: PencilRuler, phase: 'Development', title: 'We develop the product', desc: 'Our team reviews your design, recommends fabrics and decoration methods, and provides a quote.' },
    { icon: Shirt, phase: 'Sampling', title: 'A sample is produced', desc: 'A physical sample is manufactured and shared with you for review and approval.' },
    { icon: Factory, phase: 'Production', title: 'Production begins', desc: 'Once you approve the sample, full production begins — printing, cutting, stitching, and finishing.' },
    { icon: ScanLine, phase: 'Quality Control', title: 'Every piece is inspected', desc: 'Each garment passes through our multi-stage quality inspection before packing.' },
    { icon: Boxes, phase: 'Packing & Shipping', title: 'Your order is delivered', desc: 'Your order is packed, labeled, and shipped via your preferred method to your destination.' },
  ];

  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How a Typical Project Works"
            title="From inquiry to delivery"
            description="Here is what it looks like when a club or brand works with Flexasportswear from first contact to final delivery."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600">
                    {step.phase}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Summary banner */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-ink-900 p-8 text-center">
            <CheckCircle2 className="h-6 w-6 text-accent-400" />
            <p className="text-base font-medium text-white sm:text-lg">
              One partner. One point of contact. From first message to final delivery.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function WhyLumo() {
  return (
    <>
      <Hero />
      <WhyWorkWithLumo />
      <CaseStudy />
      <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div className="absolute inset-0">
          <img src={images.whyLumoDelivery} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/90 to-ink-950/70" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              Let's build something together
            </h2>
            <p className="mt-5 text-lg text-ink-300">
              Whether you are a club ordering your first kits or a brand scaling
              your collection, we are ready to help.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton to="/contact" className="bg-accent-500 text-white hover:bg-accent-600">
                Get a Quote
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
