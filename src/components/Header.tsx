import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Why flexa', to: '/why-lumo' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/90 backdrop-blur-xl border-b border-ink-100 shadow-sm shadow-ink-900/5'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2.5 transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-ink-900'
            }`}
          >
             <img src="/logo.png" alt="flexa Logo" className="h-9 w-9" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    transparent
                      ? isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                      : isActive
                        ? 'text-ink-900'
                        : 'text-ink-500 hover:text-ink-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${
                          transparent ? 'bg-white' : 'bg-accent-500'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex ${
                transparent
                  ? 'bg-white text-ink-900 hover:bg-white/90 hover:shadow-lg'
                  : 'bg-ink-900 text-white hover:bg-ink-800 hover:shadow-lg hover:shadow-ink-900/20'
              }`}
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden ${transparent ? 'text-white' : 'text-ink-900'}`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-400 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 px-6 py-5">
            <span className="flex items-center gap-2.5">
              <img src="/logo.png" alt="flexa Logo" className="h-9 w-9" /> 
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-ink-500" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-50 text-accent-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 rounded-full bg-ink-900 px-6 py-3.5 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
