import { ArrowUpRight, MessageCircle, Instagram, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'A Nio', href: '#a-nio' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top section */}
        <div className="grid gap-12 border-b border-green-100/60 py-16 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" className="h-8 w-8">
                <circle cx="16" cy="16" r="3" fill="#16a34a" className="glow-pulse" />
                <path d="M16 6 Q 24 16, 16 26" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.7" />
                <path d="M16 6 Q 8 16, 16 26" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
              <span className="font-display text-base font-bold tracking-tight text-gray-900">
                NIO <span className="text-green-600">FIBRA</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
              Conectando pessoas, negócios e possibilidades.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: MessageCircle, label: 'WhatsApp', href: '#contato' },
                { icon: Instagram, label: 'Instagram', href: '#contato' },
                { icon: Mail, label: 'E-mail', href: '#contato' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-green-100 bg-green-50/50 transition-all duration-300 hover:border-green-300 hover:bg-green-100"
                >
                  <social.icon className="h-4.5 w-4.5 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-green-700"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span>WhatsApp — [a definir]</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-green-500" />
                <span>@niofibra — [a definir]</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span>contato@niofibra.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Nio Fibra. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Prévia visual — informações sujeitas a alteração.
          </p>
        </div>
      </div>
    </footer>
  );
}
