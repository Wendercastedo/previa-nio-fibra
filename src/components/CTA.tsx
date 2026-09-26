import { ArrowRight } from 'lucide-react';
import FiberBackground from './FiberBackground';

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-green-700 py-32 lg:py-44">
      {/* Dark base gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-green-900" />

      {/* Animated fiber beams */}
      <FiberBackground variant="cta" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern-fine opacity-[0.06]" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-green-400/15 blur-[130px]" />
      <div className="absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-green-500/10 blur-[140px]" />

      {/* Light beam lines */}
      <div className="absolute left-0 top-[30%] h-px w-full bg-gradient-to-r from-transparent via-green-300/30 to-transparent" />
      <div className="absolute left-0 top-[70%] h-px w-full bg-gradient-to-r from-transparent via-green-300/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-12">
        <div className="reveal">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-green-300/30 bg-green-400/10 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-200" />
            </span>
            <span className="text-xs font-medium tracking-wide text-green-100">
              DISPONÍVEL PARA NOVOS CLIENTES
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Sua próxima conexão <br />
            começa <span className="text-green-300">aqui.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-green-100/70 sm:text-xl">
            Conheça uma nova experiência em fibra óptica.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-green-700
                         shadow-2xl shadow-green-950/30 transition-all duration-300 hover:scale-105"
            >
              Falar com a Nio Fibra
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
