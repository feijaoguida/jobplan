import { ReactNode } from "react"

interface propsCardBoard {
  children: ReactNode,
  title?: string
}

export function CardBoard ({children, title}: propsCardBoard) {
  return (
    <div className="bg-white shadow p-4">
      { title && 
      <h2 className='text-zinc-900 mt-10 font-bold mx-auto max-w-7xl px-6 lg:px-8 m-0' >
        {title}
      </h2> }

      {children}  
    </div>
  )
}