const items = [
  { num: '01', title: 'Tecnologia em fibra óptica', desc: 'Infraestrutura de última geração com padrão de qualidade certificado em cada link ativado.' },
  { num: '02', title: 'Estabilidade', desc: 'Redundância e monitoramento proativo para manter sua conexão sempre no ar.' },
  { num: '03', title: 'Performance', desc: 'Velocidade real e simétrica, sem gargalos, para cada tipo de uso.' },
  { num: '04', title: 'Atendimento', desc: 'Suporte humano e técnico, com resolução rápida e acompanhamento real.' },
];

export default function Differential() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="reveal mb-20 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            Diferencial
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Construída para <br />
            não parar.
          </h2>
        </div>

        {/* The beam line */}
        <div className="relative">
          {/* Vertical beam line (desktop) / horizontal (mobile) */}
          <div className="absolute left-[2px] top-0 h-full w-px bg-gradient-to-b from-green-400/0 via-green-500/30 to-green-400/0 sm:left-1/2 sm:-translate-x-1/2 lg:left-[2px] lg:translate-x-0" />

          {/* Animated flowing particles along the line (desktop) */}
          <svg className="absolute left-0 top-0 hidden h-full w-full lg:block" preserveAspectRatio="none">
            <line x1="3" y1="0" x2="3" y2="100%" stroke="url(#beam-gradient)" strokeWidth="2" strokeDasharray="4 12" className="dash-flow" opacity="0.4" />
            <defs>
              <linearGradient id="beam-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(74,222,128,0)" />
                <stop offset="50%" stopColor="rgba(74,222,128,0.6)" />
                <stop offset="100%" stopColor="rgba(74,222,128,0)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Items along the beam */}
          <div className="space-y-16 lg:space-y-28">
            {items.map((item, i) => (
              <div
                key={item.num}
                className={`reveal reveal-delay-${(i % 4) + 1} relative flex items-start gap-6 pl-8 lg:pl-16`}
              >
                {/* Beam node */}
                <div className="absolute left-0 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center lg:left-0">
                  <span className="absolute h-8 w-8 rounded-full bg-green-400/20 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
                  <span className="h-3 w-3 rounded-full bg-green-500 ring-4 ring-green-100" />
                </div>

                {/* Number */}
                <span className="font-display text-5xl font-bold leading-none text-green-100 sm:text-6xl lg:text-7xl">
                  {item.num}
                </span>

                {/* Text */}
                <div className="pt-2 lg:pt-4">
                  <h3 className="font-display text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
