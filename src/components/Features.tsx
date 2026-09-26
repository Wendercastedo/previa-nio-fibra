import { Zap, Activity, Headphones, Cpu } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Alta velocidade',
    description:
      'Navegue, faça streaming e jogue online com velocidades de até 1 Gbps, sem gargalos e sem espera.',
  },
  {
    icon: Activity,
    title: 'Conexão estável',
    description:
      'Infraestrutura redundante e monitorada 24 horas por dia para garantir o menor tempo de inatividade possível.',
  },
  {
    icon: Headphones,
    title: 'Atendimento especializado',
    description:
      'Suporte humano e técnico sempre pronto para ajudar, com resolução rápida e acompanhamento real do seu chamado.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia de ponta',
    description:
      'Equipamentos de última geração e fibra óptica de alto desempenho para entregar a melhor experiência possível.',
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-green-50/40 py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-green-200/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Por que escolher a Nio Fibra
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Mais do que internet, entregamos uma experiência de conexão completa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${i + 1} group flex flex-col items-center rounded-2xl border border-green-100 bg-white/70 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-green-300 hover:bg-white hover:shadow-xl hover:shadow-green-600/10`}
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-green-100 bg-green-50 transition-all duration-300 group-hover:border-green-300 group-hover:bg-green-100 group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-green-600" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
