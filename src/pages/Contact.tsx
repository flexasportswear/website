import { useState, type FormEvent } from 'react';
import {
  MessageCircle, Mail, Instagram, Music2, Clock,
  Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { images } from '@/lib/images';
import emailjs from "@emailjs/browser";


function Hero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <img
          src={images.contactHero}
          alt=""
          className="h-full w-full object-cover object-[50%_30%] opacity-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 animate-fade-down">
            <span className="h-px w-10 bg-accent-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">
              Contact
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl text-balance animate-fade-up">
            Let's talk about your project
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up [animation-delay:150ms]">
            Tell us what you are looking to manufacture. We typically respond
            within 6 hours with next steps.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      country: formData.get('country') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: payload.name,
      company: payload.company,
      country: payload.country,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  setStatus('success');
  (e.target as HTMLFormElement).reset();
} catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or contact us via WhatsApp.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-ink-100 bg-ink-50/50 p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">
          Thank you — your inquiry is on its way
        </h3>
        <p className="mt-3 max-w-md text-base text-ink-500">
          We have received your message and will get back to you within 6
          hours. For urgent inquiries, reach us on WhatsApp.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
      <h3 className="font-display text-2xl font-bold text-ink-900">
        Request a Quote
      </h3>
      <p className="mt-2 text-sm text-ink-500">
        Fill in the details below and we will get back to you with next steps.
      </p>

      {status === 'error' && (
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Company" name="company" placeholder="Club, brand, or company name" />
        <Field label="Country" name="country" placeholder="Your country" />
        <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+1 234 567 890" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project — design details, timeline, decoration preferences, etc."
            className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/20 disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

function Field({ label, name, type = 'text', required, placeholder, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-ink-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
      />
    </div>
  );
}

function Sidebar() {
  const contacts = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+92 370 631 1227', href: 'https://wa.me/923706311227' },
    { icon: Mail, label: 'Email', value: 'info@flexasportswear.online', href: 'mailto:info@flexasportswear' },
    { icon: Instagram, label: 'Instagram', value: '@flexa_sportswear', href: 'https://instagram.com/flexa_sportswear' },
    { icon: Music2, label: 'TikTok', value: '@flexa_sportswear', href: 'https://tiktok.com/@flexa_sportswear' },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-950">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-56 w-56 rounded-full bg-accent-600/10 blur-3xl" />
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative p-8 sm:p-9">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-white shadow-lg shadow-accent-500/30">
            <MessageCircle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
              Direct Lines
            </p>
            <h3 className="font-display text-xl font-bold text-white">
              Reach us anytime
            </h3>
          </div>
        </div>

        {/* Contact channels */}
        <div className="mt-8 space-y-1">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white group-hover:ring-accent-500">
                <c.icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
                  {c.label}
                </p>
                <p className="text-sm font-semibold text-white transition-colors group-hover:text-accent-300">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="my-7 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500/60" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* Business hours */}
        <div>
          <div className="flex items-center gap-2.5">
            <Clock className="h-4.5 w-4.5 text-accent-400" />
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Business Hours
            </h4>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-accent-400" />
            </span>
            <p className="text-sm font-medium text-white">Available 24/7</p>
            <span className="text-sm text-ink-400">— always ready to help</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Hero />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={150}>
              <Sidebar />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
