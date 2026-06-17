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
    <div className="w-4xl">
       <h1 className="font-semibold text-5xl">{divhello}</h1>
       {divName.length > 0 && (<span className="text-5xl dark:text-purple-500 text-purple-600 font-bold">{divName}</span>)}
       {divDesc.length > 0 && (<p className="text-xl dark:text-gray-300 text-gray-500">{divDesc}</p>)}
    </div>
  )
}
