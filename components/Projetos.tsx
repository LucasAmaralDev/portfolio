"use client";

import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

const projetos = [
  {
    id: "ddtank",
    titulo: "DDTank Universe",
    descricaoCurta:
      "Servidor completo do clássico DDTank com ecossistema digital próprio, comunidade ativa e plataforma de pagamentos integrada.",
    descricaoLonga:
      "Servidor completo do clássico DDTank com ecossistema digital próprio: site oficial, sistema de jogo, versão mobile, plataforma de pagamentos e recompensas. Atuo como fullstack na arquitetura e evolução contínua do projeto, que mantém uma comunidade ativa de jogadores.",
    funcionalidades: [
      "Site institucional e sistema de jogo completos",
      "Versão desktop com Electron.js e mobile responsiva",
      "Sistema de pagamentos e recompensas integrado",
      "Autenticação JWT e eventos em tempo real com WebSockets",
      "Infraestrutura com Nginx e Windows/Linux Server",
      "Modelagem e otimização de consultas em SQL Server",
    ],
    stacks: ["React.js", "Next.js", "Electron.js", "Node.js", "WebSockets", "SQL Server", "Nginx"],
    link: "https://ddtankuniverse.com.br",
    gradiente: "from-emerald-500 to-teal-600",
    imagem: "/projetos/ddtank/landing.png",
    banner: "/projetos/ddtank/banner.png",
    internas: [
      { src: "/projetos/ddtank/personagens.png", label: "Personagens" },
      { src: "/projetos/ddtank/recarga.png", label: "Recarga" },
      { src: "/projetos/ddtank/downloads.png", label: "Downloads" },
      { src: "/projetos/ddtank/creditos.png", label: "Loja de créditos" },
      { src: "/projetos/ddtank/admin.png", label: "Painel admin" },
    ],
  },
  {
    id: "linkasbio",
    titulo: "LinkasBio",
    descricaoCurta:
      "Plataforma de bio links independente e autossustentável, construída do zero como projeto solo com visão de produto completa.",
    descricaoLonga:
      "Plataforma de bio links independente e autossustentável. Desenvolvi do zero como projeto solo, aplicando visão de produto completa, da concepção e desenvolvimento até a monetização e gestão de usuários.",
    funcionalidades: [
      "Páginas de bio links personalizáveis",
      "Sistema de monetização integrado",
      "Painel administrativo completo",
      "Design responsivo com modo escuro",
      "Otimização de performance e SEO",
    ],
    stacks: ["Next.js", "React.js", "Node.js", "PostgreSQL"],
    link: "https://linkasbio.com",
    gradiente: "from-blue-500 to-cyan-500",
    imagem: "/projetos/linkasbio/landing.png",
    banner: "/projetos/linkasbio/banner.png",
    internas: [
      { src: "/projetos/linkasbio/dashboard.png", label: "Dashboard" },
      { src: "/projetos/linkasbio/perfil.png", label: "Página do usuário" },
    ],
  },
  {
    id: "scfibra",
    titulo: "SC Fibra",
    descricaoCurta:
      "Sistema completo para provedor de internet fibra óptica em São Conrado. Landing page, gestão de clientes, cobranças e suporte automatizado.",
    descricaoLonga:
      "Sistema completo para o provedor SC Fibra, internet fibra óptica em São Conrado. Sou responsável por todo o ecossistema digital da empresa: da landing page em React + Vite até o backoffice com Express e PostgreSQL, passando pela área do cliente com cobranças via Mercado Pago, gestão de técnicos em campo e atendimento automatizado via WhatsApp.",
    funcionalidades: [
      "Landing page institucional com planos e conversão de leads",
      "Área do cliente com segunda via e cobranças via Mercado Pago",
      "Gestão de clientes com histórico e planos ativos",
      "Controle de equipe técnica e ordens de serviço",
      "Bot de atendimento no WhatsApp para suporte 24/7",
      "Painel administrativo com relatórios e dashboards",
    ],
    stacks: ["React + Vite", "Express", "PostgreSQL", "Mercado Pago", "WhatsApp API", "Tailwind CSS"],
    link: "https://scfibra.net",
    gradiente: "from-cyan-500 to-blue-600",
    imagem: "/projetos/scfibra/landing.png",
    banner: "/projetos/scfibra/banner.png",
    internas: [
      { src: "/projetos/scfibra/dashboard.png", label: "Dashboard administrativo" },
      { src: "/projetos/scfibra/planos.png", label: "Gestão de planos" },
      { src: "/projetos/scfibra/financeiro.png", label: "Financeiro" },
      { src: "/projetos/scfibra/cliente.png", label: "Área do cliente" },
    ],
  },
];

