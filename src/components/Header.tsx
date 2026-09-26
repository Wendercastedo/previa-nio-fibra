import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'A Nio', href: '#a-nio' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-green-100/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-8 w-8">
              <circle cx="16" cy="16" r="3" fill="#16a34a" className="glow-pulse" />
              <path d="M16 6 Q 24 16, 16 26" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.7" />
              <path d="M16 6 Q 8 16, 16 26" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5" />
              <path d="M6 16 Q 16 8, 26 16" stroke="#4ade80" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>
          </div>
          <span className="font-display text-base font-bold tracking-tight text-gray-900">
            NIO <span className="text-green-600">FIBRA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-green-700
                         after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2
                         after:bg-green-600 after:transition-all after:duration-300 hover:after:w-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="btn-shine group hidden items-center gap-1.5 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white
                       shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-green-600/30 sm:inline-flex"
          >
            Falar conosco
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-green-50 lg:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-3 rounded-2xl border border-green-100/60 bg-white/95 p-3 shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-1.5 flex items-center justify-center gap-1.5 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Falar conosco
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
