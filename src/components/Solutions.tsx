import { ArrowUpRight, Home, Building2, Network } from 'lucide-react';

const solutions = [
  {
    icon: Home,
    tag: '01',
    title: 'Para sua casa',
    description:
      'Internet rápida e estável para entretenimento, trabalho e rotina. Sem quedas, sem espera.',
    label: 'Internet residencial',
  },
  {
    icon: Building2,
    tag: '02',
    title: 'Para seu negócio',
    description:
      'Conectividade preparada para operações que não podem parar. Links dedicados com SLA garantido.',
    label: 'Soluções corporativas',
  },
  {
    icon: Network,
    tag: '03',
    title: 'Infraestrutura',
    description:
      'Soluções em fibra óptica para diferentes necessidades. Projeto, instalação e manutenção completos.',
    label: 'Projetos sob medida',
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            Soluções
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Conexão para <br />
            cada necessidade.
          </h2>
        </div>

        {/* Large blocks */}
        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`solution-block reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-green-100/60 bg-white p-8 transition-all duration-500 hover:border-green-300 hover:shadow-2xl hover:shadow-green-600/8 ${i === 1 ? 'lg:mt-12' : ''} ${i === 2 ? 'lg:mt-24' : ''}`}
            >
              {/* Animated background pattern on hover */}
              <div className="solution-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`pattern-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="rgba(74,222,128,0.15)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${i})`} />
                </svg>
              </div>

              {/* Hover gradient overlay */}
              <div className="solution-overlay absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Tag + Icon */}
                <div className="mb-auto flex items-start justify-between">
                  <span className="font-display text-sm font-bold text-green-300">
                    {sol.tag}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-100 bg-green-50/50 transition-all duration-400 group-hover:border-green-300 group-hover:bg-green-100/60 group-hover:scale-110">
                    <sol.icon className="h-6 w-6 text-green-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-12 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {sol.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  {sol.description}
                </p>

                {/* Label + arrow */}
                <div className="mt-8 flex items-center justify-between border-t border-green-100/60 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-600">
                    {sol.label}
                  </span>
                  <ArrowUpRight className="solution-arrow h-5 w-5 text-green-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
