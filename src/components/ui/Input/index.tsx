import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";



interface IFormValues {
  "First Name": string;
  Age: number;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<any>;
  required: boolean;
};


export function Input({label, register, required, ...rest}: InputProps, ref: any){
  return(
    <input
      {...register(label, { required })}
      {...rest}
      className='apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
    />           
  )
}