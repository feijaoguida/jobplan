import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading?: boolean,
  children: ReactNode,
  typeButton?: string
}

type typeProps = {
  "Cancel": string
  "Confirm": string
  "Alert": string
}

export default function Button({ loading, children, typeButton, ...rest }: ButtonProps){
  let color= " bg-azul-00 hover:bg-azul-04 "
  if (typeButton) {
    switch (typeButton) {
      case "Cancel":
        color = " bg-red-600 hover:bg-red-500 "
        break;
      case "Confirm":
        color = " bg-azul-00 hover:bg-azul-04 "
        break;
      case "Confirm":
        color = " bg-yellow-600 hover:bg-yellow-400 "
        break;
    
      default:
        break;
    }
  }
  return (
    <button
      className={`${color} inline-block w-full transition py-4 px-8 leading-none text-white
       font-semibold rounded shadow`}
      disabled={loading}
      {...rest}
    >
      {children}
    </button>
    
  )
}