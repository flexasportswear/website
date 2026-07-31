import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-accent-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

interface CTAButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: CTAButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-ink-900 text-white hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/20 hover:-translate-y-0.5',
    secondary:
      'bg-white text-ink-900 ring-1 ring-ink-200 hover:ring-ink-300 hover:bg-ink-50 hover:-translate-y-0.5',
    ghost:
      'text-ink-700 hover:text-ink-900 hover:bg-ink-100',
  };

  const content = (
    <>
      {children}
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href || '#'}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </a>
  );
}
