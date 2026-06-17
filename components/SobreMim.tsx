import React from 'react'

export default function SobreMim() {
  return (
    <section id="sobre-mim" className="flex flex-col items-center px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Sobre mim
        </h2>

        <div className="mt-6 max-w-[720px] space-y-4 text-center text-base leading-relaxed text-stone-600 dark:text-stone-400 sm:text-lg">
            <p>
                Desenvolvedor Fullstack Pleno com mais de 3 anos construindo
                sistemas robustos do zero. De plataformas SaaS de
                georreferenciamento para prefeituras até a modernização de
                sistemas governamentais como o Detran-MT e o app MT Cidadão.
                Trabalho com{" "}
                <strong className="text-stone-800 dark:text-stone-200">Next.js</strong>,{" "}
                <strong className="text-stone-800 dark:text-stone-200">NestJS</strong>,{" "}
                <strong className="text-stone-800 dark:text-stone-200">TypeScript</strong>{" "}
                e bancos relacionais como PostgreSQL e SQL Server.
            </p>
            <p>
                Além do trabalho em equipe, crio e mantenho projetos
                próprios que me deram uma visão completa do ciclo de vida de
                um produto. Da ideia à monetização e gestão de comunidade.
                Sou o tipo de dev que entende tanto a regra de negócio quanto
                a infraestrutura.
            </p>
        </div>
    </section>
  )
}
