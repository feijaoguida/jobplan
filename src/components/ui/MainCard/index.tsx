import { ReactNode } from "react";

interface propsMain {
  children: ReactNode,
}

export function MainCard({ children }: propsMain) {
  return (
    <main className='mt-20'>
        <div className="mx-auto w-[calc(100vw-16rem)] py-6 sm:px-6 lg:px-8 flex flex-col gap-3">
          {children}  
        </div>
      </main>
  )
}