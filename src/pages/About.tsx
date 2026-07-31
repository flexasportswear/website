import {
  Target, Eye, Heart, MapPin, TrendingUp, Globe, Users, Rocket,
  ShieldCheck, MessageSquare, Handshake, Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading, CTAButton } from '@/components/ui';
import { images } from '@/lib/images';

function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <img
          src={images.aboutSialkot}
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
              About FLEXA SPORTSWEAR
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl text-balance animate-fade-up">
            A manufacturing partner rooted in Sialkot's sporting heritage
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up [animation-delay:150ms]">
            Founded in 2022, FLEXA SPORTSWEAR connects clubs and brands worldwide with
            the craft, materials, and production expertise that Sialkot is
            known for.
          </p>
        </div>
      </div>
    </section>
  );
}

function CompanyStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl text-balance">
                Built to make premium manufacturing accessible.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-ink-500">
              <p>
                Sialkot, Pakistan has been a global center for sporting goods
                manufacturing for over a century — producing everything from
                footballs used in the World Cup to world-class apparel. Yet
                accessing that manufacturing expertise has traditionally
                required connections, volume, and local knowledge.
              </p>
              <p>
                FLEXA SPORTSWEAR was founded to change that. We work with experienced
                manufacturing partners across Sialkot to give clubs, academies,
                universities, and apparel brands of all sizes direct access to
                premium custom sportswear production — with clear
                communication and transparent processes.
              </p>
              <p>
                We don't claim to own the largest factory. We don't need to.
                What we provide is a reliable, honest, and skilled partner that
                helps you bring your designs to life — from first sample to
                final delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const items = [
    {
      icon: Target,
      label: 'Mission',
      title: 'Make premium sportswear manufacturing accessible to every team and brand',
      desc: 'We exist to bridge the gap between international clients and Sialkot\'s manufacturing expertise — making custom production transparent, reliable, and collaborative.',
    },
    {
      icon: Eye,
      label: 'Vision',
      title: 'To be the most trusted custom sportswear manufacturing partner worldwide',
      desc: 'We aim to build long-term relationships with clubs and brands across the globe by consistently delivering quality, honesty, and dependable production.',
    },
  ];

  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="h-full rounded-3xl border border-ink-100 bg-white p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg shadow-accent-500/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink-900 text-balance">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
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

function CoreValues() {
  const values = [
    { icon: ShieldCheck, title: 'Honesty', desc: 'We tell you what is possible, what is not, and what we recommend — even when it is not the easiest answer.' },
    { icon: Sparkles, title: 'Craft', desc: 'We are obsessed with the details — fabric, fit, print, and stitch — because quality shows.' },
    { icon: MessageSquare, title: 'Communication', desc: 'Clear, timely, and transparent communication is the foundation of every partnership.' },
    { icon: Handshake, title: 'Partnership', desc: 'We invest in long-term relationships, not one-off transactions.' },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Core Values"
            title="What we stand for"
            description="The principles that guide every decision we make and every order we produce."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-ink-100 p-7 transition-all duration-300 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-colors duration-300 group-hover:bg-accent-500">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySialkot() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="absolute inset-0">
        <img
          src={images.aboutCraft}
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
                  Why Sialkot
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl text-balance">
                A city built on sporting goods craftsmanship
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
                Sialkot is one of the world's most important centers for
                sporting goods manufacturing. For over a century, the city has
                produced footballs, apparel, and equipment used at every level
                of sport — from local pitches to World Cup finals.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                That heritage means something. It means a deep pool of skilled
                labor, established supply chains, and a culture that takes
                manufacturing seriously. We tap directly into that ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent-400" />
                  <span className="text-sm text-ink-200">Sialkot, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-accent-400" />
                  <span className="text-sm text-ink-200">Exports to 100+ countries</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Years of manufacturing heritage' },
                { value: '500K+', label: 'Skilled workers in the region' },
                { value: '$2B+', label: 'Annual sporting goods exports' },
                { value: '#1', label: 'Football production hub globally' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="font-display text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const milestones = [
    { year: '2022', title: 'Founded', desc: 'Flexa Sportswear is established in Sialkot with a mission to make premium apparel manufacturing accessible.' },
    { year: '2023', title: 'Growing Production Network', desc: 'We build relationships with experienced manufacturing partners across Sialkot covering every product category.' },
    { year: '2024', title: 'International Customers', desc: 'Clubs and brands across multiple continents trust Flexasportswear with their custom sportswear production.' },
    { year: 'Future', title: 'Expanding Capabilities', desc: 'Continuing to grow our network, refine our processes, and serve more teams and brands worldwide.' },
  ];

  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="From founding to future"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-ink-100 bg-white p-7">
                <span className="font-display text-3xl font-bold text-accent-500">
                  {m.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {m.desc}
                </p>
                {i < milestones.length - 1 && (
                  <span className="absolute right-7 top-7 hidden text-ink-200 lg:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Hero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhySialkot />
      <Timeline />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl text-balance">
              Ready to start your project?
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Tell us what you are looking to manufacture and we will help you
              bring it to life.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton to="/contact">Get a Quote</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
