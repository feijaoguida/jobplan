'use client';

import { api } from "@/services/apiClient";
import { redirect } from 'next/navigation';
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";

type AuthContexData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode
}


export const AuthContext = createContext({} as AuthContexData)

export function signOut(){
  try {
    destroyCookie(undefined, '@jobplan.token')
    redirect('/')
  } catch (error) {
    console.log('erro ao deslocar', error)
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  async function signIn(data: SignInProps){
    try {
      const response = await api.post('/auth/login', data)
      const { authToken, InfoUser } = response.data

      const UM_MES = 60 * 60 * 24 * 30

      setCookie(undefined, '@jobplan.token', authToken, {
        maxAge: UM_MES,
        path: '/'
      })

      setUser({
        id: InfoUser.id,
        name: InfoUser.name,
        email: data.email,
      })

      api.defaults.headers['Authorization'] = `Bearer ${authToken}`
      
    } catch (error) {
      console.log("Erro ao acessar ", error)
    }
  }
  return(
    <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut}}>
      { children }
    </AuthContext.Provider>
  )
}

