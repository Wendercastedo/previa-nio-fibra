import { ArrowRight, MessageCircle } from 'lucide-react';
import FiberBackground from './FiberBackground';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Animated fiber background */}
      <FiberBackground variant="hero" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern-fine opacity-40" />

      {/* Gradient vignette edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/30" />

      {/* Decorative floating orbs */}
      <div className="absolute left-[10%] top-[30%] h-64 w-64 rounded-full bg-green-200/20 blur-[100px] float-anim-slow" />
      <div className="absolute right-[15%] bottom-[20%] h-72 w-72 rounded-full bg-green-300/15 blur-[120px] float-anim" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="reveal mb-8 inline-flex items-center gap-2.5 rounded-full border border-green-200/60 bg-white/60 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
            </span>
            <span className="text-xs font-medium tracking-wide text-green-700">
              INFRAESTRUTURA DE FIBRA ÓPTICA
            </span>
          </div>

          {/* Title */}
          <h1 className="reveal reveal-delay-1 font-display text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
            Velocidade em <br />
            uma nova <span className="gradient-text">dimensão.</span>
          </h1>

          {/* Subtitle */}
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-gray-500 sm:text-xl">
            Tecnologia em fibra óptica criada para acompanhar o ritmo de
            pessoas e negócios.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#a-nio"
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white
                         shadow-xl shadow-green-600/25 transition-all duration-300 hover:bg-green-700 hover:shadow-2xl hover:shadow-green-600/35"
            >
              Conheça a Nio Fibra
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-white/60 px-8 py-4 text-base font-semibold text-green-700
                         backdrop-blur-md transition-all duration-300 hover:border-green-400 hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com um especialista
            </a>
          </div>

          {/* Scroll hint */}
          <div className="reveal reveal-delay-4 mt-20 flex items-center gap-3 text-gray-400">
            <div className="h-px w-12 bg-gradient-to-r from-green-400 to-transparent" />
            <span className="text-xs font-medium tracking-widest uppercase">Role para explorar</span>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
