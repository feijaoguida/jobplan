'use client'

import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive";

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";


import SubMenu from "./SubMenu";


export function Sidebar() {
  const pathname = usePathname();
  let isTab = useMediaQuery({ query: "(max-width: 768px)"});
  const [ isOpen, setIsOpen ] = useState(isTab ? false : true)
  
  const Sidebar_animation = isTab ? 
  {
    open: {
      x: 0,
      width: '16rem',
      transition: {
        damping: 40,
      }
    },
    closed: {
      x: -250,
      width: 0,
      transition: {
        damping: 40,
        delay: 0.15,
      }
    },
  } : {
    open: {
      width: '16rem',
      transition: {
        damping: 40,
      }
    },
    closed: {
      width: '4rem',
      transition: {
        damping: 40,
      }
    },
  }

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    } else {
      setIsOpen(true)
    }
  }, [isTab])

  useEffect(() => {
    isTab && setIsOpen(false)
  }, [pathname])

  return (
    <div>
      <div onClick={() => setIsOpen(false)}
      className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-azul-01/50 
      ${isOpen ? "block " : "hidden"}`}></div>
      <motion.div 
        variants={Sidebar_animation}
        initial={{ x: isTab ? -250 : 0}}
        animate={isOpen ? "open" : "closed"} 
        className="bg-white text-azul-10 shadow-xl z-[998] w-[16rem] max-w-[16rem]
      h-screen overflow-hidden md:relative fixed">

        {/* Logo */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <Image src={"/jobPlanLogo.png"} width={100} height={40} alt='Logo' priority />
          <span className="text-xl whitespace-pre">JobPlan</span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          {/* Primeiro */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 
          flex flex-col gap-1 font-medium overflow-x-hidden
          scrollbar-thin scollbar-track-white scrollbar-track-azul-02
          h-[70%] md:h-[68%]">
            <li>
              <Link
                href="/" 
                className={ `link ${pathname == "/Dashboard" ? "active" : ""}`}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/Cadastros/users" 
                className={ `link ${pathname == "/Cadastros/users" ? "active" : ""}`}>
                <BsPerson size={23} className="min-w-max" />
                Usuarios
              </Link>
            </li>
            <li>
              <Link
                href="/Cadastros/company" 
                className={ `link ${pathname == "/Cadastros/company" ? "active" : ""}`}>
                <HiOutlineDatabase size={23} className="min-w-max" />
                Empresas
              </Link>
            </li>
            <li>
              <Link
                href="/settings" 
                className={ `link ${pathname == "/settings" ? "active" : ""}`}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                Configurações
              </Link>
            </li>
            
            { /* submenu */}
            {(isOpen || isTab) && (
              <div className="border-y py-5 border-azul-03">
                <small className="pl-3 text-azul-10 inline-block mb-2">
                  Produtos
                </small>
                {
                  subMenusList?.map(menu=>(
                    <div key={menu.name} className="flex flex-col gap-1">
                      <SubMenu data={menu}/>
                    </div>
                  ))
                }
              </div>

            )}

          </ul>
          {/* Segundo */}
          {
            isOpen && <div className="flex-1 text-sm z-50 max-h-48 my-auto
            whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-4">
                <div>
                  <p>Spark</p>
                  <small>No-cost</small>
                </div>
                <p className="text-azul-10 py-1.5 px-3 text-xs bg-azul-01
                rounded-xl">
                  Upgrade
                </p>
              </div>

            </div>
          }
          
        </div>

        {/* Botão de Controle */}
        <motion.div 
          animate={
            isOpen ? { x : 0, y: 0, rotate: 0} : { x: -10, y: -200, rotate: 180}
          }
          onClick={() => setIsOpen(!isOpen)}
          transition={{
            duration: 0,
          }}
          className="absolute w-fit h-fit z-50 right-2 bottom-3 cursor-pointer ">
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25}/>
      </div>
    </div>
  )
}