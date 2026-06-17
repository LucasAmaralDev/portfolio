import React from 'react'

export default function SobreMim() {
  return (
    <div className='flex flex-col items-center'>
        <div>
            <h2 className='text-4xl font-bold dark:text-white text-black'>Sobre mim</h2>
        </div>

        <div className='mt-6 px-8 max-w-[1050px] text-center dark:text-gray-400 text-lg'>
            <p>
                Desenvolvedor Fullstack Pleno com mais de 2 anos construindo
                sistemas robustos do zero. De plataformas SaaS de
                georeferenciamento para prefeituras até a modernização de
                sistemas governamentais como o Detran-MT e o app MT Cidadão.
                Trabalho com <strong>Next.js</strong>,{" "}
                <strong>NestJS</strong>, <strong>TypeScript</strong> e bancos
                relacionais como PostgreSQL e SQL Server.
            </p>
            <p>
                Além do trabalho em equipe, crio e mantenho projetos
                próprios que me deram uma visão completa do ciclo de vida de
                um produto. Da ideia à monetização e gestão de comunidade.
                Sou o tipo de dev que entende tanto a regra de negócio quanto
                a infraestrutura.
            </p>
        </div>
      
    </div>
  )
}