export default function Projetos() {
  const [modalAberto, setModalAberto] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{
    src: string;
    label: string;
  } | null>(null);
  const projetoAtivo = projetos.find((p) => p.id === modalAberto);

  return (
    <>
      <section id="projetos" className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-3 text-center text-base text-stone-500 dark:text-stone-400">
            Projetos com usuários reais, rodando em produção. Além destes, há sistemas internos de empresas fechadas que não posso expor, mas que carregam o mesmo nível de entrega.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map((proj) => (
              <article
                key={proj.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all hover:scale-[1.03] hover:shadow-xl dark:border-stone-700 dark:bg-stone-800/50"
              >
                {/* Cover com gradiente ou banner */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden sm:h-52">
                  {/* Banner como background */}
                  {"banner" in proj && proj.banner ? (
                    <img
                      src={proj.banner}
                      alt={proj.titulo}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${proj.gradiente}`}
                    />
                  )}

                  {/* Overlay no hover */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/60">
                    <span className="rounded-full border-2 border-white px-5 py-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                      Ver mais
                    </span>
                  </div>
                </div>

                {/* Título abaixo do banner */}
                <h3 className="px-5 pt-4 text-lg font-semibold text-stone-800 dark:text-white">
                  {proj.titulo}
                </h3>

                {/* Footer do card */}
                <div className="flex flex-col gap-3 p-5">
                  <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                    {proj.descricaoCurta}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stacks.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.stacks.length > 4 && (
                      <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs text-stone-500 dark:bg-stone-700 dark:text-stone-400">
                        +{proj.stacks.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Botão Ver mais */}
                  <button
                    onClick={() => setModalAberto(proj.id)}
                    className="mt-1 w-full rounded-lg border border-purple-500 py-2 text-sm font-medium text-purple-600 transition-colors hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white"
                  >
                    Ver mais
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {projetoAtivo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setModalAberto(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Screenshot full-width no topo */}
            {projetoAtivo.imagem && (
              <div className="relative h-48 overflow-hidden rounded-t-2xl sm:h-64">
                <img
                  src={projetoAtivo.imagem}
                  alt={`Screenshot do projeto ${projetoAtivo.titulo}`}
                  className="h-full w-full object-cover object-top"
                />
                {/* Gradiente sutil embaixo pra transição suave */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent dark:from-stone-800" />
                {/* Close button */}
                <button
                  onClick={() => setModalAberto(null)}
                  className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Conteúdo */}
            <div className="space-y-6 p-6 sm:p-8">
              {/* Título + close (quando não tem imagem) */}
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-stone-800 dark:text-white sm:text-3xl">
                  {projetoAtivo.titulo}
                </h2>
                {!projetoAtivo.imagem && (
                  <button
                    onClick={() => setModalAberto(null)}
                    className="rounded-full p-1.5 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-700 dark:hover:text-stone-300"
                    aria-label="Fechar"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Descrição */}
              <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300">
                {projetoAtivo.descricaoLonga}
              </p>

              {/* Funcionalidades */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-stone-800 dark:text-stone-200">
                  Funcionalidades
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {projetoAtivo.funcionalidades.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologias */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-stone-800 dark:text-stone-200">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projetoAtivo.stacks.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700 dark:bg-stone-700 dark:text-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Galeria interna */}
              {"internas" in projetoAtivo && projetoAtivo.internas && (
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-stone-800 dark:text-stone-200">
                    Áreas internas
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {projetoAtivo.internas.map((img, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setLightbox({ src: img.src, label: img.label })
                        }
                        className="group cursor-pointer overflow-hidden rounded-lg border border-stone-200 bg-stone-50 transition-all hover:shadow-md dark:border-stone-600 dark:bg-stone-700/50"
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.label}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform group-hover:scale-105"
                          />
                        </div>
                        <p className="px-2 py-1.5 text-center text-xs font-medium text-stone-500 dark:text-stone-400">
                          {img.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {projetoAtivo.link && (
                <a
                  href={projetoAtivo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-base font-medium text-white transition-all hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 sm:w-auto"
                >
                  <ExternalLink size={18} />
                  Acessar projeto
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-white/70">{lightbox.label}</span>
            <button
              onClick={() => setLightbox(null)}
              className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center overflow-auto p-4">
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          </div>
          <div className="px-4 py-2 text-center text-xs text-white/40">
            Use Ctrl+scroll ou pinça para dar zoom
          </div>
        </div>
      )}
    </>
  );
}
