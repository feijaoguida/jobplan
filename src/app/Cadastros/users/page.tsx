'use client'
import { useContext } from 'react';

import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Image from 'next/image'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { AuthContext } from '@/contexts/AuthContext';

export default function Users() {
  const { register, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await signIn(data)
  }
  return (
    <div >
      <div className="min-h-screen bg-white flex">
        <div className='hidden lg:block relative w-0 flex-1 bg-gray-900'>
          <div className='flex h-full justify-center items-center'>
            <Image src="/job_register.svg" width={350} height={350} priority alt='Imagem de Login' />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image src={"/jobPlanLogo.png"} width={100} height={40} alt='Logo' priority />
              <h2 className="mt-6 text-3xl font-semibold text-[#00BFA6]">Cadastro</h2>
              <p className="mt-2 text-sm text-gray-600 max-w ">Já tem Cadastro? 
                <Link href="/signIn" className="font-medium text-[#00BFA6]" > Voltar </Link></p>
            </div>
            <div className="mt-6">
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className='mb-4'>
                  <Input required={false} label='email' register={register} type="email" placeholder='E-mail'/>
                </div>
                <div className='mb-4'>
                  <Input required={false} label='password' register={register} type="password" placeholder='Password'/>
                </div>
                <div className='mb-4'>
                  <Button>Cadastrar</Button> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}