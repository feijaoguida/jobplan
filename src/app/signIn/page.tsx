'use client'
import { useContext } from 'react';

import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Image from 'next/image'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { AuthContext } from '@/contexts/AuthContext';
import Router from 'next/router';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext)

  async function handleSignIn(data: any) {
    try {
      await signIn(data)
      Router.push('/Dashboard')
      
    } catch (error) {
      
    }
  }

  return (
    <div >
      <div className="min-h-screen bg-white flex">
        <div className='hidden lg:block relative w-0 flex-1 bg-gray-900'>
          <div className='flex h-full justify-center items-center'>
            <Image src="/job_interview.svg" width={350} height={350} priority alt='Imagem de Login' />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image src={"/jobPlanLogo.png"} width={100} height={40} alt='Logo' priority />
              <h2 className="mt-6 text-3xl font-semibold text-[#00BFA6]">Entrar</h2>
              <p className="mt-2 text-sm text-gray-600 max-w ">Novo por aqui? 
                <Link href="/Cadastros/users" className="font-medium text-[#00BFA6]" > Cadastre-se </Link></p>
            </div>
            <div className="mt-6">
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className='mb-4'>
                  <Input
                    required={false} 
                    label='email' 
                    register={register} 
                    type="email"
                    placeholder='E-mail'/>
                </div>
                <div className='mb-4'>
                  <Input 
                    required={false} 
                    label='password' 
                    register={register}                 
                    type="password" 
                    placeholder='Password'/>
                </div>
                <div className='mb-4'>
                  <Button>Entrar</Button>
                </div>
                <div className="mb-4">
                  <p>
                    <Link href="/" className=' text-[#00BFA6]'>Esqueceu a senha?</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}
