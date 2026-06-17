import { Briefcase, MapPin } from "lucide-react";

const experiencias = [
  {
    cargo: "Desenvolvedor Fullstack Pleno",
    empresa: "Projetos Próprios & Freelancer",
    local: "Cuiabá, MT",
    periodo: "2023 — Atual",
    descricao:
      "Desenvolvo e mantenho sistemas completos para clientes reais, do backend com Node.js e bancos relacionais até o frontend com React e Next.js. Também crio e opero projetos próprios como o DDTank Universe e LinkasBio, aplicando visão de produto e gestão de comunidade.",
    stacks: ["Next.js", "React", "Node.js", "PostgreSQL", "SQL Server", "Tailwind CSS", "Electron.js"],
  },
  {
    cargo: "Desenvolvedor Fullstack",
    empresa: "SaaS de Georreferenciamento",
    local: "Remoto",
    periodo: "2024 — 2025",
    descricao:
      "Atuei na construção de plataformas SaaS de georreferenciamento para prefeituras, desenvolvendo sistemas robustos do zero. Trabalhei com NestJS no backend, Next.js no frontend e PostgreSQL como banco principal, entregando soluções escaláveis para o setor público.",
    stacks: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "React"],
  },
  {
    cargo: "Desenvolvedor Fullstack",
    empresa: "Detran-MT / MT Cidadão",
    local: "Cuiabá, MT",
    periodo: "2023 — 2024",
    descricao:
      "Participei da modernização de sistemas governamentais do estado de Mato Grosso, incluindo o Detran-MT e o aplicativo MT Cidadão. Contribuí com a migração de sistemas legados para stacks modernas, melhorando performance, manutenibilidade e experiência do cidadão.",
    stacks: ["TypeScript", "React", "Node.js", "SQL Server", "PostgreSQL"],
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

        {/* Timeline */}
        <div className="mt-12 space-y-0">
          {experiencias.map((exp, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Linha da timeline */}
              {i < experiencias.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700" />
              )}

              {/* Ícone */}
              <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white shadow-md shadow-purple-500/30">
                <Briefcase size={18} />
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl border border-stone-200 bg-white p-5 transition-all hover:shadow-lg dark:border-stone-700 dark:bg-stone-800/50 sm:p-6">
                {/* Cabeçalho */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-white">
                    {exp.cargo}
                  </h3>
                  <span className="whitespace-nowrap rounded-full bg-purple-500/10 px-3 py-0.5 text-xs font-medium text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
                    {exp.periodo}
                  </span>
                </div>

                {/* Empresa + Local */}
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm text-stone-500 dark:text-stone-400">
                  <span className="font-medium text-stone-700 dark:text-stone-300">
                    {exp.empresa}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.local}
                  </span>
                </div>

                {/* Descrição */}
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {exp.descricao}
                </p>

                {/* Stacks */}
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
