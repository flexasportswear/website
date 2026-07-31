import {
  Lightbulb, PencilRuler, Layers, Palette, Scissors, Shirt,
  ScanLine, Boxes, Ship, Clock, Package, Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading, CTAButton } from '@/components/ui';
import { images } from '@/lib/images';

function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <img
          src={images.mfgStitch}
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
              Manufacturing
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl text-balance animate-fade-up">
            A production network built for custom sportswear
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up [animation-delay:150ms]">
            We work with experienced manufacturing partners across Sialkot to
            produce custom sportswear — from design and fabric sourcing to
            printing, stitching, quality control, and shipping.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductionNetwork() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Production Network
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl text-balance">
                A partner network, not a single factory
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
                <p>
                  Rather than claiming to one large factory, we work with
                  experienced manufacturing partners across Sialkot — each
                  specialized in specific product types, fabrics, and
                  decoration methods.
                </p>
                <p>
                  This means your order is matched to the production line best
                  suited for it. It also means we can scale up or down based on
                  your needs without compromising on quality or lead time.
                </p>
                <p>
                  We manage that network. coordinating
                  design, sampling, production, quality control, and shipping
                  so you deal with one reliable partner.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-[420px] overflow-hidden rounded-3xl">
              <img
                src={images.mfgFabric}
                alt="Fabric sourcing"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { icon: Lightbulb, title: 'Design', desc: 'We start with your design, reference, or concept and develop it into a production-ready specification.' },
    { icon: PencilRuler, title: 'Pattern Making', desc: 'Patterns are created and graded to your required sizes for accurate, consistent fit by professionals with over 20 years of experience.' },
    { icon: Layers, title: 'Fabric Sourcing', desc: 'The right fabrics are sourced from trusted suppliers to match your performance and aesthetic needs.' },
    { icon: Palette, title: 'Printing', desc: 'Sublimation, screen print, DTF, embroidery, puff printing, or other decoration methods are applied.' },
    { icon: Scissors, title: 'Cutting', desc: 'Fabric is precision-cut to pattern for consistent sizing across the full production run.' },
    { icon: Shirt, title: 'Stitching', desc: 'Garments are stitched together by skilled operators with quality checks at each stage.' },
    { icon: ScanLine, title: 'Quality Control', desc: 'Every garment is inspected for measurements, print, stitch, and overall quality.' },
    { icon: Boxes, title: 'Packing', desc: 'Garments are folded, tagged, labeled, and packed according to your specifications.' },
    { icon: Ship, title: 'Shipping', desc: 'Orders are dispatched via air, sea, or express courier to your destination worldwide.' },
  ];

  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Production Workflow"
            title="Nine stages from design to delivery"
            description="Every order moves through a structured workflow designed for consistency, quality, and transparency."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 50}>
              <div className="group relative h-full rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-2xl font-bold text-ink-100">
                    {String(i + 1).padStart(2, '0')}
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
      </div>
    </section>
  );
}


function Packaging() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <Reveal>
            <div className="relative h-[400px] overflow-hidden rounded-3xl order-2 lg:order-1">
              <img
                src={images.mfgPack}
                alt="Custom packaging"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Packaging
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl text-balance">
                Custom packaging that reflects your brand
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
                <p>
                  Packaging is part of the product. We offer custom packaging
                  options including custom poly bags, hang tags, inserts, and
                  shipping cartons — all tailored to your brand.
                </p>
                <p>
                  Whether you need retail-ready packaging for resale or
                  efficient bulk packaging for team distribution, we adapt to
                  your requirements.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Custom Poly Bags', 'Hang Tags', 'Brand Inserts', 'Custom Cartons'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-ink-100">
                    <Package className="h-4 w-4 text-accent-500" />
                    <span className="text-sm font-medium text-ink-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QualityStandards() {
  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
                Quality Standards
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl text-balance">
              Quality is built in, not bolted on
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              Every production run passes through multiple inspection stages —
              from fabric to final packing — to ensure what you receive matches
              the approved sample.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Layers, title: 'Fabric Inspection', desc: 'Weight, consistency, and defect check before cutting.' },
            { icon: Palette, title: 'Print Inspection', desc: 'Color, alignment, and adhesion verified against sample.' },
            { icon: Scissors, title: 'Cutting Accuracy', desc: 'Precision cutting for consistent sizing.' },
            { icon: Shirt, title: 'Stitch Quality', desc: 'Stitch density, tension, and seam strength checked.' },
            { icon: ScanLine, title: 'Measurement Check', desc: 'Finished garments measured against spec.' },
            { icon: Boxes, title: 'Packing Inspection', desc: 'Folding, tagging, and packaging verified.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="group h-full rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-accent-500/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadTimeMOQ() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-100 bg-ink-50/50 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">
                Lead Time
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                Production timelines vary based on order complexity, quantity,
                and decoration methods. Sampling typically takes a few weeks,
                with production following after sample approval. We provide a
                clear estimated lead time with every quote.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-ink-100 bg-ink-50/50 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg shadow-accent-500/20">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">
                MOQ
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                Minimum order quantities vary by product and decoration method.
                We offer flexible MOQs to support both clubs ordering their
                first kits and brands scaling their collections. Contact us
                with your product details for specific MOQ information.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Manufacturing() {
  return (
    <>
      <Hero />
      <ProductionNetwork />
      <Workflow />
      <Packaging />
      <QualityStandards />
      <LeadTimeMOQ />
      <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div className="absolute inset-0">
          <img src={images.mfgPrint} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/90 to-ink-950/70" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              Have a product in mind?
            </h2>
            <p className="mt-5 text-lg text-ink-300">
              Share your design or concept and we will walk you through every
              step — from fabric to finish.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton to="/contact" className="bg-accent-500 text-white hover:bg-accent-600">
                Request a Quote
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
