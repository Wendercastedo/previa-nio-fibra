import { useEffect, useRef } from 'react';

/**
 * Technology section: an abstract animated network of fiber nodes connected
 * by flowing lines. Labels float around the composition. Feels like a
 * technological interface rather than a content block.
 */
export default function Technology() {
  const svgRef = useRef<SVGSVGElement>(null);

  // Pre-generated node positions (normalized 0-1)
  const nodes = [
    { x: 0.12, y: 0.25, label: 'BAIXA LATÊNCIA', side: 'left' },
    { x: 0.35, y: 0.15 },
    { x: 0.55, y: 0.35 },
    { x: 0.78, y: 0.20, label: 'ALTA ESTABILIDADE', side: 'right' },
    { x: 0.22, y: 0.60 },
    { x: 0.45, y: 0.55 },
    { x: 0.68, y: 0.65, label: 'FIBRA ÓPTICA', side: 'right' },
    { x: 0.88, y: 0.50 },
    { x: 0.15, y: 0.82, label: 'CONEXÃO CONTÍNUA', side: 'left' },
    { x: 0.50, y: 0.80 },
    { x: 0.80, y: 0.85 },
  ];

  // Connection pairs (indices into nodes)
  const connections = [
    [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 2],
    [5, 6], [6, 7], [4, 8], [8, 9], [9, 5], [9, 10], [10, 6], [7, 3],
  ];

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const lines = svg.querySelectorAll<SVGPathElement>('.flow-line');
    let raf = 0;
    let offset = 0;

    function tick() {
      offset -= 0.5;
      lines.forEach((line) => {
        line.style.strokeDashoffset = String(offset);
      });
      raf = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="tecnologia" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="reveal mx-auto mb-20 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            Tecnologia
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Não é apenas internet. <br className="hidden sm:block" />
            É <span className="gradient-text">infraestrutura.</span>
          </h2>
        </div>

        {/* Network visualization */}
        <div className="reveal reveal-delay-2 relative aspect-[16/10] w-full rounded-3xl border border-green-100/50 bg-gradient-to-br from-green-50/40 via-white to-green-50/20 overflow-hidden">
          {/* Glow background */}
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/20 blur-[120px]" />

          <svg
            ref={svgRef}
            viewBox="0 0 1000 625"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connections */}
            {connections.map(([a, b], i) => {
              const n1 = nodes[a];
              const n2 = nodes[b];
              const x1 = n1.x * 1000;
              const y1 = n1.y * 625;
              const x2 = n2.x * 1000;
              const y2 = n2.y * 625;
              const mx = (x1 + x2) / 2;
              const my = (y1 + y2) / 2 - 30;
              return (
                <g key={i}>
                  {/* Glow base */}
                  <path
                    d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                    stroke="rgba(74,222,128,0.1)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Animated flow line */}
                  <path
                    className="flow-line"
                    d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                    stroke="rgba(22,163,74,0.35)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="6 14"
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => {
              const cx = node.x * 1000;
              const cy = node.y * 625;
              const isLabel = !!node.label;
              return (
                <g key={`node-${i}`}>
                  {/* Outer glow */}
                  <circle cx={cx} cy={cy} r={isLabel ? 22 : 12} fill="rgba(74,222,128,0.08)" />
                  {/* Mid ring */}
                  <circle cx={cx} cy={cy} r={isLabel ? 14 : 7} fill="rgba(74,222,128,0.15)" />
                  {/* Core */}
                  <circle cx={cx} cy={cy} r={isLabel ? 6 : 3} fill="#16a34a">
                    <animate
                      attributeName="r"
                      values={isLabel ? "6;8;6" : "3;4.5;3"}
                      dur="3s"
                      begin={`${i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Label nodes get a ring */}
                  {isLabel && (
                    <circle cx={cx} cy={cy} r="18" fill="none" stroke="rgba(22,163,74,0.2)" strokeWidth="1">
                      <animate attributeName="r" values="18;26;18" dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Floating labels */}
          {nodes.filter(n => n.label).map((node, i) => {
            const isLeft = node.side === 'left';
            return (
              <div
                key={`label-${i}`}
                className="absolute flex items-center gap-2 whitespace-nowrap rounded-lg border border-green-100/80 bg-white/80 px-3 py-1.5 backdrop-blur-md"
                style={{
                  left: `${node.x * 100}%`,
                  top: `${node.y * 100}%`,
                  transform: isLeft
                    ? 'translate(-110%, -50%)'
                    : 'translate(10%, -50%)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-semibold tracking-wide text-green-700">
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
