'use client'
import { useEffect, useRef, useState } from "react"

export default function DigitandoTexto() {
    const hello = "Olá, eu sou o"
    const name = "Lucas Henrique Amaral"
    const description = "Desenvolvedor Fullstack | Next.js | React.js | Node.js | SQL"

    const [divhello, setDivHello] = useState("")
    const [divName, setDivName] = useState("")
    const [divDesc, setDivDesc] = useState("")
    const countHello = useRef(0)
    const countName = useRef(0)
    const countDesc = useRef(0)

    useEffect(() => {
        if (countHello.current < hello.length){
            countHello.current++; 
            setTimeout(() => {setDivHello(hello.slice(0, countHello.current))}, 130)
            return;
        }

        if (countName.current < name.length){
            countName.current++; 
            setTimeout(() => {setDivName(name.slice(0, countName.current))}, 110)
            return;
        }

        if (countDesc.current < description.length){
            countDesc.current++; 
            setTimeout(() => {setDivDesc(description.slice(0, countDesc.current))}, 30)
            return;
        }
        

    }, [divhello, divName, divDesc])

  return (
    <div className="w-full text-center md:text-left">
       <h1 className="text-2xl font-semibold text-stone-700 dark:text-stone-300 sm:text-4xl lg:text-5xl">{divhello}</h1>
       {divName.length > 0 && (<span className="text-2xl font-bold text-purple-600 dark:text-purple-400 sm:text-4xl lg:text-5xl">{divName}</span>)}
       {divDesc.length > 0 && (<p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-lg lg:text-xl">{divDesc}</p>)}
    </div>
  )
}
