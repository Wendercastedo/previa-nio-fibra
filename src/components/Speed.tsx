export default function Speed() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-28 lg:py-40">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern-fine opacity-[0.08]" />

      {/* Glowing orbs */}
      <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-green-500/10 blur-[150px]" />
      <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-green-400/8 blur-[120px]" />

      {/* Horizontal light beams */}
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="absolute left-0 top-[calc(50%-40px)] h-px w-full bg-gradient-to-r from-transparent via-green-500/15 to-transparent" />
      <div className="absolute left-0 top-[calc(50%+40px)] h-px w-full bg-gradient-to-r from-transparent via-green-500/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
            Performance
          </span>

          {/* Giant number */}
          <div className="reveal reveal-delay-1 mt-6 flex items-center justify-center">
            <span className="font-display text-[5rem] font-bold leading-none text-green-400/30 sm:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-glow">
              +1
            </span>
            <div className="ml-4 flex flex-col items-start">
              <span className="font-display text-3xl font-bold text-green-300 sm:text-5xl lg:text-6xl">
                GIGA
              </span>
              <span className="mt-2 text-sm font-medium text-green-500/70 sm:text-base">
                de velocidade
              </span>
            </div>
          </div>

          <p className="reveal reveal-delay-2 mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-green-100/60 sm:text-xl">
            Performance para streaming, jogos, trabalho e tudo o que exige
            uma conexão de verdade.
          </p>

          <p className="reveal reveal-delay-3 mt-4 text-xs text-green-500/40">
            * Velocidade de referência para demonstração visual.
          </p>
        </div>
      </div>
    </section>
  );
}
