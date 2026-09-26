export default function About() {
  return (
    <section id="a-nio" className="relative overflow-hidden bg-green-50/30 py-28 lg:py-36">
      {/* Decorative elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Asymmetric: left empty space with visual element */}
          <div className="reveal lg:col-span-5 lg:col-start-1">
            {/* Abstract fiber visual */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl lg:h-96">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                {/* Concentric arcs — abstract fiber rings */}
                {[60, 100, 140, 180].map((r, i) => (
                  <circle
                    key={r}
                    cx="200"
                    cy="200"
                    r={r}
                    fill="none"
                    stroke={`rgba(22,163,74,${0.08 + i * 0.04})`}
                    strokeWidth="1"
                  />
                ))}
                {/* Radial lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 200 + Math.cos(rad) * 180;
                  const y2 = 200 + Math.sin(rad) * 180;
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x2}
                      y2={y2}
                      stroke={`rgba(74,222,128,${0.08 + (i % 3) * 0.04})`}
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Flowing curve */}
                <path
                  d="M 50 300 Q 200 50, 350 300"
                  fill="none"
                  stroke="rgba(22,163,74,0.3)"
                  strokeWidth="2"
                  strokeDasharray="6 10"
                  className="dash-flow"
                />
                <path
                  d="M 80 280 Q 200 80, 320 280"
                  fill="none"
                  stroke="rgba(74,222,128,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  className="dash-flow"
                />
                {/* Center node */}
                <circle cx="200" cy="200" r="6" fill="#16a34a">
                  <animate attributeName="r" values="6;9;6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="12" fill="none" stroke="rgba(22,163,74,0.3)">
                  <animate attributeName="r" values="12;24;12" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Right: text with negative space */}
          <div className="reveal reveal-delay-2 lg:col-span-6 lg:col-start-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
              A Nio Fibra
            </span>

            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Conectar é <br />
              só o começo.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              A Nio Fibra é uma empresa de tecnologia focada em conectividade,
              infraestrutura e experiência. Não entregamos apenas internet —
              construímos caminhos de dados que aproximam pessoas, aceleram
              negócios e criam possibilidades.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Cada projeto é tratado como infraestrutura crítica, com padrão
              de qualidade, monitoramento contínuo e atendimento que resolve.
            </p>

            {/* Minimal accent line */}
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-green-500 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
