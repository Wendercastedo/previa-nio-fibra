import { Wifi, Wrench, Network, Building2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'Internet por fibra óptica',
    description:
      'Acesso à internet em altíssima velocidade com fibra óptica de última geração, garantindo download e upload simétricos para sua casa ou escritório.',
    badge: 'Mais procurado',
  },
  {
    icon: Wrench,
    title: 'Instalação de fibra óptica',
    description:
      'Equipe técnica especializada na instalação completa de redes de fibra óptica, do projeto à ativação, com padrão de qualidade certificado.',
  },
  {
    icon: Network,
    title: 'Manutenção de redes',
    description:
      'Monitoramento proativo e manutenção preventiva e corretiva para manter sua infraestrutura de conectividade sempre no ar, sem interrupções.',
  },
  {
    icon: Building2,
    title: 'Soluções para empresas',
    description:
      'Conectividade dedicada e sob medida para empresas, com links redundantes, SLA garantido e suporte prioritário para o seu negócio nunca parar.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Nossos serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Soluções em fibra óptica
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tecnologia de ponta e atendimento especializado para conectar o que
            importa para você.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} card-hover group relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-b from-white to-green-50/30 p-7 shadow-sm hover:border-green-300 hover:shadow-xl hover:shadow-green-600/10`}
            >
              {service.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {service.badge}
                </span>
              )}

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-7 w-7 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-display text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>

              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
              >
                Saiba mais
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-green-100/40 blur-2xl transition-opacity duration-300 group-hover:bg-green-200/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
