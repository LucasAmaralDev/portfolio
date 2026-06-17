import { Briefcase, MapPin } from "lucide-react";

const experiencias = [
  {
    cargo: "Desenvolvedor Full Stack",
    empresa: "DDTank Universe",
    local: "Brasil",
    periodo: "Set 2024 — Atual",
    descricao:
      "Atuo como full stack no ecossistema digital completo do jogo: site oficial com React.js e Next.js, aplicação desktop com Electron.js, APIs robustas em Node.js com Express e autenticação JWT, processamento de eventos em tempo real com WebSockets, modelagem e otimização de consultas em SQL Server com TypeORM, e infraestrutura com Nginx. Também desenvolvi sistemas de pagamentos e recompensas integrados.",
    stacks: ["React.js", "Next.js", "Electron.js", "Node.js", "WebSockets", "SQL Server", "Nginx"],
  },
  {
    cargo: "Engenheiro de Software",
    empresa: "Lexin Innovations",
    local: "Cuiabá, MT",
    periodo: "Mai 2025 — Dez 2025",
    descricao:
      "Engenheiro Fullstack no projeto ESeiafMT, voltado para licitações públicas. Apliquei Domain-Driven Design e Clean Architecture para construir um sistema modular. No backend, APIs escaláveis com NestJS, TypeORM e PostgreSQL. No frontend, interfaces com Next.js, PrimeReact e gerenciamento de estado com Zustand e Zod. Implantei cultura de testes automatizados com Jest e participei ativamente das decisões arquiteturais e de produto.",
    stacks: ["NestJS", "Next.js", "TypeORM", "PostgreSQL", "PrimeReact", "Zustand", "Jest"],
  },
  {
    cargo: "Desenvolvedor Full Stack",
    empresa: "Liquid AI",
    local: "Remoto",
    periodo: "Mar 2025 — Mai 2025",
    descricao:
      "Desenvolvimento de soluções para o setor imobiliário com foco em análise de crédito e risco. Projetei e implementei integrações com APIs de terceiros como Serasa e Equifax. No backend, Python com arquitetura Serverless e MongoDB. No frontend, React com interfaces responsivas para uso interno e clientes da plataforma.",
    stacks: ["Python", "Serverless", "MongoDB", "React", "Serasa API", "Equifax API"],
  },
  {
    cargo: "Desenvolvedor de Software",
    empresa: "MTI — Empresa Mato-grossense de Tecnologia da Informação",
    local: "Cuiabá, MT",
    periodo: "Fev 2024 — Mar 2025",
    descricao:
      "Atuei na manutenção e evolução dos sistemas do Detran-MT e do aplicativo MT Cidadão. Desenvolvi e padronizei templates para React e Node.js, corrigi bugs críticos, refatorei código legado e implementei testes unitários. Integrei APIs com NestJS, configurei monitoramento com Graylog e Sentry, e gerenciei bancos de dados para alta disponibilidade.",
    stacks: ["React", "Node.js", "NestJS", "TypeScript", "Graylog", "Sentry"],
  },
  {
    cargo: "Desenvolvedor Full Stack — Georreferenciamento",
    empresa: "WCOGEO",
    local: "Cuiabá, MT",
    periodo: "Ago 2023 — Out 2024",
    descricao:
      "Desenvolvi um sistema SaaS completo de georreferenciamento para prefeituras, otimizando a gestão de regularização fundiária e administração territorial. Backend com Node.js, TypeORM e PostgreSQL/SQL Server integrado ao GeoServer. Frontend com React e OpenLayers para análise geoespacial interativa. Infraestrutura com Docker, Nginx e servidores Windows/Linux.",
    stacks: ["Node.js", "TypeORM", "PostgreSQL", "SQL Server", "GeoServer", "React", "OpenLayers", "Docker"],
  },
];

export default function ExperienciaProfissional() {
  return (
    <section id="experiencia" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
          Experiência Profissional
        </h2>
        <p className="mt-3 text-center text-base text-stone-500 dark:text-stone-400">
          Minha trajetória construindo software para governo, startups e projetos próprios.
        </p>

        <div className="mt-12 space-y-0">
          {experiencias.map((exp, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {i < experiencias.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700" />
              )}

              <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white shadow-md shadow-purple-500/30">
                <Briefcase size={18} />
              </div>

              <div className="flex-1 rounded-xl border border-stone-200 bg-white p-5 transition-all hover:shadow-lg dark:border-stone-700 dark:bg-stone-800/50 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-white">
                    {exp.cargo}
                  </h3>
                  <span className="whitespace-nowrap rounded-full bg-purple-500/10 px-3 py-0.5 text-xs font-medium text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
                    {exp.periodo}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm text-stone-500 dark:text-stone-400">
                  <span className="font-medium text-stone-700 dark:text-stone-300">
                    {exp.empresa}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.local}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {exp.descricao}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stacks.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
