import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Music2, Mail } from 'lucide-react';

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Why flexa', to: '/why-lumo' },
  { label: 'Contact', to: '/contact' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/flexa_sportswear' },
  { icon: Music2, label: 'TikTok', href: 'https://tiktok.com/@flexa_sportswear' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/923706311227' },
  { icon: Mail, label: 'Email', value: 'info@flexasportswear.online', href: 'mailto:flexasportswear@gmail.com },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.avif" alt="flexa Logo" className="h-11 w-11" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Manufacturing premium custom sportswear for clubs, academies, and
              apparel brands worldwide. Based in Sialkot, Pakistan.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              Connect
            </h4>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all duration-300 hover:bg-accent-500 hover:text-white hover:ring-accent-500"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-400">
              Sialkot, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
